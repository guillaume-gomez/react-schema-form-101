import SchemaForm from 'jsonschema-form-for-material-ui'
import React from 'react'


const styles = theme => ({
  field: {},
  formButtons: {},
  root: {},
});

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

const classes = {};

class SimpleSchemaForm extends React.Component {

  constructor(props) {
    super(props);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFormChanged = this.onFormChanged.bind(this);
  }

  onFormChanged() {
    console.log("something has changed");
  }

  onSubmit() {
    console.log("the form is submitted");
  }

  onCancel() {
    console.log("the form is cancelled");
  }

  render() {
    return (
    <SchemaForm
      classes={classes}
      schema={schema}
      uiSchema={uiSchema}
      formData={initialFormData}
      onCancel={this.onCancel}
      onSubmit={this.onSubmit}
      onChange={this.onFormChanged}
    />);
  }
}

export default SimpleSchemaForm;