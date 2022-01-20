import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu as MenuIcon } from "@mui/icons-material";

export default function Header() {
  const matches = useMediaQuery("(max-width:390px)");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ background: "none" }} elevation={0}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            fontWeight={"bold"}
            sx={{ flexGrow: 1 }}
          >
            sunnyside
          </Typography>
          {matches ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack spacing={2} direction={"row"}>
              <Button
                color="inherit"
                sx={{
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#efefef",
                    color: "#000",
                  },
                }}
              >
                About
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#efefef",
                    color: "#000",
                  },
                }}
              >
                Services
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#efefef",
                    color: "#000",
                  },
                }}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#efefef",
                    color: "#000",
                  },
                }}
              >
                Contact
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
