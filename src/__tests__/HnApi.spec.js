import axios from 'axios';
import {
  getArticleIds,
  getArticle,
  newArticlesUrl,
  articleUrl,
} from '../services/hnApi';
import { singularArticle, articleIds, emptySingularArticle } from '../fixtures';

jest.mock('axios');

describe('HackerNews Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getArticle functionality', () => {
    it('requests and gets a article from the HackerNews Api', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularArticle })
      );

      const entity = await getArticle(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${articleUrl + 1}.json`);
      expect(entity).toEqual(singularArticle);
    });

    it('does not retrieve a article from the Api, but handles gracefully', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularArticle })
      );

      const entity = await getArticle(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${articleUrl + 1}.json`);
      expect(entity).toEqual(emptySingularArticle);
    });
  });

  describe('getArticleIds functionality', () => {
    it('requests and gets article ids from the HackerNews Api', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: articleIds }));

      const entity = await getArticleIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(newArticlesUrl);
      expect(entity).toEqual(articleIds);
    });
  });
});
