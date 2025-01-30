import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade } from "swiper/modules";

const ReviewsSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "Jane Doe",
      feedback: "Amazing quality and fast delivery!",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "John Smith",
      feedback: "Customer service was exceptional!",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Sarah Lee",
      feedback: "Highly recommend this shop!",
      img: "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-gray-30">
      <div>
        {/*<h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>*/}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={2000}
          style={{ height: "100%" }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-20 text-center">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-[10rem] h-[10rem] rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-600 italic mt-2">
                  "{review.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSlider;
