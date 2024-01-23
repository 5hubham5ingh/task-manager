import httpStatus from "http-status";
import { User } from "../Models/user.js";
import { Workspace } from "../Models/workspace.js";
import ApiError from "../utils/apiError.js";

export const getUsersWorkSpacesList = async (userId) => {
  const user = await User.findById(userId, "workspaces");

  if (!user || !user.workspaces.length) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "No workspaces exist for this user"
    );
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

  return filteredWorkspaceList;
};

export const createNewWorkspace = async (userId, workspaceData) => {
  const { name, description, participants, owner } = workspaceData;

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
      const updatedUser = await User.findOneAndUpdate(
        { _id: participantsId },
        { $push: { workspaces: result._id } },
        { new: true }
      );

      if (!updatedUser) {
        console.error(`User with ID ${participantsId} not found.`);
      }
    })
  );

  await User.findOneAndUpdate(
    { _id: userId },
    { $push: { workspaces: result._id } },
    { new: true }
  );

  return result._id;
};

export const searchUsers = async (query) => {
  if (!query) return [];
  const users = await User.find(
    { userName: { $regex: query, $options: "i" } },
    "userName _id"
  );
  return users;
};

export const deleteWorkspaceById = async (userId, workspaceId) => {
  const workspace = await Workspace.findById(workspaceId, "owner");

  if (!workspace)
    throw new ApiError(httpStatus.NOT_FOUND, "Workspace not found");

  if (workspace.owner._id.toString() === userId) {
    await Workspace.findByIdAndDelete(workspaceId);
    return true;
  } else throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
};
