import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors.js';
import { getStory } from '../services/hackerNewsAPI';
import unixTimeToDate from '../utils/unixTimeToDate';

const StoryContainer = styled.div`
  background-color: ${colors.primary};
  border-radius: 5px;
  border-top: 1px solid ${colors.alt};
  max-width: 1200px;
  margin: 0 auto 1rem;
  padding: 1rem;

  a {
    color: ${colors.light};
  }

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

  return story && story.url ? (
    <StoryContainer className="story" data-testid="story">
      <h3>
        <strong>
          <a href={story.url}>{story.title}</a>
        </strong>
      </h3>
      <h3 data-testid="story-by">By: {story.by}</h3>
      <h3 data-testid="story-date">
        Date Posted: {unixTimeToDate(story.time)}
      </h3>
    </StoryContainer>
  ) : null;
};

export default Story;
