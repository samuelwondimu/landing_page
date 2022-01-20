import { Avatar, Box, Card, Container, Grid, Typography } from "@mui/material";
import EmilyImage from "../assets/image-emily.jpg";
import ThomasImage from "../assets/image-thomas.jpg";
import JennieImage from "../assets/image-jennie.jpg";

const clientTestominal = [
  {
    id: 1,
    name: " Emily R.",
    title: "Marketing Director",
    avatar: EmilyImage,
    message:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    id: 2,
    name: "Thomas S.",
    title: "Chief Operating Officer",
    avatar: ThomasImage,
    message:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
  },

  {
    id: 3,
    name: " Jennie F.",
    avatar: JennieImage,
    message:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    title: "Business Owner",
  },
];

interface TestominalProps {
  id: number;
  name: string;
  avatar: string;
  title: string;
  message: string;
}

function TestominalCard(props: TestominalProps) {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar src={props.avatar} sx={{ height: 70, width: 70 }} />
      <Typography variant="body1" gutterBottom sx={{ py: 2, pt: 4 }} color='gray'>
        {props.message}
      </Typography>
      <Box pt={4}>
        <Typography variant="h5" fontWeight={"bold"} gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="subtitle1" color={"GrayText"} gutterBottom>
          {props.title}
        </Typography>
      </Box>
    </Card>
  );
}

export default function Testomnial() {
  return (
    <>
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "60vh",
          py: 4,
        }}
      >
        <Typography
          fontWeight="bold"
          textAlign={"center"}
          color="GrayText"
          variant="h4"
          sx={{ pb: 4 }}
          gutterBottom
        >
          Client testimonials
        </Typography>
        <Grid container spacing={2}>
          {clientTestominal.map((testominal, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TestominalCard {...testominal} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
