import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getStoryIds } from '../services/hackerNewsAPI';
import Story from '../components/story';

const StoriesContainerStyles = styled.section`
  .nav-container {
    padding: 1.5rem 1rem;
    text-align: center;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <StoriesContainerStyles data-testid="stories-container">
      <div className="nav-container">
        <a href="/">
          <h1>Hacker News Stories</h1>
        </a>
      </div>
      {storyIds.map((storyId, index) => (
        <Story key={index} storyId={storyId} />
      ))}
    </StoriesContainerStyles>
  );
};
