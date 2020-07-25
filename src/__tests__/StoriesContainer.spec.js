import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { ArticlesContainer } from '../containers/ArticlesContainer';
import { articleIds, singularArticle } from '../fixtures';
import { getArticle, getArticleIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ARTICLE_INCREMENT } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hnApi', () => ({
  getArticle: jest.fn(),
  getArticleIds: jest.fn(),
}));

test('renders the article container with a article', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: ARTICLE_INCREMENT,
  }));
  getArticle.mockImplementation(() => Promise.resolve(singularArticle));
  getArticleIds.mockImplementation(() => Promise.resolve(articleIds));

  const { getByText, queryByTestId } = render(<ArticlesContainer />);
  await waitForElement(() => [
    expect(getByText('Hacker News Articles')).toBeTruthy(),
    expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(queryByTestId('article-by').textContent).toEqual('By: Louie Fitzpatrick'),
  ]);
});
