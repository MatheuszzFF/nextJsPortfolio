import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simpleSlider.module.css";
import { TSlider } from "./type";

export const SimpleSlider = ({ settings, images }: TSlider) => {
    return (
    <>
      <div className="container">
        <Slider {...settings}>
          {images.map((imageLink, index) => {
            return (
              <div
                key={index + "div"}
                className={styles.imageContainer}
              >
                <Image
                className={styles.project}
                  key={index}
                  src={imageLink}
                  alt="slide"
                  width={350}
                  height={180}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
