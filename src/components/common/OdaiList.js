import React from 'react'
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link';
import Tags from '../common/Tags'
import { OdaiListStyle } from '../../style/CommonStyle'

// お題一覧
function OdaiList({odais}) {
  const classes = OdaiListStyle();

  return (
    <div>
      { odais.map((odai) => { 
          return (
            <div key={odai.id}>
              <div className={classes.odai}>
                <Typography variant="h5" component="h3" gutterBottom className={classes.odaititle}>
                  <Link href={"/OdaiDetail/" + odai.id} className={classes.link}>
                    {odai.title}
                  </Link> <FavoriteIcon /><span>5</span>
                  <Link href={"/OdaiEdit/" + odai.id} className={classes.link}>
                    編集
                  </Link>
                </Typography>
                <Tags tags={odai.tags} />
                <div className={classes.odaibottom}>
                  {odai.detail}
                </div>
              </div>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default OdaiList;