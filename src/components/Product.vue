<template>
  <div v-if="!isFetching">
    <div class="row my-5 product-detail">
      <div class="col-md-8 offset-2 offset-lg-0 col-lg-7 px-0 bg-white mb-5">
        <div class="slider-container w-75 mx-auto">
          <!-- <div id="previewimg-fullscreen-modal">
            <div class="overlay" @click="hideImgFullscreen()"></div>
            <div class="position-relative border">
              <img src="" alt="" />
              <button id="close-modal" @click="hideImgFullscreen">x</button>
            </div>
          </div> -->
          <div class="sliders">
            <div
              class="slider"
              v-for="(image, index) in detail.images"
              :class="{ active: index == sliderIndex }"
              :key="index"
              @click="showImgFullscreen()"
            >
              <img :src="image" :ref="`img${index}`" />
            </div>
          </div>
          <div class="thumbnail-container">
            <ul class="list-inline d-flex justify-content-around w-100 m-0">
              <li
                class="thumbnail-item"
                :class="{ active: index == sliderIndex - thumbIndex }"
                v-for="(count, index) in detail.images.length > 5
                  ? 5
                  : detail.images.length"
                :key="index"
                @click="sliderIndex = index + thumbIndex"
                @mouseover="sliderIndex = index + thumbIndex"
              >
                <img :src="detail.images[index + thumbIndex]" />
              </li>
            </ul>
            <button
              class="slider-btn slider-prev"
              :class="{ disabled: thumbIndex <= 0 }"
              @click="thumbIndex--"
            >
              <LeftOutlined />
            </button>
            <button
              class="slider-btn slider-next"
              :class="{ disabled: thumbIndex >= detail.images.length - 5 }"
              @click="thumbIndex++"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>
      <div
        class="col-md-8 offset-2 offset-lg-0 col-lg-5 px-0 py-4 border fs-6 mb-2"
      >
        <div class="px-4 mb-4">
          <h4 class="">{{ detail.name }}</h4>
          <div class="rate my-2">
            <p class="text-secondary small my-0 me-3">7 Đánh giá</p>
            <span
              v-for="(count, ind) in 5"
              :key="ind"
              class="d-flex align-items-center"
            >
              <star-filled class="text-warning" v-if="count <= detail.rate" />
              <StarOutlined class="text-secondary" v-if="count > detail.rate" />
              <!-- <span class="tooltip"></span> -->
            </span>
          </div>
          <div class="d-flex gap-4 align-items-end mb-4">
            <span class="fw-bold text-danger fs-5"
              >{{ detail.currentPrice }}đ</span
            >
            <span v-if="detail.oldPrice != ''" class="text-muted"
              ><s>{{ detail.oldPrice }}đ</s></span
            >
            <span v-if="detail.oldPrice != ''"
              >Giảm
              {{
                100 -
                Math.round(
                  detail.currentPrice.replaceAll(".", "") /
                    (detail.oldPrice.replaceAll(".", "") * 0.01)
                )
              }}%</span
            >
          </div>
          <div v-if="detail.size" class="row align-items-start mt-1">
            <div
              class="col-3 col-sm-3 col-md-3 col-lg-3 d-flex align-items-center"
            >
              Size:
            </div>
            <div class="col-9 col-sm-9 col-md-9 col-lg-9">
              <ul class="size-select">
                <li
                  v-for="(value, index) in detail.size"
                  :key="index"
                  :class="{ active: value == selectSize }"
                  @click="selectSize = value"
                >
                  {{ value }}
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-1">
            <div
              class="col-3 col-sm-3 col-md-3 col-lg-3 d-flex align-items-center"
            >
              Số lượng:
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-6">
              <div
                class="input-group-btn"
                :class="{ disabled: detail.quantity == 0 }"
              >
                <button
                  type="button"
                  class="w-25 btn-minus"
                  @click="quantity -= quantity > 0 ? 1 : 0"
                >
                  -
                </button>
                <input
                  class="border-0 outline-0 w-50 text-center"
                  type="text"
                  :value="quantity"
                  min="0"
                />
                <button
                  type="button"
                  class="w-25 btn-plus"
                  @click="quantity += quantity < detail.quantity ? 1 : 0"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="px-4 mt-4">
          <div class="small">
            <div
              v-if="detail.specification.model"
              class="d-flex align-items-center my-1"
            >
              <check-circle-filled class="text-success me-1" />
              <b>Model:&ensp;</b>
              <span>{{ detail.specification.model }}</span>
            </div>
            <div
              v-if="detail.specification.brand"
              class="d-flex align-items-center my-1"
            >
              <check-circle-filled class="text-success me-1" />
              <b>Thương hiệu:&ensp;</b>
              <span>{{ detail.specification.brand }}</span>
            </div>
            <div
              v-if="detail.specification.technology"
              class="d-flex align-items-center my-1"
            >
              <check-circle-filled class="text-success me-1" />
              <b>Công nghệ:&ensp;</b>
              <span>{{ detail.specification.technology }}</span>
            </div>
            <div
              v-if="detail.specification.guarantee"
              class="d-flex align-items-center my-1"
            >
              <check-circle-filled class="text-success me-1" />
              <b>Bảo hành:&ensp;</b>
              <span>{{ detail.specification.guarantee }}</span>
            </div>
            <div class="d-flex align-items-center my-1">
              <close-circle-filled
                v-if="detail.quantity <= 0"
                class="text-danger me-1"
              />
              <check-circle-filled
                v-if="detail.quantity > 0"
                class="text-success me-1"
              />
              <b>Trạng thái:&ensp;</b>
              <span v-if="detail.quantity > 0">Còn hàng</span>
              <span v-if="detail.quantity <= 0" class="fw-bold text-danger"
                >Hết hàng</span
              >
            </div>
          </div>
          <form action="" class="mt-4 mb-2 d-flex gap-2">
            <button
              class="border border-danger bg-danger text-white w-100 py-1"
              type="button"
            >
              Mua
            </button>
          </form>
          <!-- <div class="save-amount">Bạn đã tiết kiệm 50.000vnđ</div> -->
          <p class="small mt-1 d-flex">
            <span class="text-danger fw-bold me-1">*</span
            ><strong>Miễn phí vận chuyển&nbsp;</strong> cho đơn hàng trên<strong>
              &nbsp;600.000vnđ</strong
            >
          </p>
        </div>
      </div>
    </div>
    <div class="product-content mb-5">
      <nav
        class="nav bg-white pt-4 position-sticky top-0 justify-content-center gap-5 pb-1 border-2 border-bottom text-uppercase"
        style="z-index: 1050"
      >
        <div
          @click="selectTabId = 1"
          class="nav-item d-flex align-items-center position-relative cursor-pointer"
          :class="{ active: selectTabId == 1 }"
        >
          <exclamation-circle-outlined class="fs-5" />&ensp;Thông tin sản phẩm
        </div>
        <div
          @click="selectTabId = 2"
          class="nav-item d-flex align-items-center position-relative cursor-pointer"
          :class="{ active: selectTabId == 2 }"
        >
          <setting-outlined class="fs-5" />&ensp;Thông số kỹ thuật
        </div>
        <div
          @click="selectTabId = 3"
          class="nav-item d-flex align-items-center position-relative cursor-pointer"
          :class="{ active: selectTabId == 3 }"
        >
          <exception-outlined class="fs-5" />&ensp;Hướng dẫn sử dụng
        </div>
        <div
          @click="selectTabId = 4"
          class="nav-item d-flex align-items-center position-relative cursor-pointer"
          :class="{ active: selectTabId == 4 }"
        >
          <star-outlined class="fs-5" />&ensp;Đánh giá
        </div>
      </nav>
      <div class="tab-content">
        <ProductInfo
          :info="detail.information"
          :class="{ active: selectTabId == 1 }"
        />
        <ProductSpecification
          :specification="detail.specification"
          :quantity="detail.quantity"
          :class="{ active: selectTabId == 2 }"
        />
        <div
          id="instruct-tab"
          class="d-flex justify-content-center"
          :class="{ active: selectTabId == 3 }"
        >
          <iframe
            width="863"
            height="440"
            src="https://www.youtube.com/embed/ulE3rAgkq3c"
            title="Máy tạo oxy xách tay Philips SimplyGo Mini | Sieuthiyte.com.vn"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div id="review-tab" :class="{ active: selectTabId == 4 }">
          Review tav
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import GetApiMixin from "../mixins/getAPI";
import ProductSpecification from "./ProductSpecification.vue";
import ProductInfo from "./ProductInfo.vue";
import {
  LeftOutlined,
  RightOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleOutlined,
  SettingOutlined,
  ExceptionOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons-vue";
export default {
  name: "ProductComponent",
  mixins: [GetApiMixin],
  components: {
    LeftOutlined,
    RightOutlined,
    CheckCircleFilled,
    CloseCircleFilled,
    ExclamationCircleOutlined,
    SettingOutlined,
    ExceptionOutlined,
    StarOutlined,
    StarFilled,
    ProductSpecification,
    ProductInfo,
  },
  data() {
    return {
      isFetching: true,
      detail: {},
      quantity: 0,
      sizes: ["S", "M", "L", "XL", "XXL"],
      selectSize: "",
      selectTabId: 1,
      sliderIndex: 0,
      thumbIndex: 0,
    };
  },
  computed: {
    accessory() {
      return this.detail.information.accessory;
    },
  },
  methods: {
    getData: function (data) {
      this.detail = data;
      this.isFetching = false;
    },
    buttonReactive: async function () {
      await console.log($(".slider-btn").length);
      $(".slider-btn").on("click", () => {
        console.log("click");
        // let btn = $(e);
        // console.log(btn);
        // let btnBg = document.createElement("div");
        // btnBg.classList.add("btn-bg_spread");
        // btn.append(btnBg);
        // setTimeout(function () {
        //   btnBg.remove();
        // }, 550);
      });
    },
    // noScroll: function (height, overflow, paddingRight) {
    //   $("body").css("height", height);
    //   $("body").css("overflow", overflow ? "hidden" : "auto");
    //   $("body").css("padding-right", `${paddingRight}px`);
    // },
    // showImgFullscreen: function () {
    //   $("#previewimg-fullscreen-modal").addClass("show");
    //   this.noScroll("100vh", true, 8);
    // },
    // hideImgFullscreen: function () {
    //   $("#previewimg-fullscreen-modal").removeClass("show");
    //   this.noScroll("auto", false, 0);
    // },
  },
  async mounted() {
    await console.log($(".slider-btn"));
    await this.getAPI(this.getData, `products/${this.$route.params.id}`);
    await this.buttonReactive();
    // this.noScroll("auto", false, 0);
  },
};
</script>
<style>
.btn-bg_spread {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(53, 53, 53, 0.322);
  opacity: 0;
  border-radius: 50%;
  z-index: -1;
  animation: spread 0.5s linear forwards;
}

@keyframes spread {
  from {
    opacity: 1;
    width: 0%;
    height: 0%;
  }

  to {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
<style scoped>
.product-detail {
  font-size: 0.8rem;
  align-items: flex-start;
  margin-left: 0;
  margin-right: 0;
}

#previewimg-fullscreen-modal {
  position: fixed;
  inset: 0;
  width: 0;
  height: 0;
  background: transparent;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: -1;
  visibility: hidden;
}

#previewimg-fullscreen-modal.show {
  visibility: visible;
  z-index: 1000;
  width: 100%;
  height: 100%;
  opacity: 1;
}

#previewimg-fullscreen-modal .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.507);
}

