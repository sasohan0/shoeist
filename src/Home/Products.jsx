import Product from "../pages/Product";

const Products = ({ products }) => {
  return (
    <div className="bg-purple-100" id="products">
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex flex-wrap gap-7 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          products.map((shoe) => (
            <Product key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
