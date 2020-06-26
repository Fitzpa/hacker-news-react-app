import React, { useState, useEffect, memo } from 'react';
import styled from '@emotion/styled';
import { getStoryIds } from '../services/hackerNewsAPI';
import Story from '../components/story';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const StoriesContainerStyles = styled.section`
  .nav-container {
    padding: 1.5rem 1rem;
    text-align: center;

    a {
      font-size: 3rem;
    }
  }
`;

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, [count]);

  return (
    <StoriesContainerStyles data-testid="stories-container">
      <div className="nav-container">
        <a href="/">Hacker News Stories</a>
      </div>
      {storyIds.slice(0, count).map((storyId, index) => (
        <Story key={index} storyId={storyId} />
      ))}
    </StoriesContainerStyles>
  );
};
