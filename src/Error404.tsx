import { Link } from "react-router-dom";

function Error404() {
  return (
    <h2>
      {" "}
      NotFoundpage Errr 404! Go <Link to="/Home">home</Link>{" "}
    </h2>
  );
}
export default Error404;
