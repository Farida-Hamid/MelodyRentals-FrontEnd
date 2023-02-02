import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/Auth/auth";

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

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  //error handling state
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  // after form submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    dispatch(userRegister(values));
  };

  //error handling
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    } else {
      return true;
    }
    return errors;
  };

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        label="Name"
        name="name"
        className={classes.textField}
        value={values.name}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        margin="normal"
        helperText={errors.name}
      />
      <TextField
        id="username"
        label="Username"
        name="username"
        className={classes.textField}
        value={values.username}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        margin="normal"
        helperText={errors.username}
      />
      <br />
      <TextField
        id="email"
        label="Email"
        name="email"
        className={classes.textField}
        value={values.email}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        margin="normal"
        helperText={errors.email}
      />
      <br />
      <TextField
        id="password"
        label="Password"
        name="password"
        className={classes.textField}
        type="password"
        value={values.password}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        margin="normal"
        helperText={errors.password}
      />
      <br />
      <TextField
        id="password-confirm"
        label="Confirm Password"
        name="password_confirmation"
        className={classes.textField}
        type="password"
        value={values.password_confirmation}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        margin="normal"
        helperText={errors.confirmPassword}
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;
