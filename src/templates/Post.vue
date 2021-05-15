<template>
  <Layout :pageTitle="$page.post.title">
    <div class="box">
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ $route.params.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
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
