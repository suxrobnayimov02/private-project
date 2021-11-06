<template>
  <el-select v-model="statusId" :placeholder="$t('Сортировать по')" @change="fromChildFilterByAppealsStatus">
    <el-option v-for="(item, key) in statuses" :key="key" :label="(locale == 'ru')?item.name_ru:(locale == 'uzln')?item.name_uz:item.name_cyrl" :value="item.id" />
  </el-select>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AppealsStatuses',
  data() {
    return {
      statusId: null,
      statuses: []
    }
  },
  computed: {
    ...mapGetters({
      locale: 'app/LOCALE'
    })
  },
  mounted() {
    this.getAppealsStatuses({ type: 'resume_status' }).then(res => {
      this.statuses = res.data
    }).catch(err => {
      console.log(err)
    })    
  },
  methods: {
    ...mapActions({
      getAppealsStatuses: 'resume/getAppealsStatuses'
    }),
    fromChildFilterByAppealsStatus() {
      this.$emit('getAppealsSelectOption', { key: 'status_id', value: this.statusId })
    }
  }
}
</script>
