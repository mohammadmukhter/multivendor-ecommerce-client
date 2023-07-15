import Products from "../../pages/Home/Products/Products";

const ProductsPage = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center py-4 uppercase bg-black text-white">
        All Products
      </h2>
      <Products></Products>
    </div>
  );
};

export default ProductsPage;
