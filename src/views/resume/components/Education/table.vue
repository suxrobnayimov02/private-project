<template>
  <div>
    <template v-if="education && education.length">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in education"
            :key="'education-' + index"
            type="success"
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
                <el-col :span="2">
                  <span @click="update(item.id)">
                    <i class="el-icon-edit btnEdit" />
                  </span>
                  <span @click="deleteEdu(item.id)">
                    <i class="el-icon-close btnClose" />
                  </span>
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
  // props: {
  //   education: {
  //     type: Array,
  //     default() {
  //       return []
  //     }
  //   }
  // },
  computed: {
    ...mapGetters({ education: 'education/GET_EDUCATIONS' })
  },
  mounted() {
    this.setEducation()
  },
  methods: {
    ...mapActions({
      deleteAction: 'education/destroy', fetchEdu: 'education/index', fetchEdus: 'education/index'
    }),
    setEducation() {
      // this.educationDialog = false
      this.fetchEdus({ user_id: this.user.id })
    },
    dateFromLineToDot(date) {
      return date ? date.split('-').reverse().join('.') : ''
    },
    index() {
      this.fetchEdu({ user_id: this.user.id })
    },
    create() {
      this.$router.push({ name: 'EducationCreate' })
    },
    update(id) {
      this.$emit('editEdu', id)
    },
    deleteEdu(id) {
      ElMessageBox.confirm('Rostan ham o\'chirmoqchimisiz ?', 'Diqqat!',
        { confirmButtonText: 'Ha', cancelButtonText: 'Yo\'q', type: 'warning' }).then(() => {
        this.deleteAction(id).then((res) => {
          this.index()
          ElMessage({
            type: 'success',
            message: this.$t('Muvaffaqiyatli o\'chirildi')
          })
        })
      })
    }

  }
}
</script>
