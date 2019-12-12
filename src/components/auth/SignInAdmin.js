import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { signIn, signInAnonymously } from '../../biz/Auth'
import { Logo, Description } from '../content/Content'
import SignInStyle from '../../style/page/SignInStyle'

function SignInAdmin(props) {
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
        <p className={classes.p}>デモサイトのため、ゲストログインからログインできます。</p>
      </div>
      <form className={classes.container} onSubmit={handleSubmit('mail')} noValidate autoComplete="off">
        <TextField
          id="email"
          label="メールアドレス"
          className={classes.textField}
          onChange={handleChange('email')}
          margin="normal"
        />
        <TextField
          id="password"
          label="パスワード"
          className={classes.textField}
          onChange={handleChange('password')}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit('mail')}
          type="button"
        >
          ログイン
        </Button>
      </form>
    </Container>
  )
}

export default SignInAdmin;