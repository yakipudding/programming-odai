import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { signIn, signInAnonymously } from '../../biz/Auth'
import Description from '../content/Description'
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
    <Container>
      <div className={classes.description}>
        <Description />
        <p className={classes.p}>デモサイトのため、ゲストログインからログインできます。</p>
      </div>
      <form className={classes.container} onSubmit={handleSubmit('mail')} noValidate autoComplete="off">
        <div>
          <TextField
            id="email"
            label="メールアドレス"
            className={classes.textField}
            onChange={handleChange('email')}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="password"
            label="パスワード"
            className={classes.textField}
            onChange={handleChange('password')}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit('mail')}
            type="button"
          >
            ログイン
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleSubmit('anonymous')}
            type="button"
          >
            ゲストログイン
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default SignIn;