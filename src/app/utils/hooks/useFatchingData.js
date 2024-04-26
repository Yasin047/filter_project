import axios from "axios";
import { useEffect, useState } from "react";

const useFetchingData = (
  availability,
  type,
  inter,
  color,
  specialFeature,
  minPrice,
  maxPrice
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    let url = `/api/products`;

    const params = {};

    if (availability.length > 0) {
      params.availability = availability.join(",");
    }
    if (type.length > 0) {
      params.type = type.join(",");
    }
    if (inter.length > 0) {
      params.inter = inter.join(",");
    }
    if (color.length > 0) {
      params.color = color.join(",");
    }
    if (specialFeature.length > 0) {
      params.specialFeature = specialFeature.join(",");
    }
    if (minPrice >= 0) {
      params.minPrice = minPrice;
    }
    if (maxPrice > 0) {
      params.maxPrice = maxPrice;
    }
    const queryString = new URLSearchParams(params);

    if (queryString.toString()) {
      url += `?${queryString.toString()}`;
    }
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [availability, type, color, inter, specialFeature, minPrice, maxPrice]);

  return {
    products,
    loading,
    error,
  };
};

export default useFetchingData;
