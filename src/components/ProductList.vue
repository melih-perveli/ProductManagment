<template>
  <div class="list row">
    <div class="col-md-12">
      <h4>Ürün Listesi</h4>
      <table
        id="datatable"
        class="table table-striped table-bordered"
        style="width:100%"
      >
        <thead>
          <tr>
            <th>Sınıf</th>
            <th>Başlık</th>
            <th>Ebat</th>
            <th>Satışa Hazır</th>
            <th>Düzenle</th>
          </tr>
        </thead>
        <tbody
          :class="{ active: index == currentIndex }"
          v-for="(product, index) in products"
          :key="index"
        >
          <tr>
            <td>
              {{ product.class }}
            </td>
            <td>
              {{ product.title }}
            </td>
            <td>
              {{ product.size }}
            </td>
            <td>
              <p
                v-html="
                  product.status == true ? 'Satışa Açık' : 'Satışa Kapalı'
                "
                :class="product.status == true ? 'text-success' : 'text-danger'"
              ></p>
            </td>
            <td
              style="cursor:pointer;"
              class="badge badge-info"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              @click="setActive(product, index)"
            >
              Düzenle
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="ture"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <update-product :product="upProduct" @refreshList="refreshList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductMethods from "../ProductMethods";
import UpdateProduct from "./UpdateProduct.vue";

export default {
  name: "product-list",
  components: { UpdateProduct },
  data() {
    return {
      products: [],
      upProduct: null,
      upIndexIndex: -1,
      hookdata: null,
    };
  },
  methods: {
    onDataChange(items) {
      let _products = [];

      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _products.push({
          id: id,
          title: data.title,
          price: data.price,
          class: data.class,
          color: data.color,
          url: data.url,
          size: data.size,
          status: data.status,
        });
      });

      this.products = _products;
    },

    refreshList() {
      this.upProduct = null;
      this.upIndex = -1;
    },

    setActive(product, index) {
      this.upProduct = product;
      this.upIndex = index;
    },
  },
  mounted() {
    this.hookdata = ProductMethods.getAll()
      .orderBy("title", "asc")
      .onSnapshot(this.onDataChange);
  },
  beforeUnmount() {
    this.hookdata();
  },
};
</script>

<style></style>
