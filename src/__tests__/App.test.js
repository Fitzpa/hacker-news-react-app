import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { App } from '../App';
import { storyIds, singleStory } from '../fixtures/SingleStory';
import { getStory, getStoryIds } from '../services/hackerNewsAPI';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT_BY } from '../constants';
import 'regenerator-runtime/runtime';

// clean up the DOM before each test
beforeEach(cleanup);

// Provides an intial mock that we can modify and test with
jest.mock('../hooks/useInfiniteScroll');

jest.mock('../services/hackerNewsAPI', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test('renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT_BY,
  }));

  getStory.mockImplementation(() => Promise.resolve(singleStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));
  const { getByText, queryByTestId } = render(<App />);

  await waitFor(() => [
    expect(getByText('Hacker News Stories')).toBeTruthy(),
    expect(getByText('Louie Learns to code')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual(
      'By: Louie Fitzpatrick'
    ),
  ]);
});
