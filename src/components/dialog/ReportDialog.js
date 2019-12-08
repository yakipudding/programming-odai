import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';
import { insertReport } from '../../biz/DBAccessor'
import TagsField from '../common/TagsField'
import ReportDialogStyle from '../../style/page/ReportDialogStyle'

function ReportDialog(props) {
  const classes = ReportDialogStyle();
  const [values, setValues] = React.useState({
      url: '',
      github: '',
      comment: '',
  });
  const [tagValues, setTagValues] = useState(
    { 
      input: '',
      newtagkey: 0,
      tags: [], 
    }
  );

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
      // tags 重複の削除
      let registerTags = tagValues.tags
                          .filter((x, i, self) => { return self.indexOf(x) === i;});
      // tag
      let registerReport = {
        ...values,
        tags: registerTags.join(' ')
      }
      //firebaseに登録
      insertReport(props.odaiid, props.odaiName, registerReport, registerTags, props.reload)
  };

  return (
    <Dialog 
      open={props.dialogOpen} 
      onClose={props.handleDialogClose} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        つくってみた投稿
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          お題をつくってみたら、ブログ記事やソースを共有しましょう！
        </DialogContentText>
        <div className={classes.textfield}>
          <TagsField
            tagValues={tagValues}
            setTagValues={setTagValues}
            dialog
            />
        </div>
        <TextField
          id="url"
          className={classes.textfield}
          label="URL"
          placeholder="設計や実装について書いたブログ記事のURL"
          fullWidth
          onChange={handleChange('url')}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="github"
          className={classes.textfield}
          label="ソースコードのURL（GitHub）"
          fullWidth
          onChange={handleChange('github')}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="comment"
          className={classes.textfield}
          label="コメント"
          placeholder="○○で実装してみました。いい感じです"
          fullWidth
          onChange={handleChange('comment')}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          投稿する
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReportDialog;