import React from "react";
import {
  makeStyles,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import logo from "./ustlogo.png";
import logo2 from "./cicslogo.png";
import ASCCIlogo from "./logo-dark.png";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import googlebutton from "./gsignin.png";
import { Hidden } from "@material-ui/core";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  loginSide: {
    background: "#9EA1E9",
    height: "100vh",
  },
  imageSide: {
    background: "#FEC00F",
    height: "100vh",
  },
  ustlogo: {
    maxWidth: "20vh",
  },
  cicslogo: {
    maxWidth: "18vh",
  },
  logo: {
    maxWidth: "30vh",
    borderRadius: "20%",
  },
  text: {
    color: "Black",
    marginBottom: "10px",
  },
  input: {
    color: "black",
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  hiddenbanner: {
    background: "#FEC00F",
    height: "10vh",
  },
  logohiddenbanner: {
    maxWidth: "8vh",
    borderRadius: "20%",
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Box
          component={Grid}
          item
          sm={4}
          md={7}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          {/* Image Side: Logos and Website name*/}
          <Box className={clsx(classes.imageSide, classes.paper)}>
            <Box px={5} pt={2} mb={3}>
              {/*UST CICS Logo Part*/}
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
              >
                <img src={logo} alt="Logo" className={classes.ustlogo} />
                <img src={logo2} alt="Logo" className={classes.cicslogo} />
              </Grid>
            </Box>

            <Box>
              <Box marginBottom="20px">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={ASCCIlogo} alt="Logo" className={classes.logo} />
                </Grid>
              </Box>

              <Box textAlign="center">
                <ThemeProvider theme={theme}>
                  <Typography variant="h3" className={classes.text}>
                    A Student's Concerns System
                  </Typography>
                  <Typography variant="h4" className={classes.text}>
                    for the College of Information
                  </Typography>
                  <Typography variant="h4" className={classes.text}>
                    and Computing Sciences
                  </Typography>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
        </Box>

        <Grid item xs={12} sm={12} md={5} elevation={6} square>
          {/* Input Side, Login buttons*/}
          <Hidden only="lg">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className={classes.hiddenbanner}
            >
              <Grid item>
              <img
                  src={logo}
                  alt="Logo"
                  className={classes.logohiddenbanner}
                />
              </Grid>

              <Grid item>
                <img
                  src={ASCCIlogo}
                  alt="Logo"
                  className={classes.logohiddenbanner}
                />
              </Grid>

              <Grid item>
              <img
                  src={logo2}
                  alt="Logo"
                  className={classes.logohiddenbanner}
                />
              </Grid>
            </Grid>
          </Hidden>
          <Box className={clsx(classes.loginSide, classes.paper)} boxShadow={5}>
            <Box py={7} px={3}>
              <Typography component="div">
                <Box fontSize="h2.fontSize" fontWeight="fontWeightBold" mb={4}>
                  Login
                </Box>
                <form className={classes.form} noValidate autoComplete="off">
                  <Grid container direction={"column"} spacing={5}>
                    <Grid item>
                      <TextField
                        id="Email Address"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          className: classes.input,
                        }}
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="Password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          className: classes.input,
                        }}
                        InputLabelProps={{
                          style: { color: "black" },
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" fullWidth>
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Grid container direction={"column"} spacing={5}>
                  <Grid item>
                    <Box textAlign="center">
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box textAlign="center">
                      <hr></hr>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box textAlign="center">
                      Are you a student?<br></br>
                      <br></br>
                      <Link href="#">
                        <img src={googlebutton} alt="Logo" />
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
