import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hackerNewsAPI';

const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getStory(storyId).then((data) => data && data.by && setStory(data));
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

  return (
    <div className="story">
      <h3>Author: {story.author}</h3>
      <h3>Score: {story.score}</h3>
      <h3>Title: {story.title}</h3>
      <h3>Type: {story.type}</h3>
      <h3>
        <a href={story.url}>URL: {story.url}</a>
      </h3>
      <h3>Time: {unixTimeToDate(story.time)}</h3>
    </div>
  );
};

export default Story;
