<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Başlık:</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="class">Sınıf:</label>
        <input
          type="text"
          class="form-control"
          id="class"
          required
          v-model="product.class"
          name="class"
        />
      </div>

      <div class="form-group">
        <label for="color">Renk:</label>
        <input
          type="text"
          class="form-control"
          id="color"
          required
          v-model="product.color"
          name="color"
        />
      </div>

      <div class="form-group">
        <label for="price">Fiyat:</label>
        <input
          type="text"
          class="form-control"
          id="price"
          required
          v-model="product.price"
          name="price"
        />
      </div>

      <div class="form-group">
        <label for="size">Ebat:</label>
        <input
          class="form-control"
          id="size"
          required
          v-model="product.size"
          name="size"
        />
      </div>

      <div class="form-group">
        <label for="url">URL:</label>
        <input
          class="form-control"
          id="url"
          required
          v-model="product.url"
          name="url"
        />
      </div>

      <button @click="saveChange" class="btn btn-success">Ekle</button>
    </div>

    <div v-else>
      <h4>Ekleme İşlemi Başarılı</h4>
      <button class="btn btn-info" @click="newOne">Geri</button>
    </div>
  </div>
</template>

<script>
import ProductMethods from "../ProductMethods";

export default {
  name: "add-product",
  data() {
    return {
      product: {
        title: "",
        description: "",
        status: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveChange() {
      const data = {
        title: this.product.title,
        size: this.product.size,
        price: this.product.price,
        class: this.product.class,
        color: this.product.color,
        url: this.product.url,
        status: false,
      };

      ProductMethods.create(data)
        .then(() => {
          this.submitted = true;
        })
        .catch((e) => {
          alert(e);
        });
    },

    newOne() {
      this.submitted = false;
      this.product = {
        status: false,
      };
    },
  },
};
</script>

<style>
label {
  font-size: 20px;
  height: 40px;
  width: 70px;
}
.submit-form {
  max-width: 450px;
  margin: auto;
}
.form-group {
  display: flex;
  justify-content: space-between;
  float: center;
}
.form-control {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
}
</style>
