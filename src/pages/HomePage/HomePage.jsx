// pages/HomePage/HomePage.jsx
import React from "react";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel.jsx";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid.jsx";
import DealsSection from "../../components/DealsSection/DealsSection.jsx";
import ProductRow from "../../components/ProductRow/ProductRow.jsx";
import SignInPanel from "../../components/SignInPanel/SignInPanel.jsx";
import { PRODUCT_ROWS } from "../../data/siteData.js";
import "./HomePage.css";

const sectionContent = {
  home: null,
  deals: <DealsSection />,
  "customer-service": (
    <section className="page-section">
      <h2>Customer Service</h2>
      <p>Help with orders, returns, and account support.</p>
    </section>
  ),
  registry: (
    <section className="page-section">
      <h2>Registry</h2>
      <p>Create a wedding, baby, or housewarming registry.</p>
    </section>
  ),
  "gift-cards": (
    <section className="page-section">
      <h2>Gift Cards</h2>
      <p>Send digital or physical gift cards for any occasion.</p>
    </section>
  ),
  sell: (
    <section className="page-section">
      <h2>Sell</h2>
      <p>Start selling your products on Amazon with easy onboarding.</p>
    </section>
  ),
  prime: (
    <section className="page-section">
      <h2>Prime</h2>
      <p>Enjoy fast delivery, streaming, and member-only deals.</p>
    </section>
  ),
  "buy-again": (
    <section className="page-section">
      <h2>Buy Again</h2>
      <p>Quickly re-order your recent purchases.</p>
    </section>
  ),
  "shop-by-interest": (
    <section className="page-section">
      <h2>Shop by Interest</h2>
      <p>Discover curated picks tailored to your interests.</p>
    </section>
  ),
  "shop-holiday-deals": (
    <section className="page-section">
      <h2>Shop Holiday Deals</h2>
      <p>Browse the latest seasonal offers and gift ideas.</p>
    </section>
  ),
};

export default function HomePage({ activePage = "home" }) {
  const content = sectionContent[activePage] || null;

  if (content) {
    return <div className="homepage">{content}</div>;
  }

  return (
    <div className="homepage">
      <HeroCarousel />
      <CategoryGrid />
      <DealsSection />
      <SignInPanel />
      {PRODUCT_ROWS.map(row => (
        <ProductRow key={row.id} row={row} />
      ))}
      <div style={{ height: 30 }} />
    </div>
  );
}
