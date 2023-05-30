import { useState, useEffect } from 'react';
import axios from "axios";

const useData = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    var [error, setError] = useState(null);
    useEffect(() => {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            setUsers(response.data);
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            setLoading(false);
            setError(error.message);
          });
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }, []);

    return { users, isLoading, error };
}

export default useData;