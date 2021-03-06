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
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
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
    "ui:description": "(earthian year)"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "date": {
    "ui:widget": "alt-datetime"
  },
  "telephone": {
    "ui:options": {
      "inputType": "tel"
    }
  }
}

const initialFormData = {
  "firstName": "Chuck",
  "lastName": "Norris",
  "age": 75,
}

class SimpleSchemaForm extends React.Component {

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
        Basic Form
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

export default withStyles(styles)(SimpleSchemaForm);