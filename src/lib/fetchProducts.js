const fetchProducts = async () => {
  const response = await fetch('../data/Projects.json');
  const data = await response.json();

  return data;
};

export default fetchProducts;
