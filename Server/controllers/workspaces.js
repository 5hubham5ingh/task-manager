import httpStatus from "http-status";
import { User } from "../Models/user.js";
import { Workspace } from "../Models/workspace.js";
import {
  createNewWorkspace,
  deleteWorkspaceById,
  getUsersWorkSpacesList,
} from "../services/workspaces.js";
import ApiError from "../utils/apiError.js";

export async function getUsersWorkSpaces(request, response) {
  console.log("getting user workplace");

  const { userId } = request.params;
  console.log("get user workspaces", userId);

  const workspaceList = await getUsersWorkSpacesList(userId);

  return response.status(httpStatus.OK).json(workspaceList);
}

export async function createWorkspace(request, response) {
  console.log("creating workspace");

  const userId = request.params.userId;

  if (!userId)
    throw new ApiError(httpStatus.BAD_REQUEST, "User ID is required");

  const newWorkspaceId = await createNewWorkspace(userId, request.body);

  return response.status(httpStatus.CREATED).json({ _id: newWorkspaceId });
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
  const { userId, workspaceId } = request.params;
  const isWorkspaceDeleted = await deleteWorkspaceById(userId, workspaceId);

  return isWorkspaceDeleted
    ? response.status(204).send()
    : response
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error while deleting workspace" });
}
