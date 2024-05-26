// src/carouselUtils.js
export const showSlider = (
  type,
  sliderDom,
  thumbnailBorderDom,
  carouselDom,
  setRunNextAuto,
  timeAutoNext,
  timeRunning
) => {
  const sliderItemsDom = sliderDom.querySelectorAll(
    ".carousel-kota .list-kota .item-kota"
  );
  const thumbnailItemsDom = document.querySelectorAll(
    ".carousel-kota .thumbnail-kota .item-kota"
  );

  if (type === "next") {
    sliderDom.appendChild(sliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next-kota");
  } else {
    sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev-kota");
  }

  setTimeout(() => {
    carouselDom.classList.remove("next-kota");
    carouselDom.classList.remove("prev-kota");
  }, timeRunning);

  setRunNextAuto(
    setTimeout(() => {
      document.getElementById("next").click();
    }, timeAutoNext)
  );
};
