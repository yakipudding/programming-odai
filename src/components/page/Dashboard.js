import React from 'react'
import Container from '@material-ui/core/Container';
import Description from '../content/Description'
import DashboardStyle from '../../style/page/DashboardStyle'

// ダッシュボード
function Dashboard(props) {
  const classes = DashboardStyle();

  return (
    <Container maxWidth="sm">
      <div>
        <Description />
        <h2 className={classes.h}>使い方</h2>
        <p className={classes.p}>このサイトでは人気のお題を見つけたり、</p>
        <p className={classes.p}>他の人のつくってみたレポートを見ることができます。</p>
        <p className={classes.p}>お題の仕様や、他の人のつくってみたレポートを参考にしながら</p>
        <p className={classes.p}>色々なお題に挑戦してみましょう！</p>
      </div>
    </Container>
  )
}

export default Dashboard;