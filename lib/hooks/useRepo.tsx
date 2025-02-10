"use client";
import { useState, useEffect } from 'react';

const useRepos = (username: string) => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cachedData = sessionStorage.getItem(`repos-${username}`);
    if (cachedData) {
      setRepos(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    const fetchRepos = async () => {
      try {
        const res = await fetch(`/api/github/${username}/repos`);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
        } else {
          setRepos(data);
          sessionStorage.setItem(`repos-${username}`, JSON.stringify(data));
        }
      } catch (err) {
        setError('Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};

export default useRepos;
