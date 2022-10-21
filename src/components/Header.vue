<template>
  <header>
    <div class="top-header">
      <div class="container-lg px-5">
        <nav class="navbar">
          <ul class="list-inline d-flex align-items-center m-0">
            <li class="list-inline-item d-flex align-items-center active">
              <img
                id="vi"
                class="icon flag-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABsElEQVRoge2Yy0rDQBSG/0kmtEisKK5c+ASKiDcQ26cRxY2iPoDgyr24ddEX6APUlT6BCi68FaQqFSpRcNLm6iIIFtpqyRmDcD4IDMkw53zMORMSgGEYhmH+MeJrcDkzE2eZyKBMn58LADCyTiQtLJA1LJA1LNAPa1zAGhc/T0yBVoFCUaKwInWG+AOBkl4BbavLUYGhKRMCgBwzELxGWuJo24HCioQwkgiFZVNXGI0CRdl1TE3qlUdKEhM7OZh279PGnjMxdWJ33ItUjKdDD07VTxU/9Q68nQa4W1dQV7+vcfc6wu2Gmzp5gKiEvEaM2rbCS9kD+nnEQLPi435LwXukaWqy4oxD4KXsoVWLMLmX7zrnYb+F97OAKiQADU1sWL2fCYv+rUwu8P3Eif3k+mKkSH+ckgoYOcBeSJL0GjFquy7uN12060m924sSRp52F0gF7KUkQafq43ZVQV2FcG9C3K0pNCt+hyAVpG+Y4XmJ+kELzklno0Ye8HzUxsdlCHvWJG1kUoHGcRuB0/vnxvtpAHURUoakLaF+yQ8yZxD4iyxrWCBrWIBhGIZhmBR8AlAegdvTb90RAAAAAElFTkSuQmCC"
              />
              <label for="vi">Vietnamese</label>
            </li>
            <li class="list-inline-item d-flex align-items-center">
              <div class="vr"></div>
            </li>
            <li class="list-inline-item d-flex align-items-center">
              <img
                id="en"
                class="icon flag-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABQUlEQVRoge3WsUrDUBTG8X80qC1CCLg5uHSwQzfBxaGLiKPiW/gCdezQ1UfwCRQndRAXBQmCiw7dhFIIFdGESMUIGqcEoyK03ptw4fym3OXmfpyccwNCCCGEKI8FkCSJ1dw8/lC9+VHUVr1lZvbsygKY0PaGguQCVCs2G+sLY68bdZdG3dV53h/s9GF6apLd9jKLNYenMMa7fhhpfdd7prOzBMB265K+P+R1/1TfyV0nHyB+e+fcG+Dfv3DTDUZeB2HMhTcAoO8P9R38G61NfLC3onrLzJzrWPClAqlqxWatOc/hSW+sddoDt92Ama1VbQFSuQCq+4BI+/nzAUzsA+N7QO6Bv+6BQgPo+P6LmELyM1e2rAKPYaS8Ajr9OoVMZHyAbAoVMTF0ML4CxgeQKVQ24wPIFCqb8QGEEEIIIf7hEycURuUfhn7yAAAAAElFTkSuQmCC"
              />
              <label for="en">English</label>
            </li>
          </ul>
          <ul class="list-inline d-flex align-items-center m-0">
            <li class="list-inline-item">
              <a class="nav-link d-flex align-items-center" href="#">
                <img
                  class="icon key-icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACXUlEQVRoge2aP2sUQRiHfyPpTNIZAhYRTRfBJjaixFhqYyUoiN8hTSAonp21FpZ+hVzOP9gF7ERBkDQiqJ1yWJyxUE/yWOydaLjZm83s7Ky388BW77wz78Pu7MzOnZRIJBKJ+mJiDg7MS7oo6bykJUkLkmYH4Z6kj5J2JG1LemKM+RyjTm+AFaAD/MKdPrAFnItdvzPAIvC0gKSNx8Dx2D65ANeB3RJkh3wFrsX2GgmwXqLofu7G9vsH4E5A2SG3YntK+vMYV8VVl5qCLUvAoqTXkg6HGmMfu5JOGWPe5zU6FLCA+/KTbStbn6cH16qkTk77GUn3PMY7OGTrrA/rOX1vjMk9W6XrsKhHHrKbDv13cvK3qnD8u5h5sl3RQVlxGGM1J78PzNlyQ8zhS5KmPPJfObR5mRObUrY/H0kI4bF3qAKsNYQQXvLMX3Zoc3pM/KQtEEJ4wTN/rYQ2vjW4A/zweGEN2cjp/6ZD/vcqhcv6IuqQvY2nB9cF3Jc7q3DpW0vgnaQTZfdbkK4xZuTSFGIOfwrQZ1E+2AIhhN8E6LMoO7ZACOFnAfosyrYtEGIOz0r6Ir/dlg99SUeNMd1RwRB3eE3xZKXsOHekbOkArZKWJB+q+TykHrLtJsn2gGNNkd0DrjRFFnL23pMmuwe0miLbo0GPcZv/9AVV5LDvJ7AJnAkuGki2BcwAl4EHwHPgLfCN7BChC7wAHgI3gCOViAaSvV1Z8UVJso7Err0wPrJ1FrZ+D/sWbYyJ+g8hGyF/Lq0lSXjS8T6KqetctdG4O5yEJ50knEgkEolEPH4DRxDJsBNjqfcAAAAASUVORK5CYII="
                />
                Đăng nhập
              </a>
            </li>
            <li class="list-inline-item d-flex align-items-center">
              <div class="vr"></div>
            </li>
            <li class="list-inline-item">
              <a class="nav-link d-flex align-items-center" href="#">
                <img
                  class="icon user-icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEGklEQVRoge2aX4hWRRjGn1mNXOwPRLip34K2YhlRKlJCbrJpZN2sZNh9eBXRjTdBXkWXRQhBIATRTeiNSqkQEWWbWzcVUW0GJbi5ZWuBJtqK66+L8334NZ0/M+e85zsr7O9uODPPvM+ZOXPOvHOkeeaZ50bG1d0BcKukrZK2SVoraUDSne3LU5LGJL3tnPu87lhqBVgM7AHOE8Y7wE1Nx10KYDXwc6DRbt5tOvZogPuBP0qY7fAX8Cmwo2kvhQD9wHcVzPrsbdpTLsArhmY7PGcZo9kqDdws6bSkJVaabX6XdLdz7rKFWJ+FSJvtsjcrSXdJespKzNLwo4ZaPtushCwNP2yo5fOglZCl4aWGWj4rrIQsDd9hqOVzm5WQpeGrhlo+V6yELA1PGmr5TFkJWRoeN9Ty+cJKyNLwIUMtn8NWQpaGT0nCUK8Dkn6yErM0vFf1JBScpDesxCwNrzLU8lltJWRp2GzapXDSSsjS8BFDrV5qlwNYBHxSw3744/bWc24CHDA0u986Pssp3cHyfXzQUKsegIXAtwaj+z03StoWeBy4VsHsLPBY0z6iAF4tafZLYGPT8UcD9AFvRhidAV4Aaj3+6cXZUsj39bSk7c65EyntnaT1kkYlDSvJrLTalyeVZDWPSzrsnPvKJOgqBIzsn8D/claAA3YCJyNmyY/AM3XPklwKAvwHeCilzRDJs1yWcWBlE36LDL+YUn8TcLaC2Q7n6PVKD2zNCegjvKkHjABXDMx2mAE298rsKuB0RiCzwFqv/hDJqFgzTZ3TG7gdeAn4OyeI97w2jvBn9gNgOdACjga2OYHlQgbcAjwL7AcuBgQw4rXfGRg4QKur3WBEu2rnzcASYBfwPnA5ouNTQF+XjiPi1ZMSRygTkrQw0qRTcpL3vKQnJC0oca8+dM5d6yqvl2EKJ4d7gXXBhoENkt6StKFix36OebSiXgyjQfthYLeSRHtVs5L0tVceNtAMZbjQMPCypNcUOf1zmPbKyzLqHZHUch5+pZTrg5KOZWguz42M5MNhNmJhCKHf6+NCRr1WVlxFkL16X8gc4fYC9brs00B1pJVMOt8i6YEa+hzwyr9l1NtXZpSBQUn7Mi5P5T2XZv9VeAxI+qWrfEbpr6UnJU3ivXr95xi/Qj5n8kZ4U4RQDGu88mc19ZPG8TzDpReNArZ4ZbOj0AAOZX5QA5ck9Wddr8BZSUudc7T7cZImJN0T0rjClJ5wzt0XE2htkKRlQim7eXi6SY//gWQDMR4Y+FGSreEgcCywzRhN5rnSAFZQ7bfjLM4BQ037SwXYTJKWsWIG6OW3ejzAI9gl8UaKe5wDACtJ0jJlGQPMflfsCSQL2Q5gIsLoDxSsxnNr5coAWKfrRy3LdP2j6Fclf+l1jlq+KdL6FzAZP7BAhxvvAAAAAElFTkSuQmCC"
                />
                Đăng ký</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="container-lg px-5 bot-header">
      <div class="row d-flex align-items-center py-4">
        <router-link
          to="/"
          class="col-3 col-md-3 col-lg-3 d-flex align-items-center"
        >
          <!-- <img :src="header.logo" /> -->
          <div class="header-logo_text">
            <!-- <p>Thietbiyte</p>
                    <span>.com</span> -->
          </div>
        </router-link>
        <div class="col-9 col-md-9 col-lg-9 row my-4">
          <div
            v-for="(guide, index) in guides"
            :key="index"
            class="col-sm-4 col-md-4 col-lg-4"
          >
            <a class="guide-box d-flex align-items-center text-decoration-none">
              <span class="icon-circle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-truck"
                  v-html="guide.svgInner"
                ></svg>
              </span>
              <div class="text">
                <h3>{{ guide.title }}</h3>
                <p>{{ guide.desctiption }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div v-if="!isFetching" class="header-menu">
        <div v-for="(menu, index) in menus" :key="index" class="menu-item">
          <a :href="menu.href" class="menu-link">{{ menu.name }}</a>
          <div
            v-if="menu.dropdown.length > 0"
            :style="`background-image: url(${menu.image})`"
            class="dropdown row"
          >
            <div class="col-lg-9 h-100 d-flex flex-column flex-wrap">
              <div
                v-for="(dropdownItem, index) in menu.dropdown"
                :key="index"
                class="dropdown-item"
              >
                <a :href="dropdownItem.href" class="list-title">
                  {{ dropdownItem.title }}
                </a>
                <ul v-if="dropdownItem.subTitle.length > 0" class="ps-4 mb-2">
                  <li
                    v-for="(item, index) in dropdownItem.subTitle"
                    :key="index"
                  >
                    <!-- <a :href="subTit.href">{{ subTit.text }}</a> -->
                    <a :href="item.href">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="search-bar">
            <img
              class="search-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADbElEQVRoge2ZvU8UQRiHH8mJAYyKeBZAZUMjNnpiK/bSEGgsICFqSSg0ipZAYaeg/4AmGkPhRyyJrfEj0QZEE8OnIWgCJzlBDVjMgse7c8vtMLO7MfskU8ze5f29v5vbmXdmICUlJSUlueyxHK8COA20AieBJqAe2O99vgLMAxPAW2AMeA2sW87DOY3AEDADbIRsM8Ag0BB51gbUAXeBNcIblW0VGAEOR+ogBJ3AIrs3Ktsi0BGhjx3JoEa1VMJLwH2gB8gBWWCv17Lesx7gAbAcEGfY04qVKuAZ+gTHgS7vO2HidaMmMV3MpyHjWSWD3mwB6GV3o5EB+rxYMv6TXcY25p4mmVnglEWNHDCn0bljUaMsOjVJvEOtsbap92JLvXYHWlrq8M/Gs7gxu0kWmBSaC0CtQ80t5IxcwO7fuBTH8b/Tt12LNqIKgmLRXteiRfQL7Z+4/WcxJATHiXbGrME/iQ24EqvAXxt3uRIL4JLIYcrLzTpnhNAS8RQB1UBe5JIzDRb0S50V/eeodyhqCsAL8azVNFiQYTkTvzQVscCY6BuvEkGGm0T/vamIBaS2zM0K39n+3hxxIVImR0Uuiy5E5Ka+0oVImewTuayaBnIyvUeA8VlckOEV0T9gKmKBg6IvcyubIMNfRf+YqYgFpPasaaAgwx9F/4SpiAWk9mfTQEGG34i+LESi5Jzov3Ih0sL2mXGZeErLGuAHlkrLIHSbh24XQjtwWeQwjf0bky0GhdgE0W8P50UO110KNuA/AOhzKSi4KbTzwCHXoiNCtICjd0jQjP+I51YEutpDvDncH+J9EppT+AsQZ3QI8c1j2qwDrSzqKrVYax3/0uScYfymJ1Gni7Zoxj+yG8CoRY2yyaDuenRXLf2oGdWUGuAG+quWDeA36jIgcqpQdz26pOZQB27VIeJVo9ZZufQkynQGdddTKrE88BC4iKrWsqi9dCVqI9+C+mEe4a+git/ZUZTJRJgGddezwM4jE7ZN8W+C6iRhpmtR1x+yODFpedQ6K5eexJkGtSYPoEYnrNFp4BrBFVQiTYPacOSAq8Bj4APqMHAN+AV8Q51AjgJXvO+WuxFIrGmXtOM3/Qe4EGdSrklNk5r+fyk1kbXFmZRrdKanY80oAqTp+XjTiYY24AtqdM/HnEtKSkpKihF/AY392IKcUAttAAAAAElFTkSuQmCC"
            />
            <div class="seach-container">
              <form action="" class="d-flex w-100">
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm muốn tìm"
                  required
                />
                <button type="submit">Tìm</button>
              </form>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-cart">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACJUlEQVRoge3ZvYvUQBjH8c+qp1dZaCUoaCMIKnY2IoIgVhY2FnKdxTUiWPg/2Fhb2GqhoiiC/gO+td7p+QZ3HBy+gSe+oLKLa5GIq7vJzmSTLKf5QsjszDzZ35OZZ/JMQkNDQ0PDCLTS8wHszem3hIvoVq6oAFvRlojLO6bGJTCPVRF991WmYgTWYAEHcSj93ctmHE/LO2rUFUxrSPsWLKblr7hbrZyBtHEeN4sYt/DR8Pio+niXJXBYDHTxLMbjivie1RASxHMlCinKk6yGleLA46yGEAcyva+Rf3cEhi2jJM+Gz1hXmpx4NmB5UEPICHTwolQ5cSzJEE94KjHOaZQbg6EOjDOQM+c//9EIjNOB3BEIZVISzHXnQO8NWf1CR+Ab5gP7lskFOXlQLDfUe/dvYWKYqL83MHnM4UhaXsTzCNsY5nEb10M6xzjwtKf8AMcibCsjZk/cu5ztKVtIUUJyoV+sxStJXgLncEf5r1peSvbplXBW9cHbxv6qHJiQrA5VO3EyVFDMFOrlKA5jW0H7PBZwGp8quHZD6awe0X49duKLYo/8FrZjoyTvqZVpydu6bnqejrTfhPt+B+69tK4WduvPTjvYFXGNK/pXn8vlyszm1IA/76b1oSwPsM/c+2YRk0r08jaj/k3ENQb1fV1ASyEmMevPuzeb1ocypX8Eoj+iFF2FOriEH/iAqzgheX8UyiM8lMyCGZzBtYJ6GhoaVio/ASh2A2BD+9ThAAAAAElFTkSuQmCC"
            />
            <span class="cart-counter">({{ cartCounter }})</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import GetApiMixin from "../mixins/getAPI";
export default {
  name: "HeaderComponent",
  mixins: [GetApiMixin],
  data() {
    return {
      isFetching: true,
      menus: [],
      guides: [
        {
          id: 1,
          svgInner:
            "<rect x='1' y='3' width='15' height='13'></rect><polygon points='16 8 20 8 23 11 23 16 16 16 16 8'></polygon><circle cx='5.5' cy='18.5' r='2.5'></circle><circle cx='18.5' cy='18.5' r='2.5'></circle>",
          title: "Miễn phí giao hàng",
          desctiption: "Cho hóa đơn trên 600.000vnđ",
          style: "",
        },
        {
          id: 2,
          svgInner:
            "<rect x='1' y='3' width='15' height='13'></rect><polygon points='16 8 20 8 23 11 23 16 16 16 16 8'></polygon><circle cx='5.5' cy='18.5' r='2.5'></circle><circle cx='18.5' cy='18.5' r='2.5'></circle>",
          title: "Thanh toán đơn giản",
          desctiption: "Thanh toán online hoặc khi nhận hàng",
          style: "transform: rotate(-90deg);",
        },
        {
          id: 3,
          svgInner:
            "<rect x='1' y='3' width='15' height='13'></rect><polygon points='16 8 20 8 23 11 23 16 16 16 16 8'></polygon><circle cx='5.5' cy='18.5' r='2.5'></circle><circle cx='18.5' cy='18.5' r='2.5'></circle>",
          title: "Bảo hành nhanh chóng",
          desctiption: "Hoàn tiền 150% nếu hàng giả",
          style: "",
        },
      ],
      cartCounter: 0,
    };
  },
  methods: {
    getData: function (data) {
      this.menus = data;
      this.isFetching = false;
    },
  },
  async mounted() {
    await this.getAPI(this.getData, "menus");
  },
};
</script>

<style scoped>
header {
  --blue: #103dcf;
  --gray: #666;
  --lightgray: #dadada;
  margin-bottom: 0.8rem;
  font-size: 0.8rem;
  padding: 0;
}

.top-header {
  background-color: var(--vt-c-black-soft);
  color: #fff;
  padding: 0.2rem 0;
}

.icon {
  width: 1.2rem;
  height: auto;
  margin-right: 0.2rem;
}

.navbar li {
  color: var(--gray);
  filter: grayscale(100%);
  cursor: pointer;
  transition: all 0.25s ease;
}

.navbar li:hover,
.navbar .active {
  /* filter: none; */
  filter: invert(0) grayscale(0);
  color: inherit;
}

.navbar ul:nth-child(2) li {
  filter: invert(0.5) grayscale(100%);
}

.navbar ul li:hover,
.navbar ul li:has(.vr),
.navbar ul .active {
  /* filter: none; */
  filter: invert(0) grayscale(0);
  color: inherit;
}

.icon-circle {
  height: 2.8rem;
  width: 2.8rem;
  border: 0;
  border-radius: 50%;
  background: var(--lightgray);
  margin: 0 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #6d6d6d;
  transform: scaleX(-1);
}

.icon-circle::before {
  content: "";
  position: absolute;
  background: #fd2e2e;
  opacity: 0;
  inset: 0;
  border-radius: 50%;
  z-index: -1;
  scale: 0;
  transition: all 0.15s ease-in-out;
}

.guide-box {
  width: fit-content;
  cursor: pointer;
}

.guide-box .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.guide-box:hover .icon-circle::before {
  scale: 1;
  opacity: 0.8;
}

.guide-box .text h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gray);
  margin-bottom: 0.3rem;
  opacity: 9.5;
  text-transform: uppercase;
}

