<template>
  <div>
    <Header v-if="$route.name === 'Home'" />
    <header-main v-else />
    <div>
      <router-view />
    </div>
    <my-footer />
  </div>
</template>
<script>
import Header from './components/header-home'
import HeaderMain from './components/header-main'
import MyFooter from './components/footer'
export default {
  name: 'Main',
  components: { HeaderMain, Header, MyFooter }
}
</script>
