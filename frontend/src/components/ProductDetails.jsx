import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart as faEmptyHeart,
  faHeart as faFilledHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = ({ handleAddToCart, handleAddToWishlist, handleRemoveFromWishlist }) => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.find((product) => product.id === parseInt(id));

  console.log("id:", id);
  console.log("products fetch:", products);

  if (!products || products.length === 0) {
    return <div>Loading product details...</div>;
  }
  

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-auto max-h-96 rounded-lg"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, id) => (
              <img
                key={id}
                src={img}
                alt={`${product.title} - ${id}`}
                className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-lg font-semibold">
            <span className="text-palevioletred">
              CHF{product.price.toFixed(2)}
            </span>{" "}
            <span className="text-gray-500 line-through">
              CHF
              {(product.price * (1 + product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            {product.availabilityStatus} • Stock: {product.stock}
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 bg-palevioletred text-white rounded hover:bg-palevioletredhover"
              onClick={() => handleAddToCart(product)}
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              Add to Cart
            </button>
            <button
              className={`bg-palevioletredflex items-center gap-2 px-4 py-2 border rounded ${
                product.isWishlist
                  ? "bg-palevioletred text-white"
                  : "bg-palevioletred text-white"
              } hover:bg-palevioletredhover`}
              onClick={() => {
                if (product.isWishlist) {
                  handleRemoveFromWishlist(product);
                } else {
                  handleAddToWishlist(product);
                }
              }}
            >
              <FontAwesomeIcon
                icon={product.isWishlist ? faFilledHeart : faEmptyHeart}
                className="pr-2"
              />
              {product.isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>

          </div>

          <div className="text-sm text-gray-500">
            <p>SKU: {product.sku}</p>
            <p>Brand: {product.brand}</p>
            <p>Weight: {product.weight}g</p>
            <p>
              Dimensions: {product.dimensions.width} x{" "}
              {product.dimensions.height} x {product.dimensions.depth} cm
            </p>
            <p>Warranty: {product.warrantyInformation}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, id) => (
            <div
              key={id}
              className="p-4 border rounded-lg mb-4 shadow-sm bg-white space-y-2"
            >
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-sm text-gray-600 italic">{review.comment}</p>
              <p className="text-sm text-yellow-500">
                {"⭐".repeat(review.rating)}{" "}
                <span className="text-gray-400">
                  {review.date.split("T")[0]}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-gray-700 text-sm">
          Return Policy: {product.returnPolicy}
        </p>
        <img
          src={product.meta.qrCode}
          alt="QR Code"
          className="w-16 h-16 border rounded"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
