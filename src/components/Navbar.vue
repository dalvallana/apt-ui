<template>
  <b-navbar fixed-top shadow wrapper-class="container">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/images/branding.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item to="/about" tag="router-link"> About </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#"> About </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <b-field>
          <b-switch v-model="lightMode" passive-type="is-warning" type="is-dark">
            {{ lightMode ? 'Dark Mode' : 'Light Mode' }}
          </b-switch>
        </b-field>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data: () => ({
    lightMode: true,
  }),
  watch: {
    lightMode() {
      document.documentElement.dataset.theme = this.lightMode ? '' : 'dark';
    },
  },
};
</script>
