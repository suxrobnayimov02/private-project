<template>
  <div>
    <table
      class="table-auto table-main"
      :data="education"
      style="width: 100%"
    >
      <thead>
        <tr class="text-gray-700 text-m font-bold bg-gray-200">
          <th>{{ $t('ВУЗ') }}</th>
          <th>{{ $t('Образование') }}</th>
          <th>{{ $t('Факултет') }}</th>
          <th>{{ $t('Дата поступление') }}</th>
          <th>{{ $t('Дата окончание') }}</th>
          <th>{{ $t('Серия диплома') }}</th>
          <th>{{ $t('Дата поручение диплома') }}</th>
        </tr>
      </thead> 
      <tbody v-if="education && education.length">
        <tr
          v-for="(item, index) in education"
          :key="'education-' + index"
          class="text-gray-700 text-m font-serif"
        >
          <td class="border px-4 py-2">
            {{ item.otm_diploma }}
          </td>
          <td class="border px-4 py-2">
            {{ item.degree }}
          </td>
          <td class="border px-4 py-2">
            {{ item.faculty }}
          </td>
          <td class="border px-4 py-2">
            {{ item.education_started_year }}
          </td>
          <td class="border px-4 py-2">
            {{ item.education_finished_year }}
          </td>
          <td class="border px-4 py-2">
            {{ item.diploma }}
          </td>
          <td class="border px-4 py-2">
            {{ dateFromLineToDot(item.diploma_given_date) }}
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
    }
  }
}
</script>

<style>

</style>
