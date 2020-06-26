import React, { useEffect, useState } from 'react';
import { STORY_INCREMENT_BY, MAX_STORIES } from '../constants';
import debounce from '../utils/debounce';

const useInfiniteScroll = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT_BY);

  const scrollHandler = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return false;
    }
    setIsLoading(true);
  }, 500);

  useEffect(() => {
    if (!isLoading) return;

    if (count + STORY_INCREMENT_BY >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT_BY);
    }

    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return { count };
};

export default useInfiniteScroll;
