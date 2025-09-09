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
          className={styles.swiperContainer}
          direction={direction}
          slidesPerView={deviceType === "desktop" ? 2 : 1}
          spaceBetween={deviceType === "desktop" ? 50 : 0}
          pagination={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={800}
          modules={[Autoplay]}
          loop={true}
        >
          <SwiperSlide>
            <div className={styles.itemContainer}>
              <h3 className={`${styles.company} primaryText`}>
                Geodetski institut Slovenije
              </h3>
              <p className={`${styles.position} primaryText`}>
                JavaScript Developer
              </p>
              <p className={`${styles.year} primaryText`}>1.2023 - 5.2024</p>
              <p className={`${styles.taskTitle} primaryText`}>Work:</p>
              <ul className={styles.tableContainer}>
                <li className={`${styles.tableItem} primaryText`}>
                  Made projections with geojson data of Slovenian buildings
                </li>
                <li className={`${styles.tableItem} primaryText`}>
                  Leafet.js: Floor plans, cross sections,...
                </li>
                <li className={`${styles.tableItem} primaryText`}>
                  Three.js: 3D interactive
                </li>
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
              <p className={`${styles.year} primaryText`}>8.2024 - 5.2025</p>
              <p className={`${styles.taskTitle} primaryText`}>Work:</p>
              <ul className={styles.tableContainer}>
                <li className={`${styles.tableItem} primaryText`}>
                  React Native: MP3 and MP4 UI, statistics, data display...
                </li>
                <li className={`${styles.tableItem} primaryText`}>
                  React: Invoice generator
                </li>
                <li className={`${styles.tableItem} primaryText`}>
                  Java Spring Boot, Maven
                </li>
                <li className={`${styles.tableItem} primaryText`}>
                  MongoDB and PostgreSQL
                </li>
                <li className={`${styles.tableItem} primaryText`}>Docker</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.itemContainer}>
              <h3 className={`${styles.company} primaryText`}>Hrc d.o.o.</h3>
              <p className={`${styles.position} primaryText`}>
                Software Developer
              </p>
              <p className={`${styles.year} primaryText`}>8.2025 - 9.2025</p>
              <p className={`${styles.taskTitle} primaryText`}>Work:</p>
              <ul className={styles.tableContainer}>
                <li className={`${styles.tableItem} primaryText`}>
                  Document migration into Jaspersoft
                </li>
                <li className={`${styles.tableItem} primaryText`}>
                  SQL and PL/SQL
                </li>
                <li className={`${styles.tableItem} primaryText`}>Oracle DB</li>
                <li className={`${styles.tableItem} primaryText`}>
                  Oracle APEX
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
