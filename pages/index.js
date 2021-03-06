/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainIndexOne from '../components/MainIndexOne';


const styles = theme => ({
  root: {

  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MainIndexOne />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
