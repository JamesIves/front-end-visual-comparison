import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form';
import { Link } from 'react-router';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  card: {
    minWidth: 275,
  }
});

class TestForm extends Component {

  renderTextField = ({
    input,
    label,
    placeholder,
    required,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      label={touched && error ? error : label}
      placeholder={placeholder}
      error={touched && error ? true : false}
      required={required}
      {...input}
      {...custom}
    />
  )

  render() {
    const { classes } = this.props
    console.log(this.props)
    return (
      <div className={classes.root}>
        <Grid item xs={12}>
          <Grid container spacing={24}>
            <Card>
              <CardContent>
                <Typography variant="headline" component="h2">
                  {this.props.title}
                </Typography>
                <form onSubmit={this.props.onSubmit}>
                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="name" 
                      label={`${this.props.name} (Name)` || "Name"}
                      placeholder="The name of your test."
                      margin="normal"
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="description"
                      label={`${this.props.description} (Description)` || "Description"}
                      placeholedr="Describe your test."
                      margin="normal"
                      value={this.props.description || null}
                      className={classes.textField}
                      component={this.renderTextField}  />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="live"
                      label={`${this.props.live} (Live URL)` || "Live URL"}
                      placeholder="The url path for your live site."
                      margin="normal"
                      value={this.props.live || null}
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="text" 
                      name="dev"
                      label={`${this.props.dev} (Dev URL)` || "Dev URL"}
                      placeholder="The url path for your dev site."
                      margin="normal"
                      value={this.props.dev || null}
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>

                  <div>
                    <Field 
                      component="input" 
                      type="number" 
                      name="size"
                      placeholder="The browser width you'd like your test to run at."
                      label={`${this.props.size} (Browser Size)` || "Browser Size"}
                      className={classes.textField}
                      component={this.renderTextField} />
                  </div>

                  <Button type="submit">Submit</Button>
                  <Link to="/" className="btn btn-danger"><Button type="submit">Cancel</Button></Link>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name for your test...'
  };

  if (!values.live) {
    errors.live = 'You must enter a URL for the current page to make a comparrison from...'
  };

  if (!values.dev) {
    errors.dev = 'You must enter a URL for the new page to make a comparrison to/from...'
  };

  return errors;
}

export default withStyles(styles)(TestForm);