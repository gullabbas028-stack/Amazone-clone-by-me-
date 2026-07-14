// components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { SEARCH_DEPARTMENTS, NAV2_LINKS } from "../../data/siteData";
import { useApp } from "../../context/AppContext";
import "./Navbar.css";
import "../SignInPanel/SignInPanel.css";

export default function Navbar({ activePage, onNavigate }) {
  const { cartCount, searchDept, setSearchDept, searchQuery, setSearchQuery, mobileMenuOpen, setMobileMenuOpen, setCartOpen } = useApp();
  const [deptOpen, setDeptOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleNavClick = (href) => {
    const page = href.replace("#", "") || "home";
    onNavigate?.(page);
  };

  const handleOpenSignIn = () => {
    setAccountOpen(false);
    setShowSignInModal(true);
  };

  return (
    <>
      {/* ── Row 1: Main navbar ── */}
      <header className="nav1">
        <div className="nav1-inner">

          {/* Logo */}
          <button type="button" className="nav-logo" aria-label="Amazon home" onClick={() => handleNavClick("#home")}>
            <div className="nav-logo-box">
              <span className="nav-logo-text">amazon</span>
              <span className="nav-logo-smile">↗</span>
              <span className="nav-logo-com">.com</span>
            </div>
          </button>

          {/* Deliver to */}
          <a href="#" className="nav-deliver hide-mobile">
            <span className="nav-deliver-top">📍 Deliver to</span>
            <span className="nav-deliver-bot">United States</span>
          </a>

          {/* Search bar */}
          <div className="nav-search">
            <div className="search-dept-wrap" onClick={() => setDeptOpen(!deptOpen)}>
              <span className="search-dept-text">{searchDept === "All Departments" ? "All" : searchDept.substring(0, 12)}</span>
              <span className="search-dept-arrow">▾</span>
              {deptOpen && (
                <div className="search-dept-dropdown">
                  {SEARCH_DEPARTMENTS.map(d => (
                    <div
                      key={d}
                      className={`sdept-item ${d === searchDept ? "active" : ""}`}
                      onClick={e => { e.stopPropagation(); setSearchDept(d); setDeptOpen(false); }}
                    >{d}</div>
                  ))}
                </div>
              )}
            </div>
            <input
              className="search-input"
              type="text"
              placeholder="Search Amazon"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" aria-label="Search">
              <span className="search-icon">🔍</span>
            </button>
          </div>

          {/* Language */}
          <a href="#" className="nav-flag hide-mobile">
            <span>🇺🇸</span>
            <span className="nav-flag-arrow">▾</span>
          </a>

          {/* Account */}
          <div
            className="nav-account"
            onMouseEnter={() => setAccountOpen(true)}
            onMouseLeave={() => setAccountOpen(false)}
          >
            <a href="#" className="nav-account-link">
              <span className="nav-top-text">Hello, sign in</span>
              <span className="nav-bot-text">Account &amp; Lists <span className="nav-arrow">▾</span></span>
            </a>
            {accountOpen && (
              <div className="account-dropdown">
                <div className="account-dropdown-inner">
                  <button type="button" className="signin-btn" onClick={handleOpenSignIn}>Sign in</button>
                  <p className="account-new">New customer? <a href="#">Start here.</a></p>
                  <hr className="account-hr" />
                  <div className="account-cols">
                    <div>
                      <div className="acol-title">Your Lists</div>
                      {["Create a Wish List","Wish from Any Website","Baby Registry","Wedding Registry","Discover Your Style","Explore Showroom"].map(l => (
                        <a key={l} href="#" className="acol-link">{l}</a>
                      ))}
                    </div>
                    <div>
                      <div className="acol-title">Your Account</div>
                      {["Your Account","Your Orders","Your Recommendations","Your Prime Membership","Your Subscribe & Save Items","Memberships & Subscriptions","Content & Devices","Your Seller Account","Help"].map(l => (
                        <a key={l} href="#" className="acol-link">{l}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Returns */}
          <a href="#" className="nav-returns hide-mobile">
            <span className="nav-top-text">Returns</span>
            <span className="nav-bot-text">&amp; Orders</span>
          </a>

          {/* Cart */}
          <button type="button" className="nav-cart" onClick={() => setCartOpen(true)}>
            <span className="cart-emoji">🛒</span>
            <span className="cart-count">{cartCount}</span>
            <span className="nav-bot-text cart-label hide-mobile">Cart</span>
          </button>

          {/* Mobile hamburger */}
          <button className="nav-hamburger hide-desktop" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
        </div>
      </header>

      {/* ── Row 2: Department nav ── */}
      <nav className="nav2">
        <div className="nav2-inner">
          {NAV2_LINKS.map(item => (
            <button
              key={item.label}
              type="button"
              className={`nav2-link ${item.bold ? "nav2-bold" : ""} ${activePage === item.href.replace("#", "") || (!activePage && item.href === "#home") ? "active" : ""}`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {showSignInModal && (
        <div className="signin-modal-overlay" onClick={() => setShowSignInModal(false)}>
          <div className="signin-modal" onClick={e => e.stopPropagation()}>
            <button type="button" className="signin-close" onClick={() => setShowSignInModal(false)} aria-label="Close">✕</button>
            <h3>Sign in</h3>
            <p>Welcome back. Sign in to continue.</p>
            <label className="signin-label" htmlFor="navbar-signin-email">Email or mobile phone number</label>
            <input id="navbar-signin-email" className="signin-input" type="email" placeholder="you@example.com" />
            <label className="signin-label" htmlFor="navbar-signin-password">Password</label>
            <input id="navbar-signin-password" className="signin-input" type="password" placeholder="••••••••" />
            <button type="button" className="signin-submit">Sign in</button>
            <span className="signin-note">New to Amazon? Create an account</span>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {NAV2_LINKS.map(item => (
            <button key={item.label} type="button" className="mobile-menu-link" onClick={() => { handleNavClick(item.href); setMobileMenuOpen(false); }}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
