import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = async (url) => {
    try {
      let response = (await fetch(url)).json();
      let data = await response;
      setData(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setData([]);
      setLoading(false);
      setError(`404 ${error.name}:  ${error.message}`);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
