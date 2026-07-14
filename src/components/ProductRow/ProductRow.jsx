// components/ProductRow/ProductRow.jsx
import React, { useRef } from "react";
import { useApp } from "../../context/AppContext";
import "./ProductRow.css";

function Stars({ rating }) {
  return <span className="stars">{"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}</span>;
}

export default function ProductRow({ row }) {
  const { addToCart } = useApp();
  const scrollRef = useRef();

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 700, behavior: "smooth" });
  };

  return (
    <section className="product-row-section">
      <div className="content-wrap">
        <div className="pr-header">
          <h2 className="section-title">{row.title}</h2>
          <a href={row.seeMoreHref} className="section-see-more">See more</a>
        </div>

        <div className="pr-scroll-wrap">
          <button className="pr-scroll-btn pr-left" onClick={() => scrollBy(-1)}>‹</button>
          <div className="pr-scroller" ref={scrollRef}>
            {row.products.map(p => (
              <div key={p.id} className="pr-card">
                <a href="#" className="pr-img-link">
                  <div className="pr-img" style={{ background: p.bg || "#f0f0f0" }}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="pr-media" loading="lazy" />
                    ) : (
                      <span className="pr-emoji">{p.emoji}</span>
                    )}
                  </div>
                </a>

                <div className="pr-info">
                  <a href="#" className="pr-title">{p.title}</a>

                  <div className="pr-rating">
                    <Stars rating={p.rating} />
                    <span className="rating-count">{p.reviews}</span>
                  </div>

                  <div className="pr-prices">
                    <span className="price-symbol">$</span>
                    <span className="price-small">{p.price}</span>
                    {p.was && <span className="price-was" style={{ marginLeft: 6 }}>Was ${p.was}</span>}
                  </div>

                  {p.prime && <div className="prime-badge">✓ prime</div>}

                  <button className="pr-add-btn" onClick={() => addToCart({ id: p.id, title: p.title, price: p.price, image: p.image })}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
          <button className="pr-scroll-btn pr-right" onClick={() => scrollBy(1)}>›</button>
        </div>
      </div>
    </section>
  );
}
