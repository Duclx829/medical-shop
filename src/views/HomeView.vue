<template>
  <div>
    <Banner></Banner>
    <div
      class="category-container"
      v-for="(category, ind) in categories"
      :key="ind"
    >
      <div class="d-flex align-items-end border-3 category-header">
        <h4
          class="fw-bold fs-6 text-uppercase me-2 my-1 d-flex align-items-center"
        >
          <setting-filled
            class="text-white border-0 p-2"
            style="background-color: #58b0da"
          />
          &ensp;{{ category.name }}
        </h4>
        <a :href="category.href">Xem thêm<double-right-outlined /></a>
      </div>
      <div class="category-banner mt-4">
        <a :href="category.banner.href">
          <img :src="category.banner.img" :alt="category.banner.title" />
        </a>
      </div>
      <Products :products="getProductsById(category.id, products)"></Products>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Products from "../components/Products.vue";
import GetApiMixin from "../mixins/getAPI";
import { DoubleRightOutlined, SettingFilled } from "@ant-design/icons-vue";
export default {
  name: "HomeView",
  mixins: [GetApiMixin],
  data() {
    return {
      categories: [],
      products: [],
    };
  },
  components: { Banner, Products, DoubleRightOutlined, SettingFilled },
  methods: {
    getProductsById: (id, products) => {
      return products.filter((value) => value.categoryId == id);
    },
    getCategories: function (data) {
      this.categories = data;
    },
    getProducts: function (data) {
      this.products = data;
    },
  },
  async mounted() {
    await this.getAPI(this.getCategories, "categories");
    await this.getAPI(this.getProducts, "products");
  },
};
</script>

<style scoped>
.category-container {
  font-size: 1rem;
  margin-bottom: 3rem;
  font-family: sans-serif;
}

.category-header {
  border-bottom: 0.2em double rgba(66, 66, 66, 0.411);
  padding-bottom: 2px;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
}

.category-header a {
  font-size: 0.875em;
  font-style: italic;
  text-decoration: none;
  color: #000;
  display: flex;
  margin-bottom: 2px;
  align-items: center;
  transition: opacity 0.2s ease;
}

.category-header a:hover {
  opacity: 0.7;
}
.category-header a:hover > * {
  transform: translateX(0.2em);
}
.category-header a > * {
  font-size: 0.8em;
  margin: 0 0.2em;
  transition: transform 0.2s ease;
}
.category-banner {
  width: 100%;
  line-height: 0;
}

.category-banner img {
  width: 100%;
  object-fit: cover;
}
</style>
