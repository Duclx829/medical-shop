<template>
  <footer>
    <div class="container-lg px-5">
      <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-3 contact">
          <h3>Liên hệ</h3>
          <ul>
            <li>
              <div class="home-icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACmUlEQVRoge2XwUtUURSHPx0VF1pSCQUtgggjIzKilVCQTiRt+huKVlHgJmoRrQsXQguDoIVbN9GmooWSlLgIQZAokqJwEVIYLhxtphbvXN+Z6xvfm+e7M2n3g7OYe8793d/Re97MA4/H49mJtAIPgO8S92VtW3AAmAL+WPEOOFhHX4k4AXxmo3kT34DTdXMXw2VgmdDsGnBDYk2tL0ttFIeAPqAXaHHsd50G4DZQJDT5E+hXNf2yZvJF4I7sNZyjvNGXro1DMJijlF+TD0BXRG2X5HTtKOFw37VyRZfGAfYBE9ahr4FOyeeAYeAR0Cxre4BX1p63wH7gHhtnxhlRwzqijHYQXAF9HTok1yy1eu8XYKxWDVwEltQhv4FbKn8YmIsw8xE4ququAasRdU4buEn5sP4CLql8L8EXVyVDP4Dzqj5P+XA7a6AFeGKJfwKOqZqrxP9FzeP1utp3BHjvsoFOYNISHgf2St4Ma5xxO4ZlL6I1HlFjHgipOQ7MW6KPCb9k2oFnKcybeEE43E3AQyv/FehJaz5PcMf1sA6qfKVhrTbmRMswKGfpOcunaWBBiSwBAyp3FljMwLyJRdE0DFD+pFtI08Ab2TwPdKv1K0AhQ/MmCqJt6Ca8vpNpGmgn+Ne1yeccMOTAuB1DhMO9C7igPKSmDXhaA/MmngO7t2paM1tD8yZmkxhriC8BEawHsf4aa+HCJU2OdFeBaWBFPrcCZ6jhW5ZNtfe3L0Ijn0InFlczkANK1loj1b9lxfpz1UAl3ax01tn2Q+wbqDf/TQMFpy62cGbSBqarONh+fCbN2UxVURtLD8nfAWY20ZlJqFEATmbZgGliguDnQdShJTG42TvsKakpVdBYIXi5z9y8x+PxeDz/JH8BtNW3qoDJHd0AAAAASUVORK5CYII="
                />
              </div>
              <span>{{ address }}</span>
            </li>
            <li>
              <div class="phone-icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACRElEQVRoge3ZO2sUURiH8d8aYwTRRjFeMCBWGksRSxHtlDSioCBC1I8g+AnETq3Ub2ARjNcQSaGBIMRCI3hDQRGsjAlKBFFhLY5b5DI7cybunC32gbdYmFn+D+dwLu/QoUNSBjCJ73iKfWnjxNONa6gvqFlsTZgrirV4YLFEo+6ni1acLXgpW6JRp1IFLEIv3sqXqGMGm9PEbM4qTCgm0ajbSZLmcEGcRKNOpgjbjI/KiUxjU4K8mcwpJ1LHUIK8mbxTXqSO49VHXpohyxN5U33kwIoFv0eX+X99y3z/v7ERf5QfkSfVR85mTHmRttrpB5STeG7xVE1KDVPiRQ6lCJvHMXESd9LEzKeGccVFBtPELEY/fikmMoMdaWIW45Lio/IMa9LEzKdHCFhUZuzfO23JLvxQXOYWViZJWoCz4laxG8KC0ZYs1U1pVpfTxMynG4/EyVzRpiPTi/fip1lXirB59OGTOJlhrE4RNo/d+CpOZtTS+0wXTgut2N94LRyRKmOv0AuOkZky/wRwQPY+dVdoFFbCQfxsEjzrODOIewWencaJqmQGSsjE1rCKOpr7xU+z2JrFuSpk9uBLi2XqGMG2Vsv043MFMrPCYtNStovfNMvUZKtFCG2lmBtmmfpWhQjhE8X1FopMVCXS4Iy4+0zROlylRIOd4m6aeXW12vjz6cFFxRsaWTWiTW6g/XisnMQLrKs+cjY1HBU33V4J96G2pIYjeCgc4bMkxrEhUcZo1gun4pvCB6M5fMB54ZrdoUMK/gIkOoi24oe75gAAAABJRU5ErkJggg=="
                />
              </div>
              <span>Hotline: {{ footer.phone }}</span>
            </li>
            <li>
              <div class="mail-icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACAklEQVRoge3XP2hTURTH8U+0ghYU0Q4drKJY3QQHnRQXBx0cxM1BcNDVTQdB1EVXF8FFwU2RLg7iUAQHFxGddNHiUhBataEK/kvjkBdI0nfb95KXvIj3CwfyXu455/dL3rncRyQSiUQiy5nEFBZQLzmqeITdWcXvwvwQCO+MOWzvFLsmxcBJbM3qdoCM4VCWhTswo/xfvDOeY1NWtxtwFT+HQPgCLmBtVvGt7MOLEsU/xkQ3wlup4IzBDvYsTvUqvJNx3O+z8BruyPGsp3EZVzAa+P4YPvRB/BscCPQcxz3czmKglhScwfHAmlHcwK8ChH/HRYyk9KngHL60rF+VPIO0B9M9iH+W1EhjMlA7t4G6lbey5pDP5RD+GecD/dfhEn4Ecrsy0IxXws/pFo0BXFohf0ljIxgL1DiMt6to6MlAHb9xCxsD+UfwLiXvPY4GcjYnNWspeYUbaMZHnAjUWI/r+JrEteReGqfxKUffwgy0DvmyU2IGduJJF/0KN1DHN43By3JeGdHYEBa77NUXA814jYMr1N6Plz326KuBuvTjwChu4k8B9duoBAwUwSzuJp/PYltBdSvBi4SiDPSLNs1pr5T/FNFA2UQDZRMNlE2agcWBq8hOtfNGmoHpAQjplqdZFu3V/hI9LDEvx3FkAg81/rKyhVfxII/4SCQSifw//AVoo2JvmBpUmgAAAABJRU5ErkJggg=="
                />
              </div>
              <span>Email: {{ footer.mail }}</span>
            </li>
            <li>
              <div class="schedule-icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACtElEQVRoge2aQWsTQRTHfxGPFkGPNraGYnrzqnixR0Fbb7HV72DVL2VsUQStFxWs4E3BQ4sn60GlCi0YEIwtxsNsYH2Z7L7dzG4m2/nBIyTz5vH+2cnMvMlAIBAIBAIB36kD60AH6HlmHeAx0HQpds8DYWm2H+U6MuseiNHawzQxNYXgDjCl8POBDnAyyUEjuJejT5lkyu9YgYl4SRBcdYLgqhMEV53jOfrIdW+iOHJPOAiuOkFw1SlC8DNgGlOMPx9D+8hkLcKnY33rY2hP5MgNaQ1Zn/AG/w+5stsTyXPi4TvhxCNOEFwBWox40CgnhafAGczEsVFAuwt7A8y4Elz0OurK9oAFKWZShnQXeAAsA/PAicjmo8/awB/R5xRmNA2ITqPsdVRaG5hV5HkO81eL7L+v7D9UcFl2CNyx5LME/AC+A4uW9tWobzzWWzJMZOMSbBML8DXm82WIz11LvGWfBbcz5DOMNeG37avgLtBwIHgW+C18L+aZpYuuZx8Bn3LkJfkMPBGfXdd0lN9o0evwzYz5JLEifF/5uA6/dxjrnXg/p+kkv9Gi1+G02wbSv5XgOyV8f+URXLSlCT4Q/gcJoqXgjo+Cz6fk0xoi2rYJaQq/jxrBZd/N0mwQbKJ3LH63hM8LzaT1UuHjkiWFTxu4jdlC9rFpkU99U5NAE7MBL+sJdzGFgIZFzJq9A1wVbY0oVjz2BWVc6phK5GdJolMvmCmQF+q2HMR0RotB0asjxLtviaf5qZRGDXMsE0/wEFP1ZOUeg+Wh6rdbNjPYL7GukVxM9Glgvxe6C5wtIF8nLGB2Q7aJrI3ZG8sjnpWoTU5QPUy1dLlUBTm4gptVYZcJENtnFnMsk1fsJh4P42HUMLuubfRCt4AbaUEngUvAteh1DjgN/MWcaX0DXmOK/Q9pgf4BmjMrHB4zOp0AAAAASUVORK5CYII="
                />
              </div>
              <span>Thời gian làm việc: {{ footer.time }}</span>
            </li>
          </ul>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 policy">
          <h3>Chính sách</h3>
          <ul>
            <li v-for="(policy, index) in footer.policies" :key="index">
              <a :href="policy.href">{{ policy.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3">
          <h3>Hệ thống cửa hàng</h3>
          <ul>
            <li
              class="list-style-dot"
              v-for="(location, index) in footer.locations"
              :key="index"
            >
              <span>{{ location.address }}</span>
            </li>
          </ul>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3">
          <div class="notify-register">
            <h3>Đăng ký nhận tin</h3>
            <form action="" method="post">
              <input type="text" placeholder="Nhập email của bạn" required />
              <button type="submit">Gửi</button>
            </form>
          </div>
          <div class="social">
            <h3>Liên kết</h3>
            <ul>
              <li>
                <a href="#">
                  <div class="facebook-icon"></div>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="youtube-icon"><span></span></div>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="copyright">2022. Le Xuan Duc</div>
    </div>
    <div id="totop" class="" @click="toTop()">
      <div class="arrow-up"></div>
    </div>
  </footer>
</template>
<script>
import $ from "jquery";
export default {
  name: "FooterComponent",
  data() {
    return {
      address:
        "154 Đường Đình Thôn, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội",
      footer: {
        phone: "0327456789",
        mail: "info@gmail.com",
        time: "Thứ 2 - CN: 08:00 - 20:00",
        social: [
          {
            id: 0,
            icon: "facebook-icon",
            href: "http://facebook.com/",
          },
          {
            id: 1,
            icon: "youtube-icon",
            href: "http://youtube.com/",
          },
        ],
        copyright: "",
        locations: [
          {
            id: 0,
            address: "183 Hà Kế Tấn, P.Phương Liệt, Q.Thanh Xuân, Hà Nội",
          },
          {
            id: 1,
            address: "26C Phùng Hưng, Q.Hoàn Kiếm, Hà Nội",
          },
          {
            id: 2,
            address: "389 Nguyễn Khang, P.Yên Hòa, Q.Cầu Giấy, Hà Nội",
          },
          {
            id: 3,
            address: "30 Nguyễn Thái Bình, P.4, Q.Tân Bình, TP.HCM",
          },
          {
            id: 4,
            address: "86D Hùng Vương, P.9, Q.5, TP.HCM",
          },
        ],
        policies: [
          {
            id: 0,
            title: "Chính sách vận chuyển và giao nhận",
            href: "",
          },
          {
            id: 1,
            title: "Điều khoản sử dụng dịch vụ",
            href: "",
          },
          {
            id: 2,
            title: "Chính sách bảo mật",
            href: "",
          },
          {
            id: 3,
            title: "Chính sách kiểm hàng & đổi trả hàng",
            href: "",
          },
        ],
      },
    };
  },
  methods: {
    toTop: function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
    },
  },
  mounted() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $("#totop").addClass("active");
      } else {
        $("#totop").removeClass("active");
      }
    });
  },
};
</script>
<style scoped>
footer {
  background-color: #f8f8f6;
  margin-top: 1rem;
}

