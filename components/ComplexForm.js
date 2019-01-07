import SchemaForm from 'jsonschema-form-for-material-ui'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import { styles } from "../style/styles"
import { withStyles } from '@material-ui/core/styles'

const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    }
  }
}

const uiSchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "This description will be in a Popover"
  }
}

const initialFormData = {
  "firstName": "Chuck",
  "lastName": "Norris",
  "age": 75,
}

class ComplexForm extends React.Component {

  constructor(props) {
    super(props);
    this.onCancel      = this.onCancel.bind(this);
    this.onSubmit      = this.onSubmit.bind(this);
    this.onFormChanged = this.onFormChanged.bind(this);
  }

  onFormChanged() {
    console.log("something has changed");
  }

  onSubmit() {
    console.log("the form is submitted");
    alert("submitted");
  }

  onCancel() {
    console.log("the form is cancelled");
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
        onCancel={this.onCancel}
        onSubmit={this.onSubmit}
        onChange={this.onFormChanged}
      />
    </div>);
  }
}

export default withStyles(styles)(ComplexForm);