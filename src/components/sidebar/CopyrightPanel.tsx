import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Avatar,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const CopyrightPanel = () => {
  return (
    <Box sx={{}}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#262626",
          border: "none",
          width: "25rem",
          borderRadius: 2,
          p: 2,
        }}
      >
        {/* Section - 1 */}
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: "16px", lineHeight: 2 }} color="white">
            Developed By Renaldi Mohamad
          </Typography>
          <Icon
            icon="fluent-mdl2:radio-bullet"
            style={{ color: "#B2B2B2", width: "7px", height: "16px" }}
          />
          <Icon
            icon="mage:github"
            style={{ color: "#B2B2B2", width: "20px", height: "22px" }}
          />
          <Icon
            icon="mdi:linkedin"
            style={{ color: "#B2B2B2", width: "20px", height: "22px" }}
          />
          <Icon
            icon="ic:baseline-facebook"
            style={{ color: "#B2B2B2", width: "20px", height: "22px" }}
          />
          <Icon
            icon="ri:instagram-fill"
            style={{ color: "#B2B2B2", width: "20px", height: "22px" }}
          />
        </Stack>

        {/* Section - 2 */}

        <Stack direction={"row"} sx={{ alignItems: "center", gap: "4px" }}>
          <Typography fontSize={"13px"} color="#B2B2B2">
            Powered by
          </Typography>
          <img
            src="/assetss/images/Photo-Dumbways.png"
            alt="Dumbways - Jpg"
            width={"24px"}
            height={"16px"}
          />
          <Typography fontSize={"13px"} color="#B2B2B2">
            DumbWays Indonesia
          </Typography>
          <Icon
            icon="fluent-mdl2:radio-bullet"
            style={{ color: "#B2B2B2", width: "7px", height: "16px" }}
          />
          <Typography fontSize={"12px"} color="#B2B2B2">
            #1 Coding Bootcamp
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
};

export default CopyrightPanel;
