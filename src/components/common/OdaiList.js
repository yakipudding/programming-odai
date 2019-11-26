import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
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
                <Link href={"/OdaiDetail/" + odai.id} className={classes.odaititle}>
                  {odai.title}
                </Link>
                <FavoriteIcon className={classes.like} color={odai.like ? "primary" : "disabled"} />
                <span className={classes.likecount}>{odai.likecount}</span>
                <DescriptionIcon className={classes.like} color="primary" />
                <span className={classes.likecount}>{odai.reportcount}</span>
                <div className={classes.odaibottom}>
                  <Tags tags={odai.tags} />
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