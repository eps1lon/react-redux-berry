import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { dispatch, state } = props;

  React.useEffect(() => {
    dispatch({ type: "any" });
    dispatch({ type: "any" });
  }, []);

  return (
    <React.Fragment>
      <button type="button" onClick={() => dispatch({ type: "any" })}>
        Inc
      </button>
      <p>clicked: {state}</p>
    </React.Fragment>
  );
}

export default connect(state => ({ state }))(App);
