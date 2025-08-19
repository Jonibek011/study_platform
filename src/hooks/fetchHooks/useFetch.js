import React, { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      setPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setPending(false);
      } catch (err) {
        console.log(err.message);
        setError(error.message);
        setPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, pending, error };
}
