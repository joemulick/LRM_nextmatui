import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';




const styles = {
  root: {
    flexGrow: 1,
  },
  gridTwoOuterContainer: {
    background:'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1554268839/Business-Woman-Transparent-BG-2_d1bhjm.png) no-repeat',
    backgroundSize: '100%',
    minHeight: '100vmin',
    }
}


class MainIndexOne extends React.Component {

    render() {

        const { classes } = this.props;

        return (
          <div className={classes.root}>
             <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch" 
            >

                <Grid item xs={12} sm={6}>
                    <Typography>
                        Grid 1
                    </Typography>
                </Grid>
                <Grid className={classes.gridTwoOuterContainer} item xs={12} sm={6} >

                </Grid>
            </Grid>
          </div>
      );
    }
  }
  


MainIndexOne.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainIndexOne);