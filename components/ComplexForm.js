import SchemaForm from 'jsonschema-form-for-material-ui'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import { styles } from "../style/styles"
import { withStyles } from '@material-ui/core/styles'

const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "title": "Email",
      "pattern": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    "title": {
      "type": "string",
      "title": "title",
      "maxLength": 40,
      "minLength": 10
    },
    "myVariable": {
      "type": "string",
      "title": "my custom variable"
    }
  }
}

const uiSchema = {
  "email": {
    "ui:widget": "updown",
    "ui:title": "email of person",
    "ui:description": "This description will be in a Popover"
  },
  "title": {
    "ui:title": "title of the episode",
  },
  "myVariable": {
    "ui:title": "My custom variable",
    "ui:help": "Don't forget to add 'youtube' in preffix"
  }
}

const initialFormData = {
  email: "it's not an email"
}

class ComplexForm extends React.Component {

  constructor(props) {
    super(props);
    this.onCancel      = this.onCancel.bind(this);
    this.onSubmit      = this.onSubmit.bind(this);
    this.onFormChanged = this.onFormChanged.bind(this);
  }

  onFormChanged({formData}) {
    console.log(formData)
    console.log("something has changed");
  }

  onSubmit({formData}) {
    console.log("the form is submitted");
    console.log(formData)
  }

  onCancel(event) {
    console.log(event)
    console.log("the form is cancelled");
  }

  validate(formData, errors) {
    console.log(formData)
    console.log(errors)
    return errors;
  }

  render() {
    const { classes } = this.props;
    return (
    <div>
      <Typography variant="h4" color="inherit" noWrap>
        More Complex Form
      </Typography>
      <SchemaForm
        classes={classes}
        schema={schema}
        uiSchema={uiSchema}
        formData={initialFormData}
        validate={this.validate}
        onCancel={this.onCancel}
        onSubmit={this.onSubmit}
        onChange={this.onFormChanged}
      />
    </div>);
  }
}

export default withStyles(styles)(ComplexForm);