a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  transition: color 0.2s ease;
}

h3 {
  font-size: 1rem;
  margin: 30px 0 8px 0;
  display: flex;
  text-transform: uppercase;
}
ul {
  padding: 0;
}

li {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  width: fit-content;
  padding-top: 5px;
  padding-bottom: 5px;
}

.home-icon,
.phone-icon,
.mail-icon,
.schedule-icon {
  background: #fff;
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid rgb(228, 228, 228);
  margin-right: 5px;
  transition: border 0.5s ease;
}
.contact img {
  width: 18px;
  height: 18px;
  object-fit: cover;
  object-position: center;
  filter: invert(0.4);
}
.contact li:hover > * {
  border-color: #fd2e2e;
}

.policy li:hover a {
  color: #fd2e2e;
}

.notify-register form {
  display: flex;
  gap: 5px;
}

.notify-register input,
.notify-register button {
  border: 1px solid rgb(197, 197, 197);
  border-radius: 3px;
  padding: 3px 10px;
  outline: none;
}

.notify-register input {
  width: 80%;
  caret-color: rgb(121, 121, 121);
  background-color: inherit;
}

.notify-register button {
  width: 20%;
  cursor: pointer;
}

.social .facebook-icon,
.social .youtube-icon {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  background-color: #838383;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s linear;
}
.social .facebook-icon::before {
  content: "f";
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  font-weight: 600;
  transition: all 0.3s linear;
}
.social li:hover .facebook-icon {
  border-radius: 50%;
  background-color: #3b5998;
}

