<template>
  <div>
    <template v-if="education && education.length">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in education"
            :key="'education-' + index"
            type="primary"
            :timestamp="item.start_year + ' - ' + ( item.end_year?item.end_year:'h.v.')"
            placement="top"
          >
            <div>
              <el-row>
                <el-col :span="22">
                  <el-card>
                    <b class="text-primary">{{ item.education_place }}</b> <br>
                    <b>{{ item.faculty }}</b><br>
                    {{ $t('Ta\'lim darajasi') }}: <b> {{ item.education_level.name }}</b> <br>
                    <b v-if="item.currently_studying" class="text-danger">{{ $t('Talaba') }}</b>
                    <br>
                  </el-card>
                </el-col>              
              </el-row>
            </div>
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
import { mapActions, mapGetters } from 'vuex'
import { ElMessageBox, ElMessage } from 'element-plus'
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
    ...mapActions({
      deleteAction: 'education/destroy', fetchEdu: 'education/index'
    }),
    dateFromLineToDot(date) {
      return date ? date.split('-').reverse().join('.') : ''
    },
    index() {
      this.fetchEdu({ user_id: this.user.id })
    },
    create() {
      this.$router.push({ name: 'EducationCreate' })
    }

  }
}
</script>
