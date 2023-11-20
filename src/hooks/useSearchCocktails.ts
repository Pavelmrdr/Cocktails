import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchHook = (endpointURL: string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(endpointURL);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpointURL]);

  return { data, error, isLoading };
};

export default useFetchHook;
