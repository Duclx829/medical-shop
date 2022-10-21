<template>
  <div id="info-tab">
    <h5 class="text-danger fw-bold">Giới thiệu sản phẩm</h5>
    <p v-for="(content, index) in about.contents" :key="index">
      {{ content }}
    </p>
    <img
      v-for="(image, index) in about.images"
      :key="index"
      class="d-block mx-auto w-50 bg-dark mt-3"
      :src="image"
    />
    <h5 class="text-danger fw-bold mt-4">Đặc điểm và tính năng của sản phẩm</h5>
    <ul>
      <li v-for="(content, index) in feature.contents" :key="index">
        {{ content }}
      </li>
    </ul>
    <img
      v-for="(image, index) in feature.images"
      :key="index"
      class="d-block w-50 mx-auto mt-4"
      :src="image"
      alt=""
    />
    <h5 class="text-danger fw-bold mt-4">Bộ phụ kiện gồm</h5>
    <ul>
      <li v-for="(item, index) in accessory.items" :key="index">
        {{ item }}
      </li>
    </ul>
    <img
      v-for="(image, index) in accessory.images"
      :key="index"
      class="d-block w-50 mx-auto mt-4"
      :src="image"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    info: {
      type: Object,
    },
  },
  computed: {
    about() {
      return this.info.about;
    },
    feature() {
      return this.info.feature;
    },
    accessory() {
      return this.info.accessory;
    },
  },
};
</script>

<style scoped></style>