.guide-box .text p {
  font-weight: 400;
  color: var(--gray);
  opacity: 0.8;
  font-size: 0.8rem;
  margin: 0;
}

.header-menu {
  display: flex;
  margin-bottom: 0.9rem;
  padding: 0;
  line-height: 0;
  position: relative;
  border: 1px solid transparent;
  border-top-color: var(--lightgray);
  border-bottom-color: var(--lightgray);
  font-size: 0.85rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--vt-c-black-soft);
  --transition-duration: 0.2s;
}

.menu-item {
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.menu-link {
  display: inline-block;
  padding: 1.3rem 0.2rem;
  text-decoration: none;
  height: 100%;
  color: inherit;
  position: relative;
  transition: color var(--transition-duration) ease,
    opacity var(--transition-duration) ease;
}

.menu-item:has(.dropdown) .menu-link::before {
  content: "";
  position: absolute;
  background: #fff;
  bottom: 0;
  left: 50%;
  border: 1px solid transparent;
  transition: inherit;
  rotate: -45deg;
  translate: -50% 50%;
  height: 15px;
  width: 15px;
  z-index: -1;
  opacity: 0;
}

.menu-item:hover .menu-link {
  color: var(--blue);
}

.menu-item:hover .menu-link::before {
  z-index: 11;
  opacity: 1;
  border-color: var(--lightgray) var(--lightgray) transparent transparent;
}

.dropdown {
  font-size: 0.95rem;
  line-height: 1;
  background-color: #fff;
  opacity: 0.2;
  position: absolute;
  z-index: -1;
  height: 16rem;
  padding: 1rem;
  margin: 0;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid var(--lightgray);
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50%;
  transform: scale(0.8);
  transform-origin: top;
  transition: all var(--transition-duration) ease;
  visibility: hidden;
}

.dropdown-item {
  width: 33.333%;
  max-width: 33.333%;
  /* background: blue; */
  margin-bottom: 0.2rem;
}

.list-title {
  text-decoration: none;
  display: block;
  color: #eb4e24;
  position: relative;
  font-weight: 600;
  margin-left: 0.8rem;
  margin-bottom: 0.2rem;
  transition: all var(--transition-duration) ease;
}

.list-title::before {
  content: "+";
  margin-right: 5px;
}

.dropdown li {
  list-style-type: none;
  padding: 0.1rem 0 0.1rem 0.2rem;
}

.dropdown ul a {
  text-decoration: none;
  text-transform: none;
  color: rgb(29, 29, 29);
  font-weight: 400;
  font-size: 0.9em;
}

.dropdown ul a:hover {
  text-decoration: underline;
}

.menu-item:hover .dropdown,
.menu-item.active .dropdown {
  visibility: visible;
  transform: scale(1);
  opacity: 1;
  width: 100%;
  z-index: 10;
}

.search-bar {
  margin-left: 2rem;
  padding: 5px;
}

.search-bar .search-icon {
  height: 18px;
  width: 18px;
  border: 1px solid #000;
  object-fit: contain;
}

.seach-container {
  position: absolute;
  width: 20%;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transition: all var(--transition-duration) ease;
  z-index: -1;
}

.search-bar:hover .seach-container {
  width: 100%;
  opacity: 1;
  z-index: 10;
}

.seach-container input {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0.6rem 1rem;
  font-size: 0.8rem;
  outline: none;
  border: 1px solid transparent;
  border-right-color: #d3d3d3ad;
}

.seach-container button {
  padding: 0.6rem 1rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  width: 7%;
  background-color: inherit;
  transition: color 0.2s ease;
}

.seach-container button:hover {
  color: #eb4e24;
}

.menu-cart {
  border: 1px solid transparent;
  padding: 2px 7px;
  border-radius: 3px;
  color: #eb4e24;
  font-weight: 200;
  display: flex;
  align-items: center;
}

.menu-cart:hover {
  border-color: lightgray;
}

.menu-cart img {
  height: 20px;
  width: 20px;
}
</style>
