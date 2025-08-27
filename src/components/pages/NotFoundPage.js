import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-3 text-danger">404</h1>
      <p className="lead">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-outline-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
