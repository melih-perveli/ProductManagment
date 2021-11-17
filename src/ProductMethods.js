import firebase from "./firebase";

const db = firebase.collection("/productlist");

class ProductMethods {
  getAll() {
    return db;
  }

  create(product) {
    return db.add(product);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new ProductMethods();
