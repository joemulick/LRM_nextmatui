import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const styles = {
  root: {
    flexGrow: 1,
  },
};


class MainIndexOne extends React.Component {

    render() {

        const { classes } = this.props;

        return (
          <div className={classes.root}>
             <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start" 
            >
            
                <Grid item xs={12} sm={6}>
                    <Typography>
                        Grid 1
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>
                        Grid 2
                    </Typography>
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