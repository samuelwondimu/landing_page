import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import { Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 3,
          backgroundColor: "hsl(168, 34%, 41%)",
        }}
        spacing={3}
      >
        <Typography
          fontWeight="bold"
          variant="h4"
          gutterBottom
          sx={{ color: "hsl(167, 40%, 24%)" }}
        >
          sunnyside
        </Typography>
        <Stack direction={"row"} spacing={3}>
          <Typography sx={{ color: "hsl(167, 40%, 24%)" }}>About</Typography>
          <Typography sx={{ color: "hsl(167, 40%, 24%)" }}>Service</Typography>
          <Typography sx={{ color: "hsl(167, 40%, 24%)" }}>Products</Typography>
        </Stack>
        <Stack direction={"row"} spacing={3}>
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Pinterest} alt="Pinterest" />
        </Stack>
      </Stack>
    </>
  );
}
