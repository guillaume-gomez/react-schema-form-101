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
        <main>
          <SimpleSchemaForm />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-div')
);