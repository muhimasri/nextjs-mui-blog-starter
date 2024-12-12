"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  useColorScheme,
} from "@mui/material";
import Nav from "./Nav";

export default function Header() {
  const { mode, setMode } = useColorScheme();

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container>
        <Toolbar>
          <Link
            sx={{
              textDecoration: "none",
            }}
            href="/"
          >
            <Typography
              fontSize="6"
              fontWeight="500"
              mr={5}
              whiteSpace="nowrap"
              color="green.500"
            >
              Mareli Ramos
            </Typography>
          </Link>
          <Nav />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              p: 3,
              minHeight: "56px",
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-theme-toggle"
                name="theme-toggle"
                row
                value={mode}
                onChange={(event) =>
                  setMode(event.target.value as "system" | "light" | "dark")
                }
              >
                <FormControlLabel
                  value="system"
                  control={<Radio />}
                  label="System"
                />
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light"
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
