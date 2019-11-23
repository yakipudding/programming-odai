import React from 'react'
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
                <Link href={"/OdaiDetail/" + odai.id} className={classes.odaititle}>
                  {odai.title}
                </Link>
                <Link href={"/OdaiEdit/" + odai.id} className={classes.link}>
                  編集
                </Link>
                <div className={classes.odaibottom}>
                  <FavoriteIcon className={classes.like} color="disabled" />
                  <span className={classes.likecount}>5</span>
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