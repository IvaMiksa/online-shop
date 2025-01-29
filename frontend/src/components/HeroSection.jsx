import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-palevioletred to-palevioletredhover text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to your Dream Shop
          </h1>
          <p className="text-lg md:text-xl">
            Discover the best deals, exclusive products, and much more. Shop
            your favorites now!
          </p>
          <button className="px-6 py-3 bg-white text-palevioletred rounded-lg shadow-md hover:bg-gray-100 transition">
            Shop now
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <DotLottieReact
            //src="https://lottie.host/1c9d2eeb-a6d5-4b79-b9e0-f25e61485fdf/V6NUxeoYke.lottie"
            src="https://lottie.host/e7da432c-4a67-42ad-b770-5f60aefd38f5/CGtbaIxeci.lottie"
            loop
            autoplay
          />
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
