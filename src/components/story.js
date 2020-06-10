import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors.js';
import { getStory } from '../services/hackerNewsAPI';

const StoryContainer = styled.div`
  background-color: ${colors.primary};
  border-radius: 5px;
  border-top: 1px solid ${colors.alt};
  max-width: 1200px;
  margin: 0 auto 1rem;
  padding: 1rem;

  &:first-of-type {
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getStory(storyId).then((data) => setStory(data));
  }, []);

  const unixTimeToDate = (unixTime) => {
    const milliseconds = unixTime * 1000;
    const dateObj = new Date(milliseconds);
    return dateObj.toLocaleString('en-US', {
      month: 'long', // "June"
      day: '2-digit', // "01"
      year: 'numeric', // "2019"
    });
  };

  return story && story.url ? (
    <StoryContainer className="story" data-testid="story">
      <h3>
        <strong>Author:</strong> {story.by}
      </h3>
      <h3>
        <strong>Title:</strong> {story.title}
      </h3>
      <h3>
        <strong>URL:</strong> <a href={story.url}>Read Article Here</a>
      </h3>
      <h3>
        <strong>Time:</strong> {unixTimeToDate(story.time)}
      </h3>
    </StoryContainer>
  ) : null;
};

export default Story;
