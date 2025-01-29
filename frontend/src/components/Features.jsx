import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free shipping",
      description: "On all orders over $30",
      icon: <FaShippingFast className="text-4xl text-gray-800" />,
    },
    {
      id: 2,
      title: "Always available",
      description: "24/7 call center available",
      icon: <FaHeadset className="text-4xl text-gray-800" />,
    },
    {
      id: 3,
      title: "Free returns",
      description: "30 days free return policy",
      icon: <FaUndo className="text-4xl text-gray-800" />,
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto flex justify-between items-center text-center max-w-5xl">
        {features.map((feature, index) => (
          <div key={feature.id} className="flex items-center gap-3">
            {feature.icon}
            <div className="text-left">
              <h3 className="font-semibold text-2xl text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
            {index < features.length - 1 && (
              <div className="h-10 w-px bg-palevioletred mx-6"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
