import React from "react";
import logo from '../images/main-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-box">
        <img className="footer-logo" src={logo} alt="logo" />
      </div>
      <div className="footer-center">
        <div className="footer-items">
        <h3>MENU</h3>
        <ul className="footer-list">
          <li className="footer-item"><Link to="/" className="footer-link">Početna stranica</Link></li>
          <li className="footer-item"><Link to="/artikli" className="footer-link">Ponuda Artikala</Link></li>
          <li className="footer-item"><Link to="/igraci" className="footer-link">Kupuj po igraču</Link></li>
        </ul>
        </div>
        <div className="footer-items">
          <h3>NAJPOPULARNIJE</h3>
          <ul className="footer-list">
          <li className="footer-item"><Link to="/artikli/domaci-dres" className="footer-link">Domaći dres</Link></li>
          <li className="footer-item"><Link to="/artikli/sluzbena-trenirka" className="footer-link">Službena Trenirka</Link></li>
          <li className="footer-item"><Link to="/artikli/treci-dres" className="footer-link">Treći dres</Link></li>
        </ul>
        </div>
        <div className="footer-items">
        <h3>DINAMO NA WEBU</h3>
        <ul className="footer-list">
          <li className="footer-item"><a href="https://gnkdinamo.hr/" target="_blank" rel="noopener noreferrer" className="footer-link">Službena web stranica</a></li>
          <li className="footer-item"><a href="http://shop.gnkdinamo.hr/" target="_blank" rel="noopener noreferrer" className="footer-link">Službeni fan shop</a></li>
          <li className="footer-item"><a href="http://skola.gnkdinamo.hr/" target="_blank" rel="noopener noreferrer" className="footer-link">Nogometna škola</a></li>
        </ul>
        </div>
      </div>
      <p className="copyright">
        Inspiracija: Službeni webshop GNK Dinamo | Copyright &copy;Franjo Đido{" "}
        {new Date().getFullYear()}. Sva prava zadržana.{""}
      </p>
    </div>
  );
}

export default Footer;


