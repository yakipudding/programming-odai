import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link';
import { getOdais } from '../../biz/DBAccessor'
import moment from 'moment'
import { CommonStyle, DashboardStyle } from '../../style/CommonStyle'

// お題一覧
function Dashboard(props) {
  const [init] = useState(true);
  const [odais, setOdais] = useState(null);
  useEffect(() => {
    // firebaseから取得
    getOdais(setOdais)
  }, [init]);

  const handleClick = (event, rowData) => {
    this.props.history.push('/OdaiDetail/' + rowData.id);
  }
  
  const commonClasses = CommonStyle();
  const classes = DashboardStyle();

  return (
    <Container maxWidth="sm" className={commonClasses.root}>
      <h1>お題一覧</h1>
      {
        odais && odais.map(odai => {
          return (
            <div>
              <div className={classes.odai}>
                <Typography variant="h5" component="h3" gutterBottom className={classes.odaititle}>
                  <Link href={"/OdaiDetail/" + odai.id} className={classes.link}>
                    {odai.title}
                  </Link> <FavoriteIcon /><span>5</span>
                  <Link href={"/OdaiEdit/" + odai.id} className={classes.link}>
                    編集
                  </Link>
                </Typography>
                <div>
                  {odai.tags && odai.tags.split(' ').map(tag => {
                    return (<Chip
                      size="small"
                      label={tag}
                      onClick={handleClick}
                      className={classes.chip}
                    />)
                    }
                  )}
                </div>
                <div className={classes.odaibottom}>
                  {odai.detail}
                </div>
              </div>
              <hr />
            </div>
          )
        })
      }
    </Container>
  );
}

export default Dashboard;