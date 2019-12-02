import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signIn, signInAnonymously } from '../../biz/Auth'
import { CommonStyle, SignInStyle } from '../../style/CommonStyle'

function SignIn(props) {
  const commonClasses = CommonStyle();
  const signinClasses = SignInStyle();
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
    <Container className={commonClasses.root}>
      <div className={signinClasses.description}>
        <h1>プログラミングお題サイト　ODAI</h1>
        <p>プログラミング初心者だけど、なにを作ったらいいかわからない…</p>
        <p>なんとなくプログラミングしたいけど、特に作りたいものがない…</p>
        <p>そんな人向けの、プログラミングお題サイトを作ってみました！</p>
        <p>ユーザー登録しなくても、ゲストログインで閲覧することができます。</p>
      </div>
      <form className={signinClasses.container} onSubmit={handleSubmit('mail')} noValidate autoComplete="off">
        <div>
          <TextField
            id="email"
            label="メールアドレス"
            className={signinClasses.textField}
            onChange={handleChange('email')}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="password"
            label="パスワード"
            className={signinClasses.textField}
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
            className={signinClasses.button}
            onClick={handleSubmit('mail')}
            type="button"
          >
            ログイン
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={signinClasses.button}
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