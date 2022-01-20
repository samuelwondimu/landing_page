import { Box, Grid, Typography } from "@mui/material";
import RedFruit from "../assets/image-graphic-design.jpg";
import Orange from "../assets/image-photography.jpg";

export default function Works() {
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
          backgroundImage: `url(${RedFruit})`,
          height: "70vh",
        }}
      >
        <Box
          sx={{
            mt: 50,
            textAlign: "center",
          }}
        >
          <Typography
            fontWeight="bold"
            variant="h3"
            gutterBottom
            sx={{ color: "hsl(167, 40%, 24%)" }}
          >
            Graphic design
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "hsl(167, 40%, 24%)" }}
          >
            Great design makes you memorable. We deliver <br /> artwork that
            underscores your brand message <br /> and captures potential
            clients’ attention.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${Orange})`,
          height: "70vh",
        }}
      >
        <Box
          sx={{
            mt: 50,
            textAlign: "center",
          }}
        >
          <Typography
            fontWeight="bold"
            variant="h3"
            gutterBottom
            sx={{ color: " hsl(198, 62%, 26%)" }}
          >
            Photography
          </Typography>
          <Typography
            color="GrayText"
            variant="body1"
            gutterBottom
            sx={{ color: " hsl(198, 62%, 26%)" }}
          >
            Increase your credibility by getting the most <br /> stunning,
            high-quality photos that improve your <br />
            business image.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
