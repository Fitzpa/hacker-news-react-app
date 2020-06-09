import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNewsAPI';
import Story from '../components/story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return storyIds.map((storyId, index) => {
    return <Story key={index} storyId={storyId} />;
  });
};
