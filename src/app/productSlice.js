const productSlice = (set) => ({
  products: [],
  error: null,
  isLoading: false,
  getProducts: async () => {
    try {
      set(() => ({
        isLoading: true,
      }));
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      set(() => ({
        products: data,
        isLoading: false,
      }));
    } catch (err) {
      set((_store) => ({
        isLoading: false,
        error: err,
      }));
    }
  },
});

export default productSlice;
