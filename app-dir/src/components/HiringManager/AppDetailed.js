import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    marginBottom: '2rem;',
    boxSizing: 'border-box;'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  body: {
      boxSizing: 'border-box !important;',
    width: '100%;',
    maxWidth: 280
  },
  actions: {
    padding: '0 5% 5% 30%;'
  },
  acceptBtn: {
    background: '#8afa8a;'
  },
  rejectBtn: {
    background: '#ff4444;'
  }
});

export default function AppDetailed(props) {
  const classes = useStyles();
  const {app} = props

  return (
    <Card className={classes.root} raised='true'>
      <CardContent>
        <Typography variant="h5" component="h2">
        {app.firstName} {app.lastName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {app.email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {app.phone}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p" gutterBottom>
          First Answer: {app.ext1}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p" gutterBottom>
          Second Answer: {app.ext2}
          </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button className={classes.acceptBtn} size="small">Accept</Button>
        <Button className={classes.rejectBtn} size="small">Reject</Button>
      </CardActions>
    </Card>
  );
}



