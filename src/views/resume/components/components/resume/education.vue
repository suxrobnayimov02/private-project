<template>
  <div>
    <template v-if="education && education.length">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in education"
            :key="'education-' + index"
            type="primary"
            :timestamp="item.education_started_year + ' - ' + item.education_finished_year"
            placement="top"
          >
            <el-card>
              <b class="text-primary">{{ item.otm_diploma }} ({{ item.degree }})</b> <br>
              <b>{{ item.faculty }}</b><br>
              <b>{{ $t('Диплом') }}</b>:  {{ item.diploma }},
              {{ dateFromLineToDot(item.diploma_given_date) }} й.
              <br>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </template>
    <template v-else>
      <p class="text-center"> {{ $t('Нет информации') }} </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'EducationTable',
  props: {
    education: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    dateFromLineToDot(date) {
      return date ? date.split('-').reverse().join('.') : ''
    },
    create() {
      this.$router.push({ name: 'EducationCreate' })
    }

  }
}
</script>
