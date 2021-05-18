<template>
  <Layout>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            {{ $page.post.title }}
          </h1>
          <h2 v-if="excerpt" class="subtitle">
            {{ excerpt }}
          </h2>
        </div>
      </div>
    </section>
    <section class="post__container mb-6">
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
  }
}
</style>
