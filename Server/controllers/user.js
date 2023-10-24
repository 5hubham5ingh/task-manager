import { User } from "../Models/user.js";
import { Workspace } from "../Models/workspace.js";

// get workspaces list
export async function getUsersWorkSpaces(request, response) { console.log("getting user workplace")
  try {
    const { userId } = request.params;
    console.log("get user workspaces",userId)
    // Use await to get user's workspaces
    const user = await User.findById(userId, "workspaces");

    if (!user || !user.workspaces.length) {
      return response
        .status(404)
        .json({ message: "No workspaces exist for this user" });
    }

    // Use Promise.all to fetch all workspaces concurrently
    const workspaceList = await Promise.all(
      user.workspaces.map(async (workspaceId) => {
        const workspace = await Workspace.findById(workspaceId).lean();

        return workspace; // Return the workspace document
      })
    );

    //FIlter out the workspaces that have been deleted 
    //remove task list 
    // replace user and participants Id with their name
    const filteredWorkspaceList = workspaceList.filter(workspace=>{
      
      if (!workspace) return workspace;

      delete workspace.tasks;

      return workspace;
    })

   

    response.status(200).json(filteredWorkspaceList);
  } catch (error) {
    console.error("Error in getting list of all workspaces", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

// create a new workspace
export async function createWorkspace(request, response) {console.log("creating workspace")
  // Try to create a new workspace.
  try {
    // Get the user ID from the request parameters.
    const userId = request.params.userId;

    // Check if the user ID exists.
    if (!userId) {
      response.status(400).json({ message: "User does not exist" });
      return;
    }

    // Get the workspace name, description, and participants from the request body.
    const { name, description, participants,owner } = request.body;

    // Create a new workspace object.
    const newWorkspace = {
      name,
      description,
      owner,
      participants,
    };

    // Create the new workspace in the Workspace collection.
    const result = await Workspace.create(newWorkspace);

    const newWorkspaceCreated = result.toObject();

    // Add the new workspace to the participants user
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
            // Handle this case as needed
          }
        } catch (participantError) {
          console.error(
            `Error updating participant with ID ${participantsId}:`,
            participantError
          );
          // Handle the error for this specific participant
        }
      })
    );

    // Set the new workspace in owner
     await User.findOneAndUpdate(
      { _id: userId },
      { $push: { workspace: result._id } },
      { new: true }
    );

    // Set the response status code to 201 Created and send the workspace ID as JSON.
    response.status(201).json({ _id: result._id });
  } catch (error) {
    // Check if the error code is 16500, which indicates that the database is full or there is a network connectivity issue.
    if (error.code === 16500) {
      response
        .status(503)
        .json({ message: "Database is full or network connectivity issue" });
    } else {
      // Log the error and set the response status code to 500 Internal Server Error.
      console.log("Error while creating new workspace:", error);
      response.status(500).json({ error });
    }
  }
}

// get all participants list
export async function getParticipantsList(request, response) {console.log("getting participants lists")
  // Try to get a list of all participants from the User collection.
  try {
    const participantsList = await User.find({}, "userName _id");

    // Set the response status code to 200 OK and send the participants list as JSON.
    response.status(200).json(participantsList);
  } catch (error) {
    // Log the error and set the response status code to 500 Internal Server Error.
    console.log("Error while getting participants list:", error);
    response.status(500).json({ error });
  }
}

// Delete workspace
export async function deleteWorkSpace(request, response) {console.log("deleting workspace.")
  try {
    const { userId, workspaceId } = request.params;

    // Find the workspace and retrieve the owner information
    const workspace = await Workspace.findById(workspaceId, "owner");

    // Check if the workspace exists
    if (!workspace) {
      response.status(404).json({ message: "Workspace not found" });
      return;
    }

    // Check if the user is the owner of the workspace
    if (workspace.owner._id.toString() === userId) {
      // Delete the workspace
      await Workspace.findByIdAndDelete(workspaceId);
      response.status(204).send(); // 204 No Content indicates successful deletion
    } else {
      response.status(403).json({
        message: "Permission denied: You are not the owner of this workspace",
      });
    }
  } catch (error) {
    // Handle errors
    if (error.code === 26) {
      response.status(404).json({ message: "Resource not found" });
    } else {
      console.error("Error while deleting workspace", error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
