<template>
  <div class="app">
    <intro />
    <vacancies />
    <tips />
    <employers />
  </div>
</template>

<script>
import Employers from './employers'
import Intro from './intro'
import Tips from './tips'
import Vacancies from './vacancies'
export default {
  name: 'Index',
  components: { Employers, Intro, Tips, Vacancies }
}
</script>
