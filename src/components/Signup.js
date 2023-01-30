import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SignUpForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordconfirm: "",
  });

  // form values
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //after form submit data
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
      passwordconfirm: values.passwordconfirm,
    };
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
      />
      <br />
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange("email")}
        margin="normal"
      />{" "}
      <br />
      <TextField
        id="password"
        label="Password"
        className={classes.textField}
        type="password"
        value={values.password}
        onChange={handleChange("password")}
        margin="normal"
      />
      <br />
      <TextField
        id="password-confirm"
        label="Confirm Password"
        className={classes.textField}
        type="password"
        value={values.password}
        onChange={handleChange("password-confirm")}
        margin="normal"
      />
      <br />
      <Button variant="contained" color="primary" className={classes.button}>
        Sign Up
      </Button>
      <Button>{values.name}</Button>
    </form>
  );
}
