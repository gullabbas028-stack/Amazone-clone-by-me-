// components/DealsSection/DealsSection.jsx
import React from "react";
import { DEALS } from "../../data/siteData";
import { useApp } from "../../context/AppContext";
import "./DealsSection.css";

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="stars">
      {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

export default function DealsSection() {
  const { addToCart } = useApp();
  return (
    <section className="deals-section">
      <div className="content-wrap">
        <div className="deals-header">
          <h2 className="section-title">Deals of the Day</h2>
          <a href="#" className="deals-see-all">See all deals</a>
        </div>
        <div className="deals-scroller">
          {DEALS.map(deal => (
            <div key={deal.id} className="deal-card">
              <div className="deal-badge" style={{ background: deal.badgeColor }}>
                {deal.badge}
              </div>

              <a href="#" className="deal-img-link">
                <div className="deal-img" style={{ background: deal.bg }}>
                  {deal.image ? (
                    <img src={deal.image} alt={deal.title} className="deal-media" loading="lazy" />
                  ) : (
                    <span className="deal-emoji">{deal.emoji}</span>
                  )}
                </div>
              </a>

              <div className="deal-discount-wrap">
                <div className="deal-discount-bar" style={{ width: `${deal.discount}%` }} />
                <span className="deal-claimed">{Math.round(deal.discount * 2.1)}% claimed</span>
              </div>

              <div className="deal-info">
                <div className="deal-off">
                  <span className="deal-pct">-{deal.discount}%</span>
                  <span className="deal-price">
                    <span className="price-symbol">$</span>
                    <span className="price-main">{deal.price}</span>
                  </span>
                </div>

                {deal.was && (
                  <div className="price-was">List: ${deal.was}</div>
                )}

                {deal.prime && <div className="prime-badge">✓ prime</div>}

                <a href="#" className="deal-title">{deal.title}</a>

                <div className="deal-rating">
                  <StarRating rating={deal.rating} />
                  <span className="rating-count">{deal.reviews}</span>
                </div>

                <button className="btn-orange" style={{ marginTop: 8 }} onClick={() => addToCart({ id: deal.id, title: deal.title, price: deal.price, image: deal.image })}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
