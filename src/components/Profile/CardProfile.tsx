import { Box, Card, Typography, Stack } from "@mui/material";
import InfoProfile from "./InfoProfile";
import useStore from "../../stores/hook";

const CardProfile = () => {
  const {} = useStore();

  // const [fullName, setFullName] = useState("");

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user") || "{}");
  //   if (user && user.fullName) {
  //     setFullName(user.fullName);
  //   }
  // }, []);

  return (
    <Box sx={{}}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#1D1D1D",
          border: "none",
          width: "100%",
          borderRadius: 2,
          marginTop: "5px",
          p: 2,
          gap: "0px",
        }}
      >
        <Typography sx={{ fontSize: 20, marginBottom: 1 }} color="white">
          My Profile
        </Typography>

        <InfoProfile />
      </Card>
    </Box>
  );
};

export default CardProfile;
