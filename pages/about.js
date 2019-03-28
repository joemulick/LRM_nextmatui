/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Link from 'next/link';

const styles = theme => ({
  root: {

  },
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
