import { Box, IconButton, Input, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const ITEMS_SEARCH = [
  {
    name: "Home",
    path: "/",
    icon: {
      active: "mdi:user-search",
      nonactive: "mdi:user-search-outline",
    },
  },
];

const InputSearch = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Input
        placeholder="Search your friend"
        disableUnderline
        sx={{
          py: 0.5,
          px: 2,
          width: "95%",
          border: "1px solid #3F3F3F",
          color: "white",
          borderRadius: "30px",
          backgroundColor: "#3F3F3F",
          alignItems: "center",
        }}
        startAdornment={
          <Stack sx={{ alignItems: "center" }}>
            <Icon
              icon="mdi:account-search-outline"
              style={{
                color: "#B2B2B2",
                width: "20px",
                height: "20px",
                marginRight: 5,
              }}
            />
          </Stack>
        }
      />
    </Box>
  );
};

export default InputSearch;
