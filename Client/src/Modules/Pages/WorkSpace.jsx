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

  const updateWorkSpaces = (newWorkSpace) => {
    setWorkSpaces((oldWorkSpaces) => {
      return { ...oldWorkSpaces, newWorkSpace };
    });
  };
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

            item
            md={3}
            key={workSpaces.length + 1}
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
            return <WorkSpaceCard key={index} workSpace={workSpace} />;
          })}
        </Masonry>
      </BackGround>
      {addNewWorkSpace && (
        <AddNewWorkSpaceModal
          addNewWorkSpace={updateWorkSpaces}
          closeModal={closeAddNewWorkSpaceModal}
        />
      )}
    </>
  );
}

function initialValues() {
  return [
    {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    }, {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    },
    {
      _id: 1,
      name: "WorkSpace",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    },

    {
      _id: 1,
      name: "WorkSpace",
      description: "saasdsjdjfsfshdsahdhsdas",
      createdBy: "XYZ",
      participants: ["a", "b", "c", "d"],
      timeOfCreation: "12/02/2023",
      lastModified: "",
    },

  ];
}




