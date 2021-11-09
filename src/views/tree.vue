<template>
  <el-card class="box-shadov" style="display: flex; justify-content: center; align-items: center; padding-top: 200px" >
    <el-tree :data="options" clearable :props="{label: 'name', children: 'children'}" >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label + ' - ' + data.code }}</span>
        </span>
      </template>
    </el-tree>
  </el-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'tree',
  data() {
    return {
      options: []
    }
  },
  mounted() {
    axios.get(process.env.VUE_APP_BASE_API + '/resources/nskz-tree').then((res) => {
      this.options = res.data.data
    })
  }
}
</script>

<style scoped>

</style>
