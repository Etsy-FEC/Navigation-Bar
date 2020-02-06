import React from "react";

function DeleteQuery(props) {
  const { query, resetQuery } = props;
  const baseURL =
    "http://NavBuild-env.jc2sppyffu.us-east-1.elasticbeanstalk.com/";

  if (query.length) {
    return (
      <img
        className={"navigation-deleteQuery"}
        src={`${baseURL}dh.svg`}
        onClick={resetQuery}
      />
    );
  } else {
    return <div></div>;
  }
}

export default DeleteQuery;
