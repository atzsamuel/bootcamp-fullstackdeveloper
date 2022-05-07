import { Link } from "react-router-dom";
const Dashboard = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dashboard</h1>
      <div>
        <Link to="/">Dashboard</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/error">Error</Link>
      </div>
    </div>
  );
};

export default Dashboard;
