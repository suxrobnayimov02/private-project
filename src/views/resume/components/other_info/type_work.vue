<template>
  <el-row>
    <el-col :span="4"><b class="text-muted">{{ $t('График работы') }}:</b></el-col>
    
  </el-row>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
  props: {
    work_schedule: {
      type: Array,
      default() {
        return []
      }
    },
    locale: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      types: [],
      work_schedule1: []
    }
  },
  mounted() {
    if (this.workChedule && this.workChedule.length) {
      this.workChedule1 = this.work_schedule
    }
    this.getAppealsStatuses({ type: 'work_schedule' }).then(res => {
      this.types = res.data
    })
  },
  methods: {
    ...mapActions({
      getAppealsStatuses: 'resume/getAppealsStatuses'
    })
    // handleCheckedChange(value) {
    //   this.work_schedule = value
    //   console.log(value)
    // }
  }
}
</script>

<style>

</style>
