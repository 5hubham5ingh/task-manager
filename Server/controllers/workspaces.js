import httpStatus from "http-status";
import {
  createNewWorkspace,
  deleteWorkspaceById,
  getUsersWorkSpacesList,
  searchUsers,
} from "../services/workspaces.js";
import ApiError from "../utils/apiError.js";
import catchAsync from "../utils/catchAsync.js";


export const getUsersWorkSpaces = catchAsync(async (request, response) => {
  console.log("getting user workplace");

  const { userId } = request.params;
  console.log("get user workspaces", userId);

  const workspaceList = await getUsersWorkSpacesList(userId);

  return response.status(httpStatus.OK).json(workspaceList);
})


export const createWorkspace = catchAsync(async (request, response) => {
  console.log("creating workspace");

  const userId = request.params.userId;

  if (!userId)
    throw new ApiError(httpStatus.BAD_REQUEST, "User ID is required");

  const newWorkspaceId = await createNewWorkspace(userId, request.body);

  return response.status(httpStatus.CREATED).json({ _id: newWorkspaceId });

})


export const getParticipantsList = catchAsync(async (request, response) => {
  console.log("getting participants lists");
  const participantsList = await searchUsers(request.query.userName);
  return response.status(httpStatus.OK).json(participantsList);

})


export const deleteWorkSpace = catchAsync(async (request, response) => {
  console.log("deleting workspace.");
  const { userId, workspaceId } = request.params;
  const isWorkspaceDeleted = await deleteWorkspaceById(userId, workspaceId);

  return isWorkspaceDeleted
    ? response.status(204).send()
    : response
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error while deleting workspace" });

})
