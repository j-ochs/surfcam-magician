import React from "react";
import { useState, useEffect } from "react";

const SpotPicker2 = () => {
  const [breadcrumbIndex, setBreadcrumbIndex] = useState(0);
  const [selected, setSelected] = useState({
    continent: null,
    country: null,
    region: null,
    area: null,
    spot: null
  });
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  function isActive(index) {
    return breadcrumbIndex === index;
  }

  return (
    <div>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <li className={isActive(0) ? "is-active" : null}>
            <a href="#">World</a>
          </li>
          <li className={isActive(1) ? "is-active" : null}>
            <a href="#">Continent</a>
          </li>
          <li className={isActive(2) ? "is-active" : null}>
            <a href="#">Country</a>
          </li>
          <li className={isActive(3) ? "is-active" : null}>
            <a href="#">Region</a>
          </li>
          <li className={isActive(4) ? "is-active" : null}>
            <a href="#">Area</a>
          </li>
          {/* eslint-enable jsx-a11y/anchor-is-valid */}
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

SpotPicker2.propTypes = {};

export default SpotPicker2;
