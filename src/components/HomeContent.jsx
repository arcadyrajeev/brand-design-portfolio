import React from "react";
import "../styles/main.css";

export default function HomeContent() {
  const icons = [
    {
      name: "Montrose",
      imglink: "/Logos/montrose.webp",
    },

    {
      name: "Archviz",
      imglink: "/Logos/arch.webp",
    },

    {
      name: "Lunaria",
      imglink: "/Logos/lunaria.webp",
    },

    {
      name: "Render Poetry",
      imglink: "/Logos/rp.webp",
    },

    {
      name: "Sup",
      imglink: "/Logos/sup.webp",
    },
  ];

  return (
    <div className="home-content">
      <div className="head">
        <h1>Aracdy</h1>
        <h1 id="design">Design</h1>
        <h1>Studio</h1>
      </div>

      <div className="tagline">
        <h1>I create brands so iconic,</h1>{" "}
        <h1>even pigeons recognize them.</h1>
      </div>

      <div className="card-wrapper">
        {icons.map((icon, idx) => (
          <div key={idx} className="brand-card">
            <img src={icon.imglink} />
          </div>
        ))}
      </div>
    </div>
  );
}
