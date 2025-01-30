import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.product.products) || [];



  // get only first 4 products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="container mx-auto px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-full rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
              <p className="text-lg text-gray-700">{product.price} CHF</p>
              <button className="mt-4 px-4 py-2 bg-palevioletred text-white rounded-lg hover:bg-palevioletredhover transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">Loading featured products...</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
