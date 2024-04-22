import { useQuery } from "@tanstack/react-query";
import { WORKSPACE } from "../../ApiRoutes/workspace";
import request from "../../Utils/AxiosApi";

export const useWorkspace = (workspaceId) => {
  async function fetchWorkspace({ queryKey }) {
    const workspaceId = queryKey[1];
    return await request({
      url: `${WORKSPACE}/${workspaceId}`,
      method: "get",
    });
  }

  return useQuery({
    queryKey: ["workspace", workspaceId],
    queryFn: fetchWorkspace,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnWindowBlur: false,
    refetchInterval: 1000 * 60,
    staleTime: 1000 * 60,
    select: (Data) => Data.data,
    enabled: true,
  });
};
