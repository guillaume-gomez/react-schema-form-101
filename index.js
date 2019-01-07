import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpleSchemaForm from "./components/SimpleSchemaForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        Hello {this.props.name}
        <SimpleSchemaForm />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App name="John" />,
  document.getElementById('react-div')
);