.social li:hover .facebook-icon::before {
  transform: rotate(360deg);
}

.social .youtube-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social li:hover .youtube-icon {
  border-radius: 50%;
  background-color: #ff0000;
}

.social .youtube-icon span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  transition: all 0.3s linear;
  text-decoration: none;
}

.social li:hover .youtube-icon span {
  transform: rotate(360deg);
}

.social .youtube-icon span::before {
  content: "You";
  font-size: 0.4em;
  text-decoration: none;
}

.social li:hover .youtube-icon span::after {
  color: #ff0000;
}
.social .youtube-icon span::after {
  content: "Tube";
  font-size: 0.4em;
  background-color: #fff;
  color: #838383;
  border-radius: 3px;
  padding: 0.2em;
}
.footer-bottom {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin: 30px 0 0 0;
  font-size: 1rem;
  background: #fff;
}
.copyright {
  width: fit-content;
  color: rgb(124, 124, 124);
  position: relative;
  padding-left: 15px;
  font-size: 0.8rem;
}
.copyright::before {
  content: "©";
  position: absolute;
  width: 15px;
  left: 0;
}
#totop {
  position: fixed;
  right: 2rem;
  bottom: 2.5rem;
  height: 35px;
  width: 35px;
  background: rgba(233, 146, 33, 0.568);
  border-radius: 5px;
  transform: translateX(calc(100% + 2rem));
  cursor: pointer;
  transition: background 0.2s ease;
}

#totop:hover {
  background: rgb(233, 146, 33);
}

#totop:active .arrow-up::before {
  translate: 25% 200%;
}

#totop:active .arrow-up::after {
  translate: -25% 200%;
}

.active {
  animation: slide-to-left 0.1s linear forwards;
}
@keyframes slide-to-left {
  to {
    transform: translateX(0);
  }
}
.arrow-up {
  position: relative;
}
.arrow-up::before,
.arrow-up::after {
  content: "";
  position: absolute;
  top: 0;
  border: 0;
  width: 50%;
  height: 5px;
  background: rgb(255, 255, 255);
  border-radius: 1rem;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  transition: translate 0.2s linear;
}
.arrow-up::before {
  left: 0;
  rotate: -90deg;
  translate: 25% 300%;
}
.arrow-up::after {
  right: 0;
  rotate: 90deg;
  translate: -25% 300%;
}
.active .arrow-up::before {
  animation-name: cw-rotate;
}
.active .arrow-up::after {
  animation-name: ccw-rotate;
}
@keyframes cw-rotate {
  to {
    rotate: -45deg;
  }
}
@keyframes ccw-rotate {
  to {
    rotate: 45deg;
  }
}
</style>
