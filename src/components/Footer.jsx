import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="madeBy">
        <p>Made by: Yonatan H.</p>
      </div>
      <div className="policy">
        <p>
          <Link to="/policy">Read Out Policy</Link>
        </p>

        <p>&copy; 2024 Alpha Stream, Inc</p>
      </div>
    </div>
  );
}

export default Footer;
