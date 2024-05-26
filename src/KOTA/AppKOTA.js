import React, { useState, useEffect, useRef } from "react";
import "./AppKOTA.css";
import { showSlider } from "./carouselUtils";
import bandung1 from "./images/BANDUNG/bandung1.jpg";
import bandung2 from "./images/BANDUNG/bandung2.jpg";
import bandung3 from "./images/BANDUNG/bandung3.jpg";
import bandung4 from "./images/BANDUNG/bandung4.jpg";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/media">MEDIA</a>
        </li>
        <li>
          <a href="/search">SEARCH</a>
        </li>
        <li>
          <a href="/about">ABOUT US</a>
        </li>
      </ul>
    </nav>
  </header>
);

const CarouselItem = ({ image, author, title, topic, description }) => (
  <div className="item-kota">
    <img src={image} alt={title} />
    <div className="content-kota">
      <div className="author-kota">{author}</div>
      <div className="title-kota">{title}</div>
      <div className="topic-kota">{topic}</div>
      <div className="des-kota">{description}</div>
    </div>
  </div>
);

const ThumbnailItem = ({ image }) => (
  <div className="item-kota">
    <img src={image} alt="Thumbnail" />
    <div className="content-kota">
      <div className="title-kota">BANDUNG</div>
      <div className="description-kota">JAWA BARAT</div>
    </div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items] = useState([
    {
      image: bandung1,
      author: "BANDUNG",
      title: "Kawah",
      topic: "Rengganis",
      description:
        "Kawah Rengganis adalah objek wisata pemandian air panas alami yang berada di Kabupaten Bandung, Jawa Barat. Objek wisata alam ini memiliki pemandangan dan nuansa yang menenangkan.",
    },
    {
      image: bandung2,
      author: "BANDUNG",
      title: "The Great",
      topic: "Asia Afrika",
      description:
        "Tempat wisata Lembang ini menawarkan keindahan 7 negara dari 2 benua, yaitu Indonesia, Thailand, Korea, Jepang, India, Timur Tengah, dan Afrika.",
    },
    {
      image: bandung3,
      author: "BANDUNG",
      title: "Tangkuban",
      topic: "Perahu",
      description:
        "Gunung Tangkuban Perahu atau yang sering disebut Tangkuban Perahu merupakan obyek wisata alam yang terletak di Cikole, Kecamatan Lembang, Kabupaten Bandung Barat.",
    },
    {
      image: bandung4,
      author: "BANDUNG",
      title: "Gedung",
      topic: "Sate",
      description:
        "Gedung Sate adalah sebuah ikon bersejarah yang menjulang gagah di tengah kota Bandung, Jawa Barat, Indonesia. Dengan arsitektur yang memukau dan nilai sejarah yang mendalam, Gedung Sate telah menjadi landmark yang tak tergantikan, mencerminkan perjalanan panjang Indonesia dari masa kolonial hingga masa kini.",
    },
  ]);

  const carouselRef = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const intervalRef = useRef(null);
  const runNextAutoRef = useRef(null);

  const nextSlide = () => {
    showSlider(
      "next",
      carouselRef.current.querySelector(".list-kota"),
      thumbnailBorderDom.current,
      carouselRef.current,
      setRunNextAuto,
      6000,
      0
    );
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    showSlider(
      "prev",
      carouselRef.current.querySelector(".list-kota"),
      thumbnailBorderDom.current,
      carouselRef.current,
      setRunNextAuto,
      6000,
      0
    );
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const setRunNextAuto = (timeoutId) => {
    if (runNextAutoRef.current) {
      clearTimeout(runNextAutoRef.current);
    }
    runNextAutoRef.current = timeoutId;
  };

  useEffect(() => {
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    nextButton.onclick = nextSlide;
    prevButton.onclick = prevSlide;

    intervalRef.current = setInterval(nextSlide, 6000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(runNextAutoRef.current);
    };
  }, [items]);

  return (
    <div className="carousel-kota" ref={carouselRef}>
      <div className="list-kota">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item-kota ${
              index === currentIndex ? "active-kota" : ""
            }`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <CarouselItem {...item} />
          </div>
        ))}
      </div>
      <div className="thumbnail-kota" ref={thumbnailBorderDom}>
        {items.map((item, index) => (
          <ThumbnailItem key={index} image={item.image} />
        ))}
      </div>
      <div className="arrows-kota">
        <button id="prev">
          <h1>&lt;</h1>
        </button>
        <button id="next">
          <h1>&gt;</h1>
        </button>
      </div>
      <div className="time-kota"></div>
    </div>
  );
};

const AppKOTA = () => (
  <div>
    <Header />
    <Carousel />
  </div>
);

export default AppKOTA;
