import React, { useState, useEffect, useRef } from "react";
import "./AppKOTA.css";
import { showSlider } from "./carouselUtils";
import cirebon1 from "./images/CIREBON/cirebon1.jpg";
import cirebon2 from "./images/CIREBON/cirebon2.jpg";
import cirebon3 from "./images/CIREBON/cirebon3.jpg";
import cirebon4 from "./images/CIREBON/cirebon4.jpg";

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
      <div className="title-kota">CIREBON</div>
      <div className="description-kota">JAWA BARAT</div>
    </div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items] = useState([
    {
      image: cirebon1,
      author: "CIREBON",
      title: "Gua",
      topic: "Sunyaragi",
      description:
        "Gua Sunyaragi adalah kompleks gua dan taman yang terletak di Kota Cirebon, Jawa Barat. Tempat ini merupakan bagian dari Keraton Kasepuhan yang dibangun pada abad ke-17 oleh Pangeran Kararangen, seorang bangsawan Cirebon. Kompleks ini terdiri dari gua-gua buatan yang dihiasi dengan ornamen batu karang dan digunakan sebagai tempat meditasi dan pelatihan spiritual para bangsawan. ",
    },
    {
      image: cirebon2,
      author: "CIREBON",
      title: "Keraton",
      topic: "Kasepuhan",
      description:
        "Keraton Kasepuhan adalah salah satu keraton di Cirebon yang didirikan oleh Pangeran Cakrabuana pada tahun 1529. Keraton ini adalah pusat pemerintahan dan kebudayaan Kesultanan Cirebon. Bangunannya megah dengan arsitektur yang mencerminkan perpaduan antara budaya Jawa, Sunda, Islam, dan Cina. Di dalam keraton terdapat museum yang menyimpan berbagai artefak sejarah, termasuk kereta kencana Singa Barong yang digunakan dalam upacara tradisional. ",
    },
    {
      image: cirebon3,
      author: "CIREBON",
      title: "Batu",
      topic: "Lawang",
      description:
        "Batu Lawang adalah destinasi wisata alam yang terletak di Kabupaten Cirebon. Tempat ini terkenal dengan formasi batu alamnya yang unik dan menyerupai gerbang atau pintu, sehingga dinamakan Batu Lawang (Lawang berarti pintu dalam bahasa Jawa). Lokasi ini cocok untuk kegiatan trekking dan fotografi karena pemandangannya yang indah dan panoramik. ",
    },
    {
      image: cirebon4,
      author: "CIREBON",
      title: "Kampung",
      topic: "Sabin",
      description:
        "Kampung Sabin adalah destinasi wisata yang menggabungkan konsep pertanian dan pariwisata, terletak di wilayah Kabupaten Cirebon. Di Kampung Sabin, pengunjung dapat menikmati suasana pedesaan yang asri dengan hamparan sawah yang hijau. Tempat ini menawarkan berbagai aktivitas seperti berkeliling sawah, mencoba membajak sawah dengan kerbau, atau mempelajari cara menanam padi. ",
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

const AppKOTA2 = () => (
  <div>
    <Header />
    <Carousel />
  </div>
);

export default AppKOTA2;
