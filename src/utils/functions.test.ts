import {
  random,
  debounce,
  fetchVideos,
  fetchRelatedVideos,
  fetchVideoInfo,
} from './functions';

describe('Functions', () => {
  describe('random', () => {
    it('should return a different number', () => {
      const result1 = random(100);
      const result2 = random(100);
      expect(result1).not.toBe(result2);
    });
  });

  describe('debounce', () => {
    it('should wait 1000 ms and they execute the function', async () => {
      const mockSum = jest.fn((number, number2) => number + number2);
      const later = debounce(mockSum, 1000);
      later();
      await new Promise((resolve) => {
        setTimeout(() => {
          expect(mockSum).not.toHaveBeenCalled();
          resolve();
        }, 500);
      });
      await new Promise((resolve) => {
        setTimeout(() => {
          expect(mockSum).toHaveBeenCalled();
          resolve();
        }, 600);
      });
    });
  });

  describe('fetchRelatedVideos', () => {
    it('should be called setVideos after resolved', async () => {
      window.gapi = { client: {} };
      window.gapi.client.request = jest.fn().mockResolvedValue({ result: { items: [] } });

      const setVideos = jest.fn();
      const setIsLoading = jest.fn();

      await fetchVideos('', setVideos, setIsLoading);

      expect(setVideos).toHaveBeenCalled();
    });
  });

  describe('fetchRelatedVideos', () => {
    it('should return items array', async () => {
      const items = [1, 2, 3];
      window.gapi = { client: {} };
      window.gapi.client.request = jest.fn().mockResolvedValue({ result: { items } });

      expect(await fetchRelatedVideos('')).toEqual(items);
    });
  });

  describe('fetchVideoInfo', () => {
    it('should return item', async () => {
      const item = {
        id: 'id',
      };
      const items = [item, 1, 2, 3];

      window.gapi = { client: {} };
      window.gapi.client.request = jest.fn().mockResolvedValue({ result: { items } });

      expect(await fetchVideoInfo('')).toEqual(item);
    });
  });
});
