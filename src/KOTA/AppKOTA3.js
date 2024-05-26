import React, { useState, useEffect, useRef } from "react";
import "./AppKOTA.css";
import { showSlider } from "./carouselUtils";
import pang1 from "./images/PANGANDARAN/pang1.jpg";
import pang2 from "./images/PANGANDARAN/pang2.jpg";
import pang3 from "./images/PANGANDARAN/pang3.jpg";
import pang4 from "./images/PANGANDARAN/pang4.jpg";

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
      <div className="title-kota">PANGANDARAN</div>
      <div className="description-kota">JAWA BARAT</div>
    </div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items] = useState([
    {
      image: pang1,
      author: "PANGANDARAN",
      title: "Pantai ",
      topic: "Pangandaran",
      description:
        "Pantai Pangandaran adalah salah satu pantai terpopuler di Jawa Barat, terletak di Kabupaten Pangandaran. Pantai ini terkenal dengan pasir putihnya, ombak yang relatif tenang, serta pemandangan matahari terbit dan terbenam yang indah. Pantai Pangandaran menawarkan berbagai aktivitas seperti berenang, snorkeling, jet ski, dan banana boat.",
    },
    {
      image: pang2,
      author: "PANGANDARAN",
      title: "Cagar Alam ",
      topic: "Pananjung",
      description:
        "Cagar Alam Pananjung terletak di semenanjung Pangandaran, berbatasan langsung dengan Pantai Pangandaran. Cagar alam ini memiliki luas sekitar 530 hektar dan merupakan rumah bagi berbagai flora dan fauna, termasuk rusa, kera, dan lutung. Di dalam cagar alam, terdapat goa-goa alami dan buatan, seperti Goa Jepang dan Goa Parat. Selain itu, terdapat juga air terjun yang indah di tengah hutan.",
    },
    {
      image: pang3,
      author: "PANGANDARAN",
      title: "Pantai ",
      topic: "Madasari",
      description:
        "Pantai Madasari adalah pantai yang terletak sekitar 40 km dari pusat Pangandaran, di Kecamatan Cimerak. Pantai ini terkenal dengan keindahan alamnya yang masih alami dan belum terlalu banyak terjamah wisatawan. Di pantai ini, pengunjung bisa menikmati pemandangan batu karang besar yang tersebar di sepanjang pantai, pasir hitam yang lembut, serta ombak yang cukup besar, menjadikannya tempat yang ideal untuk berselancar. ",
    },
    {
      image: pang4,
      author: "PANGANDARAN",
      title: "Pantai Timur ",
      topic: "Pangandaran",
      description:
        "Pantai Timur Pangandaran terletak di sebelah timur Pantai Pangandaran. Pantai ini dikenal dengan suasananya yang lebih tenang dibandingkan dengan Pantai Barat Pangandaran. Pantai Timur Pangandaran sering digunakan sebagai tempat untuk melihat matahari terbit. Di sini, pengunjung juga bisa menikmati kegiatan seperti memancing, berperahu, dan bermain voli pantai. Di sekitar pantai, terdapat banyak warung makan yang menyajikan hidangan laut segar dengan harga terjangkau.",
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

const AppKOTA3 = () => (
  <div>
    <Header />
    <Carousel />
  </div>
);

export default AppKOTA3;
