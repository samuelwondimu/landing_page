import {  Grid } from "@mui/material";
import Cone from "../assets/image-gallery-cone.jpg";
import MilkBottles from "../assets/image-gallery-milkbottles.jpg";
import Orange from "../assets/image-gallery-orange.jpg";
import SugarCubes from "../assets/image-gallery-sugarcubes.jpg";

const galleryImages = [Cone, MilkBottles, Orange, SugarCubes];

export default function Gallery() {
  return (
    <>
      <Grid container>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={3} key={index} sx={{ mb: -1 }}>
            <img src={image} alt="gallery" width={"100%"} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
