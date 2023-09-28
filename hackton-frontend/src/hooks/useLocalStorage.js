const useLocalStorage = () => {
  const addItem = (name, value) => {
    localStorage.setItem(name, value);
  };
  const deleteItem = (name) => {
    localStorage.removeItem(name);
  };

  const getItem = (name) => {
    return localStorage.getItem(name);
  };
  return {
    addItem,
    deleteItem,
    getItem,
  };
};

export default useLocalStorage;
