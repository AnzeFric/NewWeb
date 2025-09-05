import styles from "@/constants/styles/components/home/work-styles.module.css";
import { useWindowSize } from "@/contexts/WindowSizeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

interface Props {
  focused: boolean;
}

export default function WorkSection({ focused }: Readonly<Props>) {
  const { deviceType } = useWindowSize();

  const direction = deviceType === "desktop" ? "horizontal" : "vertical";

  return (
    <div className={styles.workContainer}>
      <h2 className={`${styles.sectionTitle} titleText`}>Work history</h2>
      <div
        className={`${styles.contentContainer} ${
          focused ? styles.animateRight : styles.offscreenRight
        }`}
      >
        <Swiper
          direction={direction}
          slidesPerView={2}
          spaceBetween={50}
          pagination={false}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          speed={800}
          modules={[Autoplay]}
          style={{ height: direction === "vertical" ? "200px" : "auto" }}
          loop={true}
        >
          <SwiperSlide>
            <div>
              <h3>Work 1</h3>
              <p>Role / Company</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Work 2</h3>
              <p>Role / Company</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3>Work 3</h3>
              <p>Role / Company</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