#close-modal {
  position: absolute;
  top: 0.2em;
  right: 0.2em;
  outline: 0;
  border: none;
  background: transparent;
  color: rgba(0, 0, 0, 0.493);
  opacity: 0.5;
  font-size: 2.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: font-size 0.1s ease, transform 0.1s linear, opacity 0.2s ease;
}

#close-modal:active {
  transform: scale(0.9);
}

#close-modal:hover {
  opacity: 1;
}

#previewimg-fullscreen-modal img {
  max-width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 3px;
  padding: 5px;
  object-fit: contain;
}

.sliders {
  height: 30rem;
  width: 95%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slider {
  height: 0;
  visibility: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  inset: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.5s ease, visibility 0s, height 0s;
}

.active {
  height: 100%;
  visibility: visible;
  position: relative;
  opacity: 1;
}

.slider img {
  width: 99%;
  height: auto;
  object-fit: contain;
}

.zoom-out {
  position: absolute;
  bottom: 1%;
  right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0;
  color: #00000038;
  font-size: 2.8em;
  transition: all 0.2s linear;
}

.zoom-out:hover {
  color: #00000063;
}

.thumbnail-container {
  width: 60%;
  margin: 1.5em auto 0 auto;
  position: relative;
}

.thumbnail-item {
  background: #fff;
  width: 4em;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 0.5em;
  cursor: pointer;
}
.thumbnail-item:hover,
.thumbnail-item.active {
  box-shadow: 0 0 0 2px #000;
}
.thumbnail-item img {
  width: 60%;
  height: auto;
  object-fit: contain;
}

.slider-btn {
  position: absolute;
  height: 40px;
  width: 40px;
  top: 50%;
  border: 0;
  background-color: transparent;
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-size: 1.2rem;
  font-weight: bolder;
  color: rgba(0, 0, 0, 0.623);
}

.slider-btn:hover {
  background-color: rgba(56, 56, 56, 0.075);
}

.slider-next {
  left: 101%;
}

.slider-prev {
  right: 101%;
}

.slider-btn.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.rate {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2px;
}

.size-select {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
}

.size-select > * {
  border: 1px solid #000;
  width: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.size-select > *:hover,
.size-select > .active {
  background: #000;
  color: #fff;
}

.input-group-btn {
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  background: rgba(219, 219, 219, 0.658);
  border: 1px solid rgba(219, 219, 219, 0.658);
}
.input-group-btn.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.btn-minus,
.btn-plus {
  position: relative;
  border: none;
  text-align: center;
  background: transparent;
  transition: all 0.2s ease;
  font-weight: 800;
}

.btn-minus:hover,
.btn-plus:hover {
  background-color: rgba(39, 39, 39, 0.116);
}

.nav-item {
  opacity: 0.7;
  transition: all 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  opacity: 1;
}

.nav-item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: transparent;
  bottom: -6px;
  transition: all 0.2s ease;
}

.nav-item:hover::before,
.nav-item.active::before {
  background: #000;
}

.tab-content {
  margin-top: 3rem;
  margin-bottom: 7rem;
}

.tab-content > * {
  height: 500px;
  visibility: hidden;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 0.5s linear;
}

.tab-content .active {
  visibility: visible;
  opacity: 1;
  height: auto;
}
</style>
