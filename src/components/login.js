import React from "react";
import auth_login from "../api/api";

const Login = () => {
  auth_login();
  const token = localStorage.getItem("token");
  console.log("token read from local storage", token);

  return (
    <div>
      Login page
      <h1>{token}</h1>
    </div>
  );
};

export default Login;
/* import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Username" />
      <TextField id="standard-basic" label="Password" type="password" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}
 */
