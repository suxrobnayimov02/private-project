<template>
  <div>
    <el-timeline v-if="list && list.length">
      <el-timeline-item
        v-for="(item, indexx) in list"
        :key="'education-' + indexx"
        type="success"
        :timestamp="toLocaleDateString(item.start_date) + ' - ' + ( item.end_date ? toLocaleDateString(item.end_date) : 'h.v. ')"
        placement="top"
      >
        <div>
          <el-row>
            <el-col :span="22">
              <el-card>
                <b class="text-success">{{ item.position['name_uz-ln'] }}</b> <br>
                <b>{{ item.company_name }}</b><br>
                <p v-if="item.position_description">{{ $t('Vazifalar') }}: <b> {{ item.position_description }}</b></p>              
                <p>{{ item.region.name_uz_ln + ', ' + item.district.name_uz_ln }}</p>
              </el-card>
            </el-col>           
          </el-row>
        </div>
      </el-timeline-item>
    </el-timeline>
    <template v-else>
      <p class="text-center"> {{ $t('Нет информации') }} </p>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ExperienceIndex',
  computed: {
    ...mapGetters({ list: 'experience/GET_LIST' })
  },
  mounted() {
    this.index()
  },
  methods: {
    index() {
      this.indexAction({ user_id: this.user.id })
    },
    ...mapActions({ indexAction: 'experience/index', deleteAction: 'experience/destroy' })
  }
}
</script>

<style>

</style>
