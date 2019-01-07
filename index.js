import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SimpleSchemaForm from "./components/SimpleSchemaForm"
import ComplexForm from "./components/ComplexForm"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <SimpleSchemaForm />
          <ComplexForm />
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