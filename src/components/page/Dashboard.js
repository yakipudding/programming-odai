import React from 'react'
import { Container, Button } from '@material-ui/core/';
import { Logo } from '../content/Content'
import DashboardStyle from '../../style/page/DashboardStyle'

// ダッシュボード
function Dashboard(props) {
  const classes = DashboardStyle();

  return (
    <Container maxWidth="sm">
      <div>
        <Logo />
        <p className={classes.p}>お気に入りのお題を探そう！</p>
        <div className={classes.mobileMenu}>
          <Button 
            variant="contained" 
            color="primary" 
            href="/OdaiSearch?mode=popular"
            className={classes.mobileButton}
          >
            人気のお題
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            href="/OdaiSearch?mode=new"
            className={classes.mobileButton}
          >
            新着のお題
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            href="/ReportSearch"
            className={classes.mobileButton}
          >
            みんなの作ってみた
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            href="/OdaiCreate"
            className={classes.mobileButton}
          >
            お題を投稿する
          </Button>
        </div>
        <table className={classes.table}>
          <tbody>
            <tr className={classes.tr}>
              <td>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="/OdaiSearch?mode=popular"
                  className={classes.button}
                >
                  人気のお題
                </Button>
              </td>
              <td>人気のお題をチェックしよう！</td>
            </tr>
            <tr className={classes.tr}>
              <td>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="/OdaiSearch?mode=new"
                  className={classes.button}
                >
                  新着のお題
                </Button>
              </td>
              <td>新着のお題をチェックしよう！</td>
            </tr>
            <tr className={classes.tr}>
              <td>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="/ReportSearch"
                  className={classes.button}
                >
                  みんなの作ってみた
                </Button>
              </td>
              <td>みんなが作ってみた設計やソースコードを見てみよう！</td>
            </tr>
            <tr className={classes.tr}>
              <td>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  href="/OdaiCreate"
                  className={classes.button}
                >
                  お題を投稿する
                </Button>
              </td>
              <td>お題を投稿してみよう！</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default Dashboard;