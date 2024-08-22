import { Avatar, Stack, Input, Button } from "@mui/material";
import React from "react";
import { usePostFunction } from "./hook/usePostFunction";

const GaleryAdd = () => {
  const { handlePost } = usePostFunction();
  const [content, setContent] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePost(content);
        setContent("");
      }}
    >
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          px: 2,
          alignItems: "center",
        }}
      >
        <Avatar src="/assetss/images/photo-profile2.png" />
        <Stack
          direction={"row"}
          gap={24}
          sx={{
            alignItems: "center",
          }}
        >
          <Input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What is happening?!"
          ></Input>
          <img
            src="./assetss/images/gallery-add.png"
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{
            py: "2px",
            px: "4px",
            borderRadius: 23,
            backgroundColor: "#005E0E",
            color: "#909090",
            textTransform: "none",
          }}
          type="submit"
        >
          Post
        </Button>
      </Stack>
    </form>
  );
};

export default GaleryAdd;
