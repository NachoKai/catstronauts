import React from "react";
import styled from "@emotion/styled";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

const QueryResult = ({ loading, error, data, children }) => {
  if (error) return <p>ERROR: {error.message}</p>;

  if (loading) {
    return (
      <Spinner>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </Spinner>
    );
  }

  if (!data) return <p>Nothing to show...</p>;
  if (data) return children;
};

export default QueryResult;

const Spinner = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});
