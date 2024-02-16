import React, { useState, useEffect } from "react";
import axios from "axios";

export const usePaginationSearch = (skip, limit) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({total: 0, prods: []});
  const [total, setTotal] = useState();

  useEffect(() => {
    fetchData(skip, limit);
  }, [skip, limit]);

  const fetchData = async (skip = 0, limit = 10) => {
    setLoading(true);
    setError(false);
    setData({});
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = res.data.products;
      const total = res.data.total;
      setData({ total: total, prods: data });
      setTotal(total);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, total, fetchData };
};
