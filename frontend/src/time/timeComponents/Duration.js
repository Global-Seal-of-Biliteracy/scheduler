import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ScheduleIcon from "@material-ui/icons/Schedule";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    duration: {
        display: "flex",
        alignItems: "center",
        maxWidth: "100px",
        justifyContent: "center",
        paddingTop: "7px",
        paddingBottom: "4px",
        color: "#727272",
        minWidth: theme.spacing(8),

    },
    durationText: {
        fontSize: "10px",
    },
    durationIcon: {
        fontSize: "14px",
        margin: "1.5px 3px 1px 0px"
    },

}));

export default function Duration(props) {
    const classes = useStyles();

    function convertMinutes(min) {
        if(min <= 60) {
            return `${min} min`;
        } else {
            return `${(min/60).toPrecision(2)} hr`;
        }
    }

  return (
    <React.Fragment>

          <div className={classes.duration}>
              <ScheduleIcon className={classes.durationIcon}/>
              <Typography className={classes.durationText}>
                  {`${props.duration} min`}
              </Typography>
          </div>
    </React.Fragment>
  );
}
