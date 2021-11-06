<template>
  <div>
    <template v-if="education && education.length">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in education"
            :key="'education-' + index"
            type="success"
            :timestamp="item.start_year + ' - ' +( item.end_year?item.end_year:'...')"
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
                  <el-button class="float-right mr-2 mtb" type="primary" round plain size="mini" icon="el-icon-edit" @click="updateEducation(item.id)" />
                  <el-button class="float-left mtb" type="danger" round plain size="mini" icon="el-icon-delete" @click="deleteEdu(item.id)" />
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
