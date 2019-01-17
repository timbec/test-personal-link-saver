import React from "react";
import { Link } from "react-router";

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>

        <Link to="/" className="button--link">
          HEAD HOME
        </Link>
      </div>
    </div>
  );
};
