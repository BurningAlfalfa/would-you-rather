
export const storeData = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error("Failed to store data in localStorage", err);
    }
  };
  
  export const getData = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error("Failed to get data from localStorage", err);
      return null;
    }
  };
  