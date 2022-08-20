const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products/", {
    mode: "cors",
  });
  const data = await response.json();

  return data;
};

export default fetchData;
