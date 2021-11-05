<template>
  <div>
    <table
      class="table table-bordered"
      style="width: 100%"
    >
      <thead>
        <tr class="text-gray-700 text-m font-bold bg-gray-200">
          <th>
            {{ $t('Hudud') }}
          </th>
          <th>
            {{ $t('Tuman(Shaxar)') }}
          </th>
          <th>
            {{ $t('Tashkilot nomi') }}
          </th>
          <th>
            {{ $t('Kasb(Lavozim)') }}
          </th>
          <th>
            {{ $t('Davr') }}
          </th>
          <th>
            {{ $t('Vazifalar') }}
          </th>
          <th>{{ $t('Amallar') }}</th>
        </tr>
      </thead>
      <tbody v-if="list && list.length">
        <tr
          v-for="(item, i) in list"
          :key="'workbook-' + i"
        >
          <td>
            {{ item.region.name_uz_ln }}
          </td>
          <td class="px-4 py-2">
            {{ item.district.name_uz_ln }}
          </td>
          <td>
            {{ item.company_name }}
          </td>
          <td>
            {{ item.position['name_uz-ln'] }}
          </td>
          <td>
            {{ toLocaleDateString(item.start_date) + '-' + toLocaleDateString(item.end_date) }}
          </td>
          <td>
            {{ item.position_description }}
          </td>
          <td>
            <div style="display: flex; justify-content: space-around">
              <el-button icon="el-icon-edit" type="success" size="mini" @click="editItem(item.id)" />
              <el-button icon="el-icon-delete" type="danger" size="mini" @click="deleteItem(item.id)" />
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="10">
            <p class="text-center">{{ $t('Нет информации') }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ElMessageBox, ElMessage } from 'element-plus'
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
    editItem(id) {
      this.$emit('edit', id)
    },
    deleteItem(id) {
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
    },
    ...mapActions({ indexAction: 'experience/index', deleteAction: 'experience/destroy' })
  }
}
</script>

<style>

</style>
