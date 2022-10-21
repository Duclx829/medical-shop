<template>
  <div v-if="!isFetching" id="banner" class="banner">
    <div class="row m-0">
      <div class="col-lg-8 p-0 pe-1">
        <div class="carousel">
          <a
            v-for="(slider, ind) in sliders"
            :key="ind"
            :href="slider.href"
            class="carousel-item"
            :class="{ active: ind == 0 }"
          >
            <img :src="slider.img" />
          </a>
          <div class="carousel-btn carousel-prev">
            <span
              class="arrow-circle arrow-circle_left"
              @click="carouselTrigger('prev')"
            >
            </span>
          </div>
          <div class="carousel-btn carousel-next">
            <span
              class="arrow-circle arrow-circle_right"
              @click="carouselTrigger('next')"
            ></span>
          </div>
          <!-- <div class="carousel-indicator">
            <ul>
              <li
                v-for="(e, ind) in sliders"
                :key="ind"
                :class="{ active: ind == 0 }"
              ></li>
            </ul>
          </div> -->
        </div>
      </div>
      <div class="col-lg-4 p-0 ps-1 new-product-video">
        <div
          v-for="(video, ind) in videos"
          :key="ind"
          class="product-video_frame"
          @click="showVideoModal(video.src)"
        >
          <span class="product-video_title">{{ video.title }}</span>
          <iframe
            width="100%"
            height="100%"
            :src="video.src"
            frameborder="0"
            allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="play-btn">
            <img
              src="data:image/png;base64,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"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="video-modal">
      <div class="video-modal_frame">
        <iframe
          src=""
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="modal-btn-close" @click="hideVideoModal()">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAABWklEQVRoge2aS27CQBBEK5zQiyAWyenxMUCCDS1FlhzbPdU/6CfNEhdPY4893QM0TdM0TVOJCcD8GtO7558B3AA8XuMO4Nc6NCp/GeYt7Zq/FuYl7Zo/bYTJuAG4sEL/cDmQT3mm5x1hVtJ7ZWXMjNAjwkzpo7IPAFdC7u5bmimtkaXd0gDwrfgD2oVka4Fay/pRmf2Dh3QaWcFSOp2sYCGdVlZgSqeXFRjSZWSFEelysoL2nen9bqeimelyM7vESjqlrMCWTi0rsKRLyAqj0qVkBa20qezJ6sIAvoJ+G4Lmo2I5y57V0CFGZUtJs2RLSLNlU0tbyaaU/qjNw8gWz7MwSIGxny0jzdy8p5e2qFSklbYsy6ST9qhBpZH2LLiFS39cM61Su9S9PxzdEHftD7/NkQdgeyGxrkGF5K+FehXcQvKXod7VxZB8Ofp3RezRw6j8pmmapmmUPAG0V63ekxdppwAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import GetApiMixin from "../mixins/getAPI";
export default {
  name: "BannerComponent",
  mixins: [GetApiMixin],
  data() {
    return {
      index: 0,
      myInterval: Object,
      state: false,
      sliders: [],
      time: 7000,
      videos: [],
      isFetching: false,
    };
  },
  methods: {
    carouselTrigger: function (trigger) {
      const carousels = $(".carousel-item");
      // const indicator = $(".carousel-indicator li");
      let step = trigger == "next" ? 1 : -1;
      var prevIndex = this.index;
      this.index += step;
      // $(".carousel-indicator li").removeClass("origin-right origin-left");
      carousels.removeClass(
        "active slide-from-left slide-from-right slide-to-left slide-to-right"
      );
      if (trigger == "next") {
        if (this.index == carousels.length) {
          this.index = 0;
        }
        // $(".carousel-indicator .active").addClass("origin-right");
        // $(".carousel-indicator .active").removeClass("active");
        // indicator.eq(this.index).addClass("active origin-left");
        carousels.eq(prevIndex).addClass("slide-to-left");
        carousels.eq(this.index).addClass("slide-from-right");
      } else {
        if (this.index < 0) {
          this.index = carousels.length - 1;
        }
        // $(".carousel-indicator .active").addClass("origin-left");
        // $(".carousel-indicator .active").removeClass("active");
        // indicator.eq(this.index).addClass("active origin-right");
        carousels.eq(prevIndex).addClass("slide-to-right");
        carousels.eq(this.index).addClass("slide-from-left");
      }
      // let ind = this.index;
    },
    createInterval: function () {
      var self = this;
      self.myInterval = setInterval(function () {
        self.carouselTrigger("next");
      }, self.time);
    },
    autoPlaySlide: function (isPlay) {
      if (isPlay) {
        this.createInterval();
      } else {
        clearInterval(this.myInterval);
      }
    },
    showVideoModal: function (src) {
      $("body").css("height", "100vh");
      $("body").css("overflow", "hidden");
      $("body").css("padding-right", "8px");
      $("#video-modal").addClass("show");
      $("#video-modal iframe").attr("src", src);
    },
    hideVideoModal: function () {
      $("body").css("height", "auto");
      $("body").css("overflow", "auto");
      $("body").css("padding-right", "0px");
      let videoModal = $("#video-modal");
      if (!videoModal) return;
      videoModal.removeClass("show");
      $("#video-modal iframe").attr("src", "");
    },
    getData: function (data) {
      this.sliders = [...data.sliders];
      this.videos = [...data.newProductVideos];
      this.isFetching = false;
    },
  },
  async mounted() {
    this.hideVideoModal();
    await this.getAPI(this.getData, "banners");
    this.autoPlaySlide(true);
    // console.log(autoPlay);
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
  margin: 2rem 0;
  /* overflow: hidden; */
  font-size: 1rem;
}

.carousel {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 19em;
  position: relative;
  overflow: hidden;
}

.carousel-item {
  display: block;
  position: absolute;
  inset: 0;
  z-index: -100;
  opacity: 0;
  line-height: 0;
  animation-duration: 0.25s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.carousel-item.active {
  z-index: -10;
  opacity: 1;
}

.carousel-item.slide-from-left {
  animation-name: slide-from-left;
  z-index: 0;
  opacity: 1;
}

.carousel-item.slide-from-right {
  animation-name: slide-from-right;
  z-index: 0;
  opacity: 1;
}

.carousel-item.slide-to-left {
  animation-name: slide-to-left;
  z-index: -1;
  opacity: 1;
}

.carousel-item.slide-to-right {
  animation-name: slide-to-right;
  z-index: -1;
  opacity: 1;
}

@keyframes slide-from-left {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slide-from-right {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slide-to-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-to-right {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}

.carousel img {
  height: auto;
  width: 100%;
  object-fit: cover;
  object-position: left;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.2rem;
  width: fit-content;
  background: transparent;
  z-index: 1;
}

.carousel-prev {
  left: 0;
}

.carousel-next {
  right: 0;
}

.arrow-circle {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: transparent;
  position: relative;
  cursor: pointer;
  transition: all 0.15s ease-out;
}

.arrow-circle_left::before,
.arrow-circle_right::before {
  content: "";
  position: absolute;
  top: 50%;
  height: 30%;
  width: 30%;
  rotate: 45deg;
  opacity: 0.8;
  border-width: 0.2rem;
  border-color: #000;
}

.arrow-circle_left:active::before,
.arrow-circle_right:active::before {
  scale: 0.9;
}

.arrow-circle:hover {
  background-color: rgba(228, 228, 228, 0.2);
}

.arrow-circle:hover::before {
  opacity: 1;
}

.arrow-circle_left::before {
  left: 50%;
  translate: -30% -50%;
  border-left-style: solid;
  border-bottom-style: solid;
}

.arrow-circle_right::before {
  right: 50%;
  translate: 30% -50%;
  border-right-style: solid;
  border-top-style: solid;
}
/*
.carousel-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-indicator ul {
  display: flex;
}

.carousel-indicator li {
  display: block;
  background-color: rgba(255, 255, 255, 0.815);
  height: 0.3rem;
  width: 2rem;
  overflow: hidden;
  margin: 0 0.3em;
  border-radius: 5px;
  position: relative;
}

.carousel-indicator .slide-from-left {
  transform-origin: right;
}

.carousel-indicator .origin-left {
  transform-origin: left;
}

.carousel-indicator li:before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgb(77, 77, 77);
  width: 100%;
  transform: scaleX(0);
  transform-origin: inherit;
  transition: transform 0.4s ease;
}

.carousel-indicator .active::before {
  transform: scaleX(1);
}

.carousel-indicator .active::before {
  background-color: rgb(68, 68, 68);
  transform: scaleX(1);
  }
*/
.new-product-video {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* margin-left: 0.2rem; */
}

.new-product-video .product-video_frame {
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2.6rem;
  height: 2.6rem;
  background: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.play-btn img {
  width: 130%;
  height: 130%;
  margin: 0;
  object-fit: cover;
  transition: all 0.2s linear;
}

.play-btn:hover img {
  transform: scale(1.05);
}

.new-product-video iframe {
  position: absolute;
  left: 0;
  top: 0;
  width: 1000px;
  height: 562.4999px;
  z-index: -1;
  transform: translate(-30%, -37%) scale(0.5);
}

.product-video_title {
  position: absolute;
  color: #fff;
  font-size: 0.8rem;
  top: 0.5rem;
  left: 1rem;
  z-index: 1;
}

#video-modal {
  position: fixed;
  inset: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.726);
  z-index: 999;
  visibility: hidden;
  opacity: 0;
}

#video-modal.show {
  opacity: 1;
  visibility: visible;
}

.video-modal_frame {
  position: absolute;
  width: 60%;
  height: 60%;
  max-width: 1600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  border: 5px solid #fff;
}

.video-modal_frame iframe {
  width: 100%;
  height: 100%;
  inset: 0;
}

.modal-btn-close {
  height: 3rem;
  width: 3rem;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.modal-btn-close img {
  width: 60%;
  height: 60%;
  object-fit: cover;
  transition: all 0.15s ease-in-out;
}

.modal-btn-close:hover img {
  transform: scale(1.1);
}
</style>
