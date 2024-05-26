import React, { useState, useEffect, useRef } from "react";
import "./AppKOTA.css";
import { showSlider } from "./carouselUtils";
import bogor1 from "./images/BOGOR/bogor1.jpg";
import bogor2 from "./images/BOGOR/bogor2.jpg";
import bogor3 from "./images/BOGOR/bogor3.jpg";
import bogor4 from "./images/BOGOR/bogor4.jpg";

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
      <div className="title-kota">BOGOR</div>
      <div className="description-kota">JAWA BARAT</div>
    </div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items] = useState([
    {
      image: bogor1,
      author: "BOGOR",
      title: "Taman Sakura ",
      topic: "Kebun Raya Cibodas",
      description:
        "Taman Sakura Kebun Raya Cibodas terletak di Kebun Raya Cibodas, sebuah kebun botani yang terletak di kaki Gunung Gede, Bogor. Taman ini terkenal karena keindahan bunga sakura yang mekar di musim tertentu, biasanya sekitar bulan Juli hingga Agustus. Selain sakura, taman ini juga memiliki beragam tanaman lain yang menarik, termasuk tanaman endemik Indonesia dan koleksi tumbuhan alpine. ",
    },
    {
      image: bogor2,
      author: "BOGOR",
      title: "Telaga",
      topic: "Saat",
      description:
        "Telaga Saat merupakan sebuah danau yang terletak di kawasan Puncak, Bogor. Danau ini terletak di antara perkebunan teh yang hijau dan dikelilingi oleh pegunungan yang indah. Telaga Saat menjadi tempat populer untuk berwisata karena pemandangannya yang menakjubkan dan udaranya yang sejuk. ",
    },
    {
      image: bogor3,
      author: "BOGOR",
      title: "Taman Safari",
      topic: "Indonesia",
      description:
        "Taman Safari Indonesia merupakan taman safari terbesar di Indonesia yang terletak di kawasan Cisarua, Bogor. Taman ini menawarkan pengalaman mendebarkan melihat berbagai hewan liar dari berbagai belahan dunia dalam habitat alaminya. Pengunjung dapat mengunjungi hewan-hewan langka seperti harimau, singa, gajah, jerapah, dan banyak lagi dari dalam kendaraan pribadi atau menggunakan bus safari.",
    },
    {
      image: bogor4,
      author: "BOGOR",
      title: "Curug ",
      topic: "Leuwi Hejo",
      description:
        "Curug Leuwi Hejo adalah air terjun yang terletak di Desa Karang Tengah, Kecamatan Babakan Madang, Bogor. Air terjun ini terkenal dengan kolam alaminya yang berwarna hijau jernih dan suasana alam yang asri. Pengunjung dapat menikmati keindahan air terjun, berenang di kolam alami, atau sekadar bersantai menikmati udara segar di sekitar curug. ",
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

const AppKOTA4 = () => (
  <div>
    <Header />
    <Carousel />
  </div>
);

export default AppKOTA4;
