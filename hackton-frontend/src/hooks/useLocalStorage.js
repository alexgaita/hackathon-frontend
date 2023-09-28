const useLocaleStorage = () => {
  const addItem = (name, value) => {
    localStorage.setItem(name, value);
  };
  const deleteItem = (name) => {
    localStorage.removeItem(name);
  };

  return {
    addItem,
    deleteItem,
  };
};

export default useLocaleStorage;
