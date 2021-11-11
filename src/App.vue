<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    setTimeout(() => {
      const recaptchaScript2 = document.createElement('script')
      recaptchaScript2.setAttribute('src', '/js/owl.carousel.min.js')
      document.head.appendChild(recaptchaScript2)
      const recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/js/script.js')
      document.head.appendChild(recaptchaScript)
      const recaptchaScript3 = document.createElement('script')
      recaptchaScript2.setAttribute('src', '/js/jquerySwipeHandler.js')
      document.head.appendChild(recaptchaScript3)
    }, 500)
  }
}
</script>
