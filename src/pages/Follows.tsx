import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Follows = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 1 }}>
      <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
        <Icon
          icon="ep:back"
          cursor={"pointer"}
          fontSize={25}
          onClick={() => navigate("/")}
        />
        <Typography>Follows</Typography>
      </Stack>
    </Box>
  );
};

export default Follows;
