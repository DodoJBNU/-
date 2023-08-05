import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
