import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storiesURL = `${baseURL}item/`;

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesURL).then(({ data }) => data);

  return result;
};
