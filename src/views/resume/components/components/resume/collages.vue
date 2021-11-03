<template>
  <div>
    <template v-if="education && education.length">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in education"
            :key="'education-' + index"
            type="primary"
            :timestamp="item.begin_year + ' - ' + (item.status&&item.status==1?'Н.в.': item.end_year?item.end_year:'...')"
            placement="top"
          >
            <el-card>
              <b class="text-primary">{{ item.name }} ({{ item.degree==2? $t('Среднее специальное'):$t('Высшее') }})</b>
              <el-button class="float-right ml-2" size="mini" type="primary" icon="el-icon-edit" circle plain />
              <el-button class="float-right" size="mini" type="danger" icon="el-icon-delete" circle plain />
              <br>
              <b>{{ item.specialization }}</b><br>
              <i class="text-muted">{{ item.is_work_specialty && item.is_work_specialty == 1 ? $t('Согласен работать по специальности'): '' }}</i>
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
      default () {
        return []
      }
    }
  },
  methods: {
    dateFromLineToDot (date) {
      return date ? date.split('-').reverse().join('.') : ''
    },
    create () {
      this.$router.push({ name: 'EducationCreate' })
    }

  }
}
</script>
