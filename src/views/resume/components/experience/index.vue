<template>
  <div>
    <table
      class="table-auto table-main"
      style="width: 100%"
    >
      <thead>
        <tr class="text-gray-700 text-m font-bold bg-gray-200">
          <th>
            {{ $t('Компания') }}
          </th>
          <th>
            {{ $t('Дольжность') }}
          </th>
          <th>
            {{ $t('Период работы') }}
          </th>
        </tr>
      </thead>
      <tbody v-if="workbook && workbook.length">
        <tr
          v-for="(item, index) in workbook"
          :key="'workbook-' + index"
          class="text-gray-700 text-m font-serif"
        >
          <td class=" px-4 py-2">
            {{ item.company_profile_name }}
          </td>
          <td class="border px-4 py-2">
            {{ item.position_name }}
          </td>
          <td class="border px-4 py-2">
            {{ (item.date_stop != '9999-01-01') ? dateFromLineToDot(item.date_start) + '-' + dateFromLineToDot(item.date_stop) : dateFromLineToDot(item.date_start) + '-' + $t('Х.в.') }}
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
export default {
  name: 'ExperienceIndex',
  methods: {

  }
}
</script>

<style>

</style>
