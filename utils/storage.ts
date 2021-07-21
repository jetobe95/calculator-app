export const setToLS = (key: string, value: object) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string) => {
  if (typeof window === "undefined") return;
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
