<template>
  <div id="spec-tab">
    <table class="table table-striped border">
      <tbody>
        <tr>
          <td width="50%">Model</td>
          <td width="50%">{{ specification.model }}</td>
        </tr>
        <tr>
          <td width="50%">Dung tích</td>
          <td width="50%">{{ specification.capacity }}</td>
        </tr>
        <tr>
          <td width="50%">Thương hiệu</td>
          <td width="50%">{{ specification.brand }}</td>
        </tr>
        <tr>
          <td width="50%">Công nghệ</td>
          <td width="50%">{{ specification.technology }}</td>
        </tr>
        <tr>
          <td width="50%">Bảo hành</td>
          <td width="50%">{{ specification.guarantee }}</td>
        </tr>
        <tr>
          <td width="50%">Trạng thái</td>
          <td width="50%">{{ status }}</td>
        </tr>
        <tr>
          <td width="50%">Nước SX</td>
          <td width="50%">{{ country }}</td>
        </tr>
        <tr v-for="(item, index) in specification.inputs" :key="index">
          <td width="50%">Nguồn {{ item.type }}</td>
          <td width="50%">{{ item.specification }}</td>
        </tr>
        <tr>
          <td width="50%">Pin {{ specification.battery.type }}</td>
          <td width="50%">{{ specification.battery.specification }}</td>
        </tr>
        <tr>
          <td width="50%">Thời gian sử dụng</td>
          <td width="50%">{{ specification.endurance }}</td>
        </tr>
        <tr>
          <td width="50%">Hình thức cảnh báo</td>
          <td width="50%">{{ alert }}</td>
        </tr>
        <tr>
          <td width="50%">Trọng lượng</td>
          <td width="50%">{{ specification.weight }}</td>
        </tr>
        <tr>
          <td width="50%">Kích thước</td>
          <td width="50%">
            {{ specification.dimension.height }}
            {{ specification.dimension.unit }} x
            {{ specification.dimension.length }}
            {{ specification.dimension.unit }} x
            {{ specification.dimension.width }}
            {{ specification.dimension.unit }}
          </td>
        </tr>
        <tr>
          <td width="50%">Công suất</td>
          <td width="50%">{{ specification.power }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductSpecification",
  props: {
    specification: {
      type: Object,
    },
    quantity: {
      type: [Number, String],
    },
  },
  computed: {
    status() {
      return this.quantity > 0 ? "Còn hàng" : "Hết hàng";
    },
    alert() {
      return this.arrayToString(this.specification.alerts, true);
    },
    country() {
      return this.arrayToString(this.specification.countries, false);
    },
  },
  methods: {
    arrayToString: (arr, format) => {
      var arrString = format ? arr.toString().toLowerCase() : arr.toString();
      var splits = arrString.split(",");
      arrString = splits.join(", ");
      var firstChar = arrString.charAt(0);
      return arrString.replace(firstChar, firstChar.toUpperCase());
    },
  },
};
</script>

<style scoped></style>
