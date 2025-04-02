import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-address">
          <p><strong>Address:</strong> 5/262, A-3, Sri Ganesh Nagar West, M. Saveriyarpuram, Muthiyapuram, Tuticorin.</p>
          <p><strong>PinCode:</strong> 628005</p>
        </div>
        <div className="footer-contact">
          <p><strong>Phone No.:</strong> 9842099049</p>
          <p><strong>Mail id:</strong> jenefabrications@gmail.com / joelfabrications@gmail.com</p>
        </div>
      </div>
      <p className="footer-copyright">&copy; {currentYear} Joel Staines. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
