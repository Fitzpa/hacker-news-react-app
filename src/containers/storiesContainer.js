import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNewsAPI';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <div>
      <h1>{JSON.stringify(storyIds)}</h1>
    </div>
  );
};
