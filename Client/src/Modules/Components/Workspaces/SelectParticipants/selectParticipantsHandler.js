import { useEffect, useRef, useState } from "react";
import { PARTICIPANTS } from "../../../ApiRoutes/workspaces";
import request from "../../../Utils/AxiosApi";

export default function SelectParticipantsHandler({ children, participants }) {
  const [isSearching, setIsSearching] = useState(false);
  const [options, setOptions] = useState([]);
  const isLoading = isSearching && options.length === 0;

  // useEffect(() => {
  //   let active = true;

  //   if (!isLoading) {
  //     return undefined;
  //   }

  //   (async () => {
  //     try {
  //       const response = await request({
  //         url: `${PARTICIPANTS}?search=`,
  //         method: "get",
  //       });
  //       active && setOptions(response.data);
  //     } catch (error) {
  //       console.log("error while fetching participants list", error);
  //     }
  //   })();

  //   return () => {
  //     active = false;
  //   };
  // }, [isLoading]);

  useEffect(() => {
    if (!isSearching) {
      setOptions([]);
    }
  }, [isSearching]);

  const handleChange = (e, value) => {
    participants.current = value;
  };

  const searchUser = (value) => {
    if (value.length % 3 === 0 && value.length !== 0) {
      setIsSearching(true);
      (async () => {
        try {
          const response = await request({
            url: `${PARTICIPANTS}?userName=${value}`,
            method: "get",
          });
          setOptions(response.data);
        } catch (error) {
          console.log("error while fetching participants list", error);
        }
      })();
    }
  };

  const stopSearch = () => {
    setIsSearching(false);
  };

  return children({
    isSearching,
    searchUser,
    stopSearch,
    options,
    isLoading,
    handleChange,
  });
}
