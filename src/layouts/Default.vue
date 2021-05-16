<template>
  <div>
    <Navbar />
    <section class="hero is-medium is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            {{ pageTitle }}
          </h1>
          <h2 v-if="pageSubtitle" class="subtitle">
            {{ pageSubtitle }}
          </h2>
        </div>
      </div>
    </section>
    <main>
      <slot />
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Created by <a href="chadcollins.net">Chad Collins</a>. Powered by
          <a href="https://gridsome.org/">Gridsome</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar';

export default {
  props: { pageTitle: '', pageSubtitle: '', color: '' },
  components: { Navbar },
};
</script>

<style lang="scss">
@import '@/assets/scss/overrides.scss';

body {
  font-family: Newsreader, 'Times New Roman', serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Montserrat, 'Helvetica Neue', sans-serif;
}

a {
  font-weight: 700;
}
</style>
