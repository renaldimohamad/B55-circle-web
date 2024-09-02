import { Stack, Typography } from "@mui/material";

const Search = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Typography fontSize={"20px"} color={"#FFFFFF"} lineHeight={"28px"}>
        No results for “asmorncd”
      </Typography>
      <Typography fontSize={"14px"} color={"#909090"} lineHeight={"20px"}>
        Try searching for something else or check the
      </Typography>
      <Typography fontSize={"14px"} color={"#909090"} lineHeight={"20px"}>
        spelling of what you typed.
      </Typography>
    </Stack>
  );
};

export default Search;
