import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const Homepage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4">Homepage</Typography>
                        <Typography variant="body1">Diese Plattform bietet den Möglichkeit, um sich über spannende Themen auszutauschen!</Typography>
                        <Typography variant="body1">Jeder Nutzer hat die Möglichkeit, eine eigene Besprechung zu eröffnen, um somit sein spannendes Thema mit anderen Nutzern zu teilen!</Typography>
                        <Typography variant="body1">Jeder Nutzer hat die freie Wahl an welcher spannenden Besprechung er teilnehmen möchte!</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Homepage;
