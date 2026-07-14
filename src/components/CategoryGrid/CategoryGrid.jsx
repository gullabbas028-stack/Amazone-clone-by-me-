// components/CategoryGrid/CategoryGrid.jsx
import React from "react";
import { CATEGORY_CARDS } from "../../data/siteData";
import "./CategoryGrid.css";

export default function CategoryGrid() {
  return (
    <section className="category-grid-section">
      <div className="content-wrap">
        <div className="category-grid">
          {CATEGORY_CARDS.map(card => (
            <div key={card.id} className="cat-card">
              <h3 className="cat-card-title">{card.title}</h3>
              <div className="cat-card-body">
                <div className="cat-img-grid">
                  {card.items.map((item, i) => (
                    <a key={i} href="#" className="cat-img-cell">
                      <div className="cat-img-placeholder">
                        <img src={card.coverImage} alt={item} className="cat-img-media" loading="lazy" />
                      </div>
                      <span className="cat-img-label">{item}</span>
                    </a>
                  ))}
                </div>
              </div>
              <a href="#" className="cat-see-more">See more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
