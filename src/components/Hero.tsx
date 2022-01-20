import { Box, Typography } from "@mui/material";
import HeroImage from "../assets/image-header.jpg";
import HeroImageMobile from "../assets/mobile/image-header.jpg";
import ArrowDown from "../assets/icon-arrow-down.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Hero() {
  const matches = useMediaQuery("(max-width:390px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${matches ? HeroImageMobile : HeroImage})`,
          height: "80vh",
        }}
      >
        <Box sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: matches ? 30 : 70,
              color: "whitesmoke",
              fontWeight: "bold",
              letterSpacing: 10,
            }}
          >
            WE ARE CREATIVES
          </Typography>
          <img src={ArrowDown} alt="Arrow Down" />
        </Box>
      </Box>
    </>
  );
}
