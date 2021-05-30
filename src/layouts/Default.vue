<template>
  <div>
    <template>
      <Navbar />
      <div class="navbar__placeholder"></div>
    </template>
    <section class="hero is-medium is-primary" v-if="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            {{ pageTitle }}
          </h1>
          <h2 v-if="pageSubtitle" class="subtitle">
            {{ pageSubtitle }}
          </h2>
        </div>
      </div>
    </section>
    <main class="main">
      <slot />
    </main>
    <footer class="footer footer__custom">
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
  props: { pageTitle: '', pageSubtitle: '', hero: false },
  components: { Navbar },
};
</script>

<style lang="scss">
@import '@/assets/scss/overrides.scss';

* {
  transition: background-color 0.1s ease, color 0.1s ease;
}

body {
  font-family: Montserrat, 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: var(--background-color);
}

// tweak to solve bug with class .has-navbar-fixed-top not always being applied
body.has-navbar-fixed-top .navbar__placeholder {
  display: none;
}

p {
  font-family: Newsreader, 'Times New Roman', serif;
}

a {
  font-weight: 700;
}

main {
  min-height: calc(100vh - 52px);
}

.navbar__placeholder {
  height: 52px;
}

.footer__custom {
  box-shadow: inset 0 10px 20px -10px $grey-darker;
  background: hsl(137, 31%, 49%);
  background: linear-gradient(
    135deg,
    hsl(137, 31%, 49%) 0%,
    hsl(171, 100%, 41%) 50%,
    hsl(217, 71%, 53%) 100%
  );

  a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}

:root[data-theme='dark'] .footer__custom {
  box-shadow: inset 0 10px 20px -10px $black;
  background: hsl(137, 31%, 29%);
  background: linear-gradient(
    135deg,
    hsl(137, 31%, 29%) 0%,
    hsl(171, 100%, 21%) 50%,
    hsl(217, 71%, 33%) 100%
  );
}
</style>
