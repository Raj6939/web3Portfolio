<template>
  <div id="app">
    <div class="d-flex">
    <certificate msg="Welcome to Your Vue.js App"/>
    </div>    
  </div>
</template>

<script>
import certificate from './components/certificate.vue'

export default {
  name: 'App',
  components: {
    certificate
  },
  metaInfo() {
    return {
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'master--og-check.netlify.app' },
        { property: 'twitter:url', content: 'https://master--og-check.netlify.app/' },
        { name: 'twitter:title', content: 'Og-test site' },
        { name: 'twitter:description', content: 'Here is the tweet descp' },
        { name: 'twitter:image', content: 'http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg' }
      ]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
