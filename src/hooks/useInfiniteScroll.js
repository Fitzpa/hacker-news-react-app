/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { ARTICLE_INCREMENT, MAX_ARTICLES } from '../constants';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(ARTICLE_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    if (count + ARTICLE_INCREMENT >= MAX_ARTICLES) {
      setCount(MAX_ARTICLES);
    } else {
      setCount(count + ARTICLE_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};
