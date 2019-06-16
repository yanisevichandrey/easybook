import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class OutlinedTextFields extends React.Component {

  render() {
    const { classes, value, onChange, name, label } = this.props;

    return (
        <TextField
          id="outlined-name"
          label={label}
          className={classes.textField}
          value={value}
          name={name}
          onChange={onChange}
          variant="outlined"
        />
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);