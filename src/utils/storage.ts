const storage = {
  get(key: string) {
    try {
      const rawValue = window.localStorage.getItem(key);
      if (rawValue) return JSON.parse(rawValue);
      return null;
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key: string, value: JSON | boolean) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };
