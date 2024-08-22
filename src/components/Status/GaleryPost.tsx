import { Box, Typography, Avatar, Input, Stack, Button } from "@mui/material";
import CustomInput from "./input";

const GaleryPost = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      mt={1}
      sx={{
        alignItems: "center",
        px: 2,
        py: 2,
        border: "1px solid #3F3F3F",
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
        <CustomInput placeholder="Type your reply!"></CustomInput>
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
      >
        Reply
      </Button>
    </Stack>
  );
};

export default GaleryPost;
