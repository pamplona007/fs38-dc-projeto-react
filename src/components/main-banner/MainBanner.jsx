import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TenisNike from "../../assets/img/produtos/tenis-nike.png";

import "swiper/css";
import "swiper/css/pagination";
import "./MainBanner.css";

export default function MainBanner() {
  const bannerContent = [
    {
      title: "Queima de stoque Nike 🔥",
      subtitle: "Melhores ofertas personalizadas",
      btnTitle: "Ver ofertas",
      image: TenisNike,
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    },
  ];

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {bannerContent.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="banner-content">
              <div className="banner-info">
                <h5>{item.subtitle}</h5>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button className="btn-banner">{item.btnTitle}</button>
              </div>
              <div className="banner-img">
                <img src={item.image} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
