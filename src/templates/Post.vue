<template>
  <Layout :pageTitle="$page.post.title">
    <section class="section is-size-5">
      <div class="post__container">
        <div class="content">
          <div v-html="$page.post.content"></div>
        </div>
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
