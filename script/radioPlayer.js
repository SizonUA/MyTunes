export const radioPlayerInit = () => {
  const radio = document.querySelector(".radio"),
    radioCoverImg = document.querySelector(".radio-cover__img"),
    radioNavigation = document.querySelector(".radio-navigation"),
    radioHeaderBig = document.querySelector(".radio-header__big"),
    radioStop = document.querySelector(".radio-stop"),
    radioItem = document.querySelectorAll(".radio-item");

  const audio = new Audio();
  audio.type = "audio/aac";
  radioStop.disabled = true;

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove("play");
      radioStop.classList.add("fa-play");
      radioStop.classList.remove("fa-stop");
    } else {
      radio.classList.add("play");
      radioStop.classList.add("fa-stop");
      radioStop.classList.remove("fa-play");
    }
  };

  const selectItem = (elem) => {
    radioItem.forEach((item) => item.classList.remove("select"));
    elem.classList.add("select");
  };

  radioNavigation.addEventListener("change", (event) => {
    const target = event.target;
    const parent = target.closest(".radio-item");

    const title = parent.querySelector(".radio-name").textContent;
    radioHeaderBig.textContent = title;

    const urlImg = parent.querySelector(".radio-img").src;
    radioCoverImg.src = urlImg;

    selectItem(parent);
    radioStop.disabled = false;
    audio.src = target.dataset.radioStation;

    audio.play();
    changeIconPlay();
  });

  radioStop.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });
};
