import { User } from "../Models/user.js";
import { Workspace } from "../Models/workspace.js";

export async function getUsersWorkSpaces(request, response) {
  console.log("getting user workplace");
  try {
    const { userId } = request.params;
    console.log("get user workspaces", userId);
    const user = await User.findById(userId, "workspaces");

    if (!user || !user.workspaces.length) {
      return response
        .status(404)
        .json({ message: "No workspaces exist for this user" });
    }

    const workspaceList = await Promise.all(
      user.workspaces.map(async (workspaceId) => {
        const workspace = await Workspace.findById(workspaceId).lean();

        return workspace;
      })
    );

    const filteredWorkspaceList = workspaceList.filter((workspace) => {
      if (!workspace) return workspace;

      delete workspace.tasks;

      return workspace;
    });

    response.status(200).json(filteredWorkspaceList);
  } catch (error) {
    console.error("Error in getting list of all workspaces", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

export async function createWorkspace(request, response) {
  console.log("creating workspace");
  try {
    const userId = request.params.userId;

    if (!userId) {
      response.status(400).json({ message: "User does not exist" });
      return;
    }

    const { name, description, participants, owner } = request.body;

    const newWorkspace = {
      name,
      description,
      owner,
      participants,
    };

    const result = await Workspace.create(newWorkspace);

    const newWorkspaceCreated = result.toObject();

    await Promise.all(
      newWorkspaceCreated.participants.map(async (participantsId) => {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: participantsId },
            { $push: { workspaces: result._id } },
            { new: true }
          );

          if (!updatedUser) {
            console.error(`User with ID ${participantsId} not found.`);
          }
        } catch (participantError) {
          console.error(
            `Error updating participant with ID ${participantsId}:`,
            participantError
          );
        }
      })
    );

    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { workspaces: result._id } },
      { new: true }
    );

    response.status(201).json({ _id: result._id });
  } catch (error) {
    if (error.code === 16500) {
      response
        .status(503)
        .json({ message: "Database is full or network connectivity issue" });
    } else {
      console.log("Error while creating new workspace:", error);
      response.status(500).json({ error });
    }
  }
}

export async function getParticipantsList(request, response) {
  console.log("getting participants lists");
  try {
    const participantsList = await User.find({}, "userName _id");

    response.status(200).json(participantsList);
  } catch (error) {
    console.log("Error while getting participants list:", error);
    response.status(500).json({ error });
  }
}

export async function deleteWorkSpace(request, response) {
  console.log("deleting workspace.");
  try {
    const { userId, workspaceId } = request.params;

    const workspace = await Workspace.findById(workspaceId, "owner");

    if (!workspace) {
      response.status(404).json({ message: "Workspace not found" });
      return;
    }

    if (workspace.owner._id.toString() === userId) {
      await Workspace.findByIdAndDelete(workspaceId);
      response.status(204).send(); // 204 No Content indicates successful deletion
    } else {
      response.status(403).json({
        message: "Permission denied: You are not the owner of this workspace",
      });
    }
  } catch (error) {
    if (error.code === 26) {
      response.status(404).json({ message: "Resource not found" });
    } else {
      console.error("Error while deleting workspace", error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
