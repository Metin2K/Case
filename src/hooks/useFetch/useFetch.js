import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [error, setError] = useState(null); // [1
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data, fetchData};
}
export default useFetch;
