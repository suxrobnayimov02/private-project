<template>
  <el-row>
    <el-col :span="4"><b class="text-muted">{{ $t('График работы') }}:</b></el-col>
    <el-col :span="10">
      <template v-if="types && types.length != 0">
        <el-checkbox-group v-model="employment_id" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="type in types" :key="type" :label="type">{{ type }}</el-checkbox>
        </el-checkbox-group>
        <!-- <div v-for="lang in languages.data" :key="lang.id" class="lang">
          <el-row>
            <el-col :span="6">
              <p class="text-success font-weight-bold">{{ (locale == 'ru')?lang.language.name_ru:(locale == 'uzln')?lang.language.name_uz_ln:lang.language.name_uz_cl }}</p>
            </el-col>
            <el-col :span="16">
              <el-rate v-model="lang.level/2" />
            </el-col>
            <el-col :span="2">
              <el-button size="mini" type="danger" @click="deleteItem(lang.id)">
                <i class="el-icon-delete-solid" />
              </el-button>
            </el-col>
          </el-row>
        </div> -->
      </template>
      <span v-else class="label label-red mr-2">{{ $t('Нет') }}</span>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
  props: {
    employmentId: {
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
      types: []
    }
  },
  mounted() {
    this.getAppealsStatuses({ type: 'work_schedule' }).then(res => {
      this.types = res.data
    })
  },
  methods: {
    ...mapActions({
      getAppealsStatuses: 'resume/getAppealsStatuses'
    })
  }
}
</script>

<style>

</style>
