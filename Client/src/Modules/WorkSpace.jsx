import { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Icon,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import WorkSpaceCard from "./workSpaceCard";
import { SET_Theme_Button, useTheme } from "./Component/Theme/Theme";
import Masonry from "@mui/lab/Masonry";
import { BackGround } from "./Component/Background";

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
            sx={{margin:5}}
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
                  
                  p:'40px'
                }}
              onClick={() => setAddNewWorkSpace(true)}
              >
              <Typography variant="h7">Add new Work space.</Typography>
              <span>➕</span>
            </Stack>

          {workSpaces.map((workSpace, index) => {
            return <WorkSpaceCard  key={index}  workSpace={workSpace} />;
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
    },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
        _id: 1,
        name: "WorkSpace",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum explicabo, id sunt eligendi recusandae corporis iure soluta distinctio commodi! In, quaerat possimus sint a quae saepe laboriosam eveniet illo omnis.",
        createdBy: "XYZ",
        participants: ["a", "b", "c", "d"],
        timeOfCreation: "12/02/2023",
        lastModified: "",
      },  {
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

export const AddNewWorkSpaceModal = ({ addNewWorkSpace, closeModal }) => {
  const { theme } = useTheme();
  const workSpaceNameRef = useRef(null);
  const workSpaceDescriptionRef = useRef(null);
  const [error, setError] = useState("");
  const handleSubmit = () => {
    console.log(workSpaceNameRef.current.target);
    if (workSpaceNameRef.current.value === "") {
      setError("Name is required!");
      return;
    }
    //Sent request to add new workSpace
    const workSpace = {
      name: workSpaceNameRef.current.value,
      description: workSpaceDescriptionRef.current.value
        ? workSpaceDescriptionRef.current.value
        : null,
    };
    console.log("workSpace: ", workSpace);
  };
  return (
    <Box
      direction="column"
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <BluredBackground onClick={closeModal} />
      <Stack
        sx={{ backgroundImage: `linear-gradient(${theme},rgb(140, 140, 243))` }}
        component="form"
        className="form"
        p="2vw"
        spacing="2vw"
      >
        <Typography sx={headingStyle} variant="h6">
          Add new Workplace
        </Typography>
        <TextField
          label="Name"
          inputRef={workSpaceNameRef}
          error={Boolean(error)}
          helperText={error}
          fullwidth
          sx={textFieldStyle}
        />
        <TextField
          label="Description"
          ref={workSpaceDescriptionRef}
          fullwidth
          sx={textFieldStyle}
        />
        <Button
          variant="contained"
          sx={buttonStyle}
          size="large"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "darkBlue" },
  "& label.Mui-focused": { color: "darkBlue" },
};

const buttonStyle = {
  "&:hover": {
    backgroundColor: "darkBlue",
  },
  backgroundColor: "#3268a8",
  marginLeft: "auto",
};

const headingStyle = {
  color: "#3268a8",
  padding: 0,
  margin: 0,
};

export const BluredBackground = ({ onClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(5px)",
        zIndex: -999,
      }}
      onClick={onClick}
    ></div>
  );
};
