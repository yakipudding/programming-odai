import React from 'react'
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import Tags from '../common/Tags'
import OdaiListStyle from '../../style/page/OdaiListStyle'

// お題一覧
function OdaiList({odais}) {
  const classes = OdaiListStyle();

  return (
    <div>
      { odais.map((odai) => { 
          return (
            <div key={odai.id}>
              <div className={classes.odai}>
                <Link href={"/OdaiDetail/" + odai.id} className={classes.odaiTitle}>
                  {odai.title}
                </Link>
                <FavoriteIcon className={classes.icon} color={odai.like ? "primary" : "disabled"} />
                <span className={classes.count}>{odai.likecount}</span>
                <DescriptionIcon className={classes.icon} color="primary" />
                <span className={classes.count}>{odai.reportcount}</span>
                <div>
                  <Tags tags={odai.tags} />
                </div>
              </div>
              <hr className={classes.hr} />
            </div>
          )
        })
      }
    </div>
  );
}

export default OdaiList;