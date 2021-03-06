import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <div className="menu">
        <Link to="/" className="menu-item">i <HeartOutlined /> english</Link>
      </div>
      <div className="menu">
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/game" className="menu-item">Game</Link>
      </div>
    </div>
  );
}

export default Header;
