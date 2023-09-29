import { useState } from "react";
import {
  Stack,
  Typography,
} from "@mui/material";
import WorkSpaceCard from "../Components/workSpaceCard";
import { useTheme } from "../Components/Theme/Theme";
import Masonry from "@mui/lab/Masonry";
import { BackGround } from "../Components/Background";
import { AddNewWorkSpaceModal } from "../Components/AddNewWorkSpaceModal";

export default function WorkSpace() {
  const [workSpaces, setWorkSpaces] = useState(initialValues());
  const [addNewWorkSpace, setAddNewWorkSpace] = useState(false);
  const { theme } = useTheme();

  const addWorkSpaces = (newWorkSpace) => {
    setWorkSpaces((oldWorkSpaces) => {
      return [ ...oldWorkSpaces, newWorkSpace ];
    });
  };

  const removeWorkSpace = (workSpaceId)=>{
    setWorkSpaces((workSpaces)=>{
      return workSpaces.filter((workSpace)=> workSpace.id !== workSpaceId)
    })
  }
  const closeAddNewWorkSpaceModal = () => setAddNewWorkSpace(false);
  return (
    <>
      <BackGround >
        <Masonry
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={4}
          sx={{ margin: 5 }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            md={3}
            key={ 100}
            sx={{
              backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))`,
              p: '40px'
            }}
            onClick={() => setAddNewWorkSpace(true)}
          >
            <Typography variant="h7">Add new Work space.</Typography>
            <span>➕</span>
          </Stack>

          {workSpaces.map((workSpace, index) => {
            return <WorkSpaceCard key={index} workSpace={workSpace} removeWorkSpace={removeWorkSpace} />;
          })}
        </Masonry>
      </BackGround>
      {addNewWorkSpace && (
        <AddNewWorkSpaceModal
          addNewWorkSpace={addWorkSpaces}
          closeModal={closeAddNewWorkSpaceModal}
        />
      )}
    </>
  );
}

function initialValues() {
  return [
    {
      id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 2,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 3,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 4,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 5,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 6,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 7,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 8,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 9,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 0,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 11,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    }, {
      id: 12,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    },
    {
      id: 13,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    },

    {
      id: 14,
      name: "WorkSpace",
      description: "saasdsjdjfsfshdsahdhsdas",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
    },

  ];
}




