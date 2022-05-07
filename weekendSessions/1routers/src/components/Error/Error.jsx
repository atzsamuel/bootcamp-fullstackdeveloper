import { Link } from "react-router-dom";
const Error = (props) => {
  return (
    <>
      <h1>Error 404...</h1>
      <Link to="/">Dashboard</Link>
    </>
  );
};

export default Error;
