import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import { Container, IconButton, Button, Grid, Tooltip } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import HeadingRenderer from '../../biz/Renderer'
import { getOdaiByIdWithLike, setOdaiLike } from '../../biz/DBAccessor'
import Tags from '../common/Tags'
import ReportList from '../common/ReportList'
import ReportDialog from '../dialog/ReportDialog'
import OdaiDetailStyle from '../../style/page/OdaiDetailStyle'
import '../../style/MarkDownPreview.css';

function OdaiDetail(props) {
  const classes = OdaiDetailStyle();
  const [init] = useState({
    odaiId: props.match.params.id,
  });
  const [values, setValues] = useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  // 初期処理
  useEffect(() => {
    if (init.odaiId) {
      //firebaseから取得
      getOdaiByIdWithLike(init.odaiId).then((odai) => {
        setOdaiValues(odai)
      })
    }
  }, [init]
  );

  const setOdaiValues = (odai) => {
    setValues({
          ...odai,
        });
  }
  const handleLike = event => {
    let addLikeCount = values.like ? -1 : 1;
    setOdaiLike(init.odaiId, !values.like)
    setValues({
          ...values,
          like: !values.like,
          likecount: values.likecount + addLikeCount,
        });
  }

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const reload = () => {
    props.history.push('/')
    props.history.replace('/OdaiDetail/' + init.odaiId)
  }


  if(values){
    return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="center" className={classes.header}>
              <h1 className={classes.title}>{values.title}</h1>
              <div id="likecount">
                <Tooltip title={values.like ? "いいね済" : "いいねする" } placement="top">
                  <IconButton aria-label="like" color="primary" onClick={handleLike}>
                    <FavoriteIcon color={values.like ? "primary" : "disabled" } />
                  </IconButton>
                </Tooltip>
                <span>{values.likecount}</span>
              </div>
              <div id="reportcount">
                <Tooltip title={"つくってみた数"} placement="top">
                  <IconButton aria-label="report" color="primary" href={'#reports'} >
                    <DescriptionIcon color="primary" />
                  </IconButton>
                </Tooltip>
                <span>{values.reportcount}</span>
              </div>
            </Grid>
            <Grid container justify="center">
              <Tags tags={values.tags} />
            </Grid>
          </Grid>
          <Grid item md={7} sm={12}>
            <div className={classes.contentHeader}>
              <h2 id="odai" className={classes.contentH2}>お題の概要</h2>
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<CreateIcon fontSize="small"/>}
                  href={"/OdaiEdit/" + init.odaiId }
                >
                編集する
                </Button>
            </div>
            <Markdown 
              source={values.content} 
              className="previewField" 
              renderers={{heading: HeadingRenderer}} 
            />
          </Grid>
          <Grid item md={5} sm={12} xs={12} className={classes.reportArea}>
            <div className={classes.contentHeader}>
              <h2 id="reports" className={classes.contentH2}>みんなのつくってみた</h2>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<AddIcon fontSize="small"/>}
                onClick={handleDialogOpen}
              >
                投稿
              </Button>
            </div>
            <ReportList reports={values.reports} />
          </Grid>
        </Grid>
      </Container>
      <ReportDialog
        odaiid={init.odaiId}
        odaiName={values.title}
        dialogOpen={dialogOpen}
        handleDialogClose={handleDialogClose}
        reload={reload}
      />
    </div>
    );
  }
  else{
    return null
  }
}

export default OdaiDetail;