import Navbar from "./Navbar";
import "./style.css";
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Navbar />
      <h1>Generation Thailand</h1>
      {children}
      <div className="button">
        <button>User Home Sector</button>
        <button>Admin Home Sector</button>
      </div>
    </div>
  );
};

export default Layout;
