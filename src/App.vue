<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #e3f2fd;"
    >
      <div class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link to="/productlist" class="nav-link">Düzenle</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Ekle</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
