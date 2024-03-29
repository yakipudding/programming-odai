import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { signIn, signInAnonymously } from '../../biz/Auth'
import { Logo, Description } from '../content/Content'
import SignInStyle from '../../style/page/SignInStyle'

function SignIn(props) {
  const classes = SignInStyle();
  const [values, setValues] = React.useState({
      email: '',
      password: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const handleSubmit = name => (e) => {
    e.preventDefault();
    if(name === 'mail')
    {
      signIn(values.email, values.password, redirectDashboard)
    }
    else{
      signInAnonymously(redirectDashboard)
    }
  };

  const redirectDashboard = () => {
    props.history.push('/')
  }

  return (
    <Container maxWidth="sm">
      <div>
        <Logo />
        <Description />
      </div>
      <form className={classes.container} onSubmit={handleSubmit('mail')} noValidate autoComplete="off">
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleSubmit('anonymous')}
          type="button"
        >
          ゲストログイン
        </Button>
      </form>
    </Container>
  )
}

export default SignIn;