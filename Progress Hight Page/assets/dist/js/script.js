let progress = document.querySelector(".progress");

window.onscroll = function () {
  progress.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
};

