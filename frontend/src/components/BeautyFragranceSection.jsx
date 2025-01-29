import { NavLink } from "react-router-dom";

const BeautyFragranceSection = () => {
  const categories = [
    {
      id: 1,
      title: "Beauty",
      description:
        "Explore our latest beauty collection! From skincare essentials to makeup must-haves, achieve your perfect look effortlessly.",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Fragrances",
      description:
        "Discover a selection of enchanting fragrances that captivate your senses. Find your signature scent today!",
      image:
        "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-10 bg-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden group bg-cover bg-center min-h-[300px] w-full"
            style={{
              backgroundImage: `url(${category.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8 transition-opacity group-hover:bg-opacity-70">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-white text-sm mb-4">{category.description}</p>
              <NavLink to="/shop" className="text-palevioletred text-sm bg-white p-2 rounded opacity-80">
                Shop now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeautyFragranceSection;
