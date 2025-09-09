import styles from "@/constants/styles/components/home/work-styles.module.css";
import { useWindowSize } from "@/contexts/WindowSizeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

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
          className={styles.swiperContainer}
          direction={direction}
          slidesPerView={1}
          spaceBetween={0}
          pagination={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={800}
          modules={[Autoplay, Navigation]}
          loop={true}
          navigation={{
            prevEl: `.${styles.navPrev}`,
            nextEl: `.${styles.navNext}`,
          }}
        >
          <SwiperSlide>
            <div className={styles.itemContainer}>
              <h3 className={`${styles.company} primaryText`}>
                Geodetski institut Slovenije
              </h3>
              <p className={`${styles.position} primaryText`}>
                JavaScript Developer
              </p>
              <p className={`${styles.year} primaryText`}>8.2025 - 8.2025</p>
              <p className={`${styles.taskTitle} primaryText`}>Tasks:</p>
              <ul className={styles.tableContainer}>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.itemContainer}>
              <h3 className={`${styles.company} primaryText`}>
                CODE-RED d.o.o.
              </h3>
              <p className={`${styles.position} primaryText`}>
                Full Stack Developer
              </p>
              <p className={`${styles.year} primaryText`}>8.2025 - 8.2025</p>
              <p className={`${styles.taskTitle} primaryText`}>Tasks:</p>
              <ul className={styles.tableContainer}>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.itemContainer}>
              <h3 className={`${styles.company} primaryText`}>Hrc d.o.o.</h3>
              <p className={`${styles.position} primaryText`}>
                Software Developer
              </p>
              <p className={`${styles.year} primaryText`}>8.2025 - 8.2025</p>
              <p className={`${styles.taskTitle} primaryText`}>Tasks:</p>
              <ul className={styles.tableContainer}>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
                <li className={`${styles.tableItem} primaryText`}>Hello</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
