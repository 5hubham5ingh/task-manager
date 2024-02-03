
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { WORKSPACES } from "../../ApiRoutes/workspaces";
import request from "../../Utils/AxiosApi";

export const useWorkspaces = () => {
  
    const { userId } = useParams();
  
    async function fetchWorkspaces({ queryKey }) {
      const userId = queryKey[1];
      return await request({ url: `${WORKSPACES}/${userId}`, method: "get" });
    }
  
    return useQuery({
      queryKey: ["workspaces", userId],
      queryFn: fetchWorkspaces,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchOnWindowBlur: false,
      enabled: true,
      staleTime: 1000 * 60,
      select: (Data) => Data.data,
    });
  };