<template>
  <div v-if="upProduct" class="edit-form card">
    <div class="card-body">
      <img
        style="height: 600px; width: 750px;"
        class="card-img-top"
        :src="upProduct.url"
        alt="IMG(600*750)"
      />
      <form>
        <div class="form-group">
          <label for="title">Başlık:</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="upProduct.title"
            name="title"
          />
        </div>

        <div class="form-group">
          <label for="color">Renk:</label>
          <input
            type="text"
            class="form-control"
            id="color"
            v-model="upProduct.color"
            name="color"
          />
        </div>

        <div class="form-group">
          <label for="price">Fiyat:</label>
          <input
            type="text"
            class="form-control"
            id="price"
            v-model="upProduct.price"
            name="price"
          />
        </div>

        <div class="form-group">
          <label for="size">Ebat:</label>
          <input
            class="form-control"
            id="size"
            v-model="upProduct.size"
            name="size"
          />
        </div>

        <div class="form-group">
          <label for="class">Sınıf:</label>
          <input
            class="form-control"
            id="size"
            v-model="upProduct.class"
            name="class"
          />
        </div>
      </form>
      <div class="modal-footer">
        <button
          class="btn btn-lg btn-outline-success fs-1 mr-2"
          v-if="upProduct.status"
          @click="updateStatus(false)"
        >
          Satışa Açıldı
        </button>
        <button
          v-else
          class="btn btn-lg btn-outline-danger mr-2"
          @click="updateStatus(true)"
        >
          Satışa Kapandı
        </button>

        <button
          class="btn btn-lg btn-outline-danger mr-2"
          @click="deleteProduct"
        >
          Sil
        </button>

        <button
          type="submit"
          class="btn btn-lg btn-outline-info mr-2"
          @click="updateProduct"
        >
          Kaydet
        </button>
      </div>
    </div>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Product...</p>
  </div>
</template>

<script>
import ProductMethods from "../ProductMethods";

export default {
  name: "UpdateProducts",
  props: ["product"],
  data() {
    return {
      upProduct: null,
      message: "",
    };
  },
  watch: {
    product: function(product) {
      this.upProduct = { ...product };
      this.message = "";
    },
  },
  methods: {
    updateStatus(status) {
      ProductMethods.update(this.upProduct.id, {
        status: status,
      })
        .then(() => {
          this.upProduct.status = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateProduct() {
      const data = {
        title: this.upProduct.title,
        size: this.upProduct.size,
        price: this.upProduct.price,
        class: this.upProduct.class,
        color: this.upProduct.color,
        url: this.upProduct.url,
      };

      ProductMethods.update(this.upProduct.id, data)
        .then(() => {
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteProduct() {
      ProductMethods.delete(this.upProduct.id)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.upProduct = { ...this.product };
  },
};
</script>

<style>
.form-control {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
}
</style>
