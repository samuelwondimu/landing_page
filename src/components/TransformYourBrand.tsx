import { Box, Button, Grid, Typography } from "@mui/material";
import ImageTransform from "../assets/image-transform.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TransformYourBrand() {
  const matches = useMediaQuery("(max-width:375px)");
  return (
    <Grid container direction={"row-reverse"}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ImageTransform})`,
          height: "70vh",
        }}
      ></Grid>
      <Grid item xs={12} sm={6} sx={{ height: "70vh" }}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          height="100%"
          sx={{
            p: matches ? 2 : 20,
            textAlign: matches ? "center" : "left",
          }}
        >
          <Typography fontWeight="bold" variant="h3" gutterBottom>
            {matches ? "Transform your brand" : `Transform your brand`}
          </Typography>
          <Typography color="GrayText" variant="body1" gutterBottom>
            {matches
              ? ` We are a full-service creative agency specializing in
            helping brands grow fast. Engage your clients through 
            compelling visuals that do most of the marketing for you.`
              : ` We are a full-service creative agency specializing in
                      helping brands grow fast. Engage your clients through

            compelling visuals that do most of the marketing for you.`}
          </Typography>
          <Button
            sx={{
              alignSelf: matches ? "center" : "left",
              width: 150,
              color: "black",
              fontWeight: "bold",
              background: `repeating-linear-gradient(#fff, #fff 60.9%, hsl(51, 100%, 49%) 20.1%, #fff 100%)`,
            }}
          >
            Learn more
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
