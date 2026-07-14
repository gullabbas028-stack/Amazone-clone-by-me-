// components/SignInPanel/SignInPanel.jsx
import React, { useState } from "react";
import "./SignInPanel.css";

export default function SignInPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="signin-panel">
        <div className="content-wrap">
          <div className="signin-panel-inner">
            <h2 className="sp-title">Sign in for the best experience</h2>
            <button className="sp-btn" onClick={() => setOpen(true)}>Sign in securely</button>
          </div>
        </div>
      </div>

      {open && (
        <div className="signin-modal-overlay" onClick={() => setOpen(false)}>
          <div className="signin-modal" onClick={e => e.stopPropagation()}>
            <button className="signin-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            <h3>Sign in</h3>
            <p>Welcome back. Sign in to continue.</p>
            <label className="signin-label" htmlFor="signin-email">Email or mobile phone number</label>
            <input id="signin-email" className="signin-input" type="email" placeholder="you@example.com" />
            <label className="signin-label" htmlFor="signin-password">Password</label>
            <input id="signin-password" className="signin-input" type="password" placeholder="••••••••" />
            <button className="signin-submit">Sign in</button>
            <span className="signin-note">New to Amazon? Create an account</span>
          </div>
        </div>
      )}
    </>
  );
}
