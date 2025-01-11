import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError('伺服器無回應，請檢查網路連線！'))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
