// components/Footer/Footer.jsx
import React from "react";
import { FOOTER_COLS, FOOTER_BOTTOM_LINKS } from "../../data/siteData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Back to top */}
      <div className="footer-back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </div>

      {/* 4-column links */}
      <div className="footer-cols-wrap">
        <div className="footer-cols">
          {FOOTER_COLS.map(col => (
            <div key={col.title} className="footer-col">
              <h3 className="footer-col-title">{col.title}</h3>
              {col.links.map(link => (
                <a key={link} href="#" className="footer-col-link">{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Logo + locale row */}
      <div className="footer-mid">
        <a href="#" className="footer-logo">
          <span className="footer-logo-text">amazon</span>
        </a>
        <div className="footer-locale-btns">
          <button className="footer-locale-btn">🌐 English</button>
          <button className="footer-locale-btn">🇺🇸 United States</button>
        </div>
      </div>

      {/* Sub-footer links */}
      <div className="footer-sub">
        <div className="footer-sub-inner">
          <div className="footer-sub-links">
            {FOOTER_BOTTOM_LINKS.map(l => (
              <a key={l} href="#" className="footer-sub-link">{l}</a>
            ))}
          </div>
          <p className="footer-copy">© 1996–{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}
