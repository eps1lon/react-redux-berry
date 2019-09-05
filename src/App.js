import React from "react";
import { connect } from "react-redux";

function App(props) {
  const { dispatch, state } = props;

  React.useEffect(() => {
    dispatch({ type: "any" });
    dispatch({ type: "any" });
  }, [dispatch]);

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
