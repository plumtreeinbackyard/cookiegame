<template>
  <div class="bg-dark">
    <div class="container">
      <div class="row justify-content-between">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="width: 100%">
          <router-link to="/" class="navbar-brand">Cookie Game
            <br />
            <span style="color:#808080;font-size:60%;">Coded in Vue 2 and Express.js</span>
          </router-link>
          
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>
