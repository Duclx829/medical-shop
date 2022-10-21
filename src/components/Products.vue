<!-- eslint-disable prettier/prettier -->
<template>
  <div class="pt-4">
      <div class="products">
        <router-link
          :to="`/product/${product.id}`"
          class="product"
          v-for="(product, ind) in products"
          :key="ind"
        >
          <div class="d-flex justify-content-center border border-mute position-relative">
            <span
              v-if="product.oldPrice != 0"
              class="sale-tag"
            ></span>
            <img :src="product.images[0]" />
            <div
              class="addtocart "
              @click="addToCart()"
            >
              <img
                class="cart-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACW0lEQVRoge2XP2sUQRyG3znFA8VCRGw8IorETghYCGIlCLFPYaNYWQvxM4iChYWCTWyNQRstIlgGYsR8ADFqKaKGHDEop/dY7B4cP3fXmd3ZbMB9YOHuZvZ937n5L7W0tEiSgN9k8wM41HS+PDpjn8mp05V0ZRuyVAMY5PQAwEdgV9MZs/DpAUmakHSh5ixxAR4W9Mh2sgacz8vpChowJelNLf9OOB+cc8eyCjpZP0qSc25V0uvaIoUxzCvIbUDKvchBynK/1FtAF/hsxuTlyOGs5xPj9x7oVhG8ZQRfRcxrvc4AQ+M3U1V0AvhlRE9Hyjzu44Al47MM5C40IeLPjfBchMzW41LGEno2lvi0Ed4CDkYRT/T3AO+Mx+NY+qPufWsMZiPq3zDaP4ETsfRHJrPGJMr5CDgAfDXad2JkzjL6boymI+jeNZrrMYenNZszZs8q6h1Ph8s412PlzTKcMmbDKmOV2JuWp+kK9RG8af3rLJTFgxLv+LAsKXjpLNOAOi42fUlXnXNFl6rqABcjD5l1knlwstbgafi9JJNsnBV26F35L4CbJvwAONV0Li+A/cCmacDtpnN5Q3JOH+cTsK/pXJK027Pelvl+WNIm1LdoOOe87gFelYCOpDVJR6uECsG3AV77gHNuKOmapEGVUHXgvZE55xYlnZP0QsnG09ISCtADFoB++jwFJneKno+ZvfoBfAN6Tev5GC5kmI2Yb1rPx7BfYLjRlF6Z+0Bmnkg6wXohDXhZULYYoFOXXjHAZDrBLF+AI03r+Zr2gHlgI30eVTGLrdfS8j/yB8yRDYJ2IGMzAAAAAElFTkSuQmCC"
              />
              Thêm vào giỏ
            </div>
          </div>
          <div class="d-flex flex-column  small">
            <div class="text-center mt-2 px-2 " style="height: 3rem">{{ product.name
            }}</div>
            <div class="fw-bold text-center text-danger my-1">
              <span
                v-if="product.oldPrice != 0"
                class="text-muted fw-normal me-3"
              ><s>
                {{ product.oldPrice }}đ
              </s></span>
              {{ product.currentPrice }}đ
            </div>
            <div class="text-center rate">
              <span
                v-for="(count, ind) in 5"
                :key="ind"
              >
                <!-- solid star -->
                <img
                  v-if="count <= product.rate"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB50lEQVRIieWVwWoTURSGv3PTqJR0pkarQpHulEZ3LWKSScE30BcQXQRcFHTbpQt9ANfd6cKd1L0INokide1WFLGQlGamUdDJ3OMipoxhhtzqSjyLy8w55/+/e2buMPBfRdTyH0Yt/8FRNOJs3p6rqprO6E6rfhC9cdEZV4CqWU/J1vM7fw+nCQ7apTNWCx+B479SPwrxcKl07evuNK3TBFbNnZQ5wLGkWGi6aKdOoC+ZCYv+B4HFCekX70R/SVaJnQDfOqcW4yRew3AaNQugCyqcE+U8sJKjf6fCJ1F2QbqI7WLpFQvFV7O1vc8AM+PO2A5fIHIRBUYLotPmY0V0DFdQAYE4Gb4HKpB6BwLPpto5hghb4+tDgBeEG6jcA+xfeCsq970g3DiETXZE2/M3VPQJMHtE8++I3vLr0dN0MvMUhR3vClaeA2cdzfcEc90L9luThczvwK9Fb0WN0zkHEDW3s8xzAQBW7GVXgBV7Ka+WCxCk7goQye/NBKgioFVXAKp11WyvzOSgXa4A5Yl0T6Ap0AR6E7WTg3Z52RmQkDTS+0PksbFJxQvCTS8IN1W5gMojIElpAmeAqI7zOxi96tf7N+fWBt1xfb4R7vuN/l2M1oCdkcj934Iq5uB1aTnvuf5p778ZPwH1MaY0TRzDNQAAAABJRU5ErkJggg=="
                />
                <!-- stripes star -->
                <img
                  v-if="count > product.rate"
                  src="data:image/png;base64,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"
                />
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProductsView",
  props: ["products"],
  data() {
    return {};
  },
  methods: {
    addToCart: () => {
      alert("added");
    },
  },
};
</script>

<style scoped>
.products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.9rem;
  margin-bottom: 1.2em;
  margin-top: 0.8em;
}

.product {
  display: block;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 1rem;
}

.sale-tag::before {
  content: "sale";
  font-size: 0.7rem;
  position: absolute;
  z-index: 10;
  display: block;
  right: -15%;
  top: 5%;
  background: #e34444;
  color: #fff;
  width: 50%;
  text-align: center;
  rotate: 45deg;
  text-transform: uppercase;
}

.product img {
  width: 70%;
  height: auto;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  object-fit: cover;
}

.addtocart {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.2rem;
  background: rgba(36, 36, 36, 0.815);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.7rem;
  transform: translateX(101%);
  transition: transform 0.4s ease, font-size 0.15s ease-in-out,
    background 0.15s ease-in-out;
}

.product:hover .addtocart {
  transform: translateX(0);
}

.product .cart-icon {
  height: 1rem;
  width: 1rem;
  margin-right: 0.35rem;
}

.addtocart:hover {
  background: #e34444;
  font-size: 0.75rem;
}

.product:hover .cart-icon {
  animation: wiggle 2s linear infinite;
  animation-delay: 0.4s;
}

@keyframes wiggle {
  5% {
    transform: translateX(20%);
  }

  10% {
    transform: translateX(0);
  }

  15% {
    transform: translateX(20%);
  }

  20% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(20%);
  }

  30%,
  100% {
    transform: translateX(0);
  }
}

.rate img {
  width: 16px;
  height: 16px;
  margin: 0;
}
</style>
