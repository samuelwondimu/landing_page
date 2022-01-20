import { Box, Button, Grid, Typography } from "@mui/material";
import ImageStandOut from "../assets/image-stand-out.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function StandOut() {
  const matches = useMediaQuery("(max-width:390px)");

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ImageStandOut})`,
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
          {matches ? (
            <Typography fontWeight="bold" variant="h4" gutterBottom>
              Stand out to the right audience
            </Typography>
          ) : (
            <Typography fontWeight="bold" variant="h3" gutterBottom>
              Stand out to the right audience
            </Typography>
          )}
          <Typography color="GrayText" variant="body1" gutterBottom>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
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
