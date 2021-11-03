<template>
  <div>
    <template v-if="workbook && workbook.length">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in workbook"
            :key="'workbook-' + index"
            type="success"
            :timestamp="(item.date_stop != '9999-01-01') ? dateFromLineToDot(item.date_start) + ' - ' + dateFromLineToDot(item.date_stop) : dateFromLineToDot(item.date_start) + '-' + $t('ҳ.в.')"
            placement="top"
          >
            <el-card>
              <b class="text-primary">{{ item.position_name }}</b> <br>
              <b>{{ item.company_profile_name }}</b><br><br>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <!-- <el-row
        v-for="(item, index) in workbook"
        :key="'workbook-' + index"
      >
        <el-col :span="5">
          <p>
            {{ (item.date_stop != '9999-01-01') ? dateFromLineToDot(item.date_start) + '-' + dateFromLineToDot(item.date_stop) : dateFromLineToDot(item.date_start) + '-' + $t('ҳ.в.') }}
          </p>
        </el-col>
        <el-col :span="19">
          <b class="text-primary">{{ item.position_name }}</b> <br>
          <b>{{ item.company_profile_name }}</b><br><br>
        </el-col>
      </el-row> -->
    </template>
    <template v-else>
      <p class="text-center">{{ $t('Нет информации') }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'EducationTable',
  props: {
    workbook: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    dateFromLineToDot(date) {
      return date ? date.split('-').reverse().join('.') : ''
    }
  }
}
</script>

<style>

</style>
