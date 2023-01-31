import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/Auth/auth';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const dispatch = useDispatch();

  // after form submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(values));
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
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
        margin="normal"
      />
      <TextField
        id="username"
        label="Username"
        name="username"
        className={classes.textField}
        value={values.username}
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
        margin="normal"
      />
      <br />
      <TextField
        id="email"
        label="Email"
        name="email"
        className={classes.textField}
        value={values.email}
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
        margin="normal"
      />
      <br />
      <TextField
        id="password"
        label="Password"
        name="password"
        className={classes.textField}
        type="password"
        value={values.password}
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
        margin="normal"
      />
      <br />
      <TextField
        id="password-confirm"
        label="Confirm Password"
        name="password_confirmation"
        className={classes.textField}
        type="password"
        value={values.password_confirmation}
        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
        margin="normal"
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
