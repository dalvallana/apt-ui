<template>
  <Layout>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            {{ $page.post.title }}
          </h1>
          <h2 v-if="$page.post.excerpt" class="subtitle">
            {{ $page.post.excerpt }}
          </h2>
        </div>
      </div>
    </section>
    <section class="section post__container">
      <div class="content is-size-5">
        <div v-html="$page.post.content"></div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query blog($path: String) {
  post: post(path: $path) {
    id
    title
    excerpt
    featuredImage
    content
    tags {
      id
    }
    author {
      id
    }
  }
}
</page-query>

<style lang="scss" scoped>
.post {
  &__container {
    max-width: 675px;
    margin: auto;

    &::v-deep .post__anchor {
      display: none;
      margin-left: -0.8em;
      padding-right: 0.1em;
      width: 0.8em;
      height: 0.8em;
    }

    &::v-deep h1,
    &::v-deep h2,
    &::v-deep h3,
    &::v-deep h4,
    &::v-deep h5,
    &::v-deep h6 {
      &:hover {
        .post__anchor {
          display: inline;
        }
      }
    }
  }
}
</style>
