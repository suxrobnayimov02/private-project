<template>
  <div>
    <el-row>
      <el-button size="mini" class="show_contact_person" @click="contactDialogVisible = true">
        {{ $t('Показать контактные данные') }}
      </el-button>
    </el-row>
    <el-dialog
      :visible.sync="contactDialogVisible"
      width="30%"
      center
    >
      <h3 class="text-gray-700 text-m font-bold text-left text-primary" style="height: 35px">
        {{ fullname }}
      </h3>
      <!--  -->

      <el-row>
        <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
          <el-row class="mt-3">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Пол') }}:</b></el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
              <span v-if="person.gender== 2"><b>{{ $t('Женщина') }}</b></span>
              <span v-if="person.gender== 1"><b>{{ $t('Мужчина') }}</b></span>
            </el-col>
          </el-row>
          <el-row class="mt-3">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <b class="text-muted">{{ $t('Возраст') }}:</b></el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ person.birth_date?calcAge(person.birth_date):' - ' }}</b></el-col>
          </el-row>
          <el-row class="mt-3">
            <i class="el-icon-location" />
            <b class="ml-2">{{ person.address }}</b>
          </el-row>
          <el-row class="mt-3">
            <i class="el-icon-message" />
            <a :href="'mailto:'+person.email">
              <b class="ml-2">
                {{ person.email }}
              </b>
            </a>
          </el-row>
          <el-row class="mt-3">
            <i class="icon-phone" />
            <b class="ml-2"> 
              <a :href="'tel:' + person.phone_number">
                {{ person.phone_number }}
              </a>
            </b>
          </el-row>
          <el-row v-if="person.home_phone_number" class="mt-3">
            <i class="icon-phone" />
            <b class="ml-2"> 
              <a :href="'tel:' + person.home_phone_number">
                {{ person.home_phone_number }}
              </a>
            </b>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <el-row class="float-right">
            <img v-if="personPhoto" :src="personPhoto" class="image" style="width: 100%;">
            <img
              v-else
              src="@/assets/images/businessman.svg"
              alt="image"
              width="120px"
            >
          </el-row>
        </el-col>
      </el-row>
      <!--  -->
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="contactDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="contactDialogVisible = false">Confirm</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default() {
        return {}
      }
    },
    personPhoto: {
      type: String,
      default() {
        return null
      }
    }
    // contactDialogVisible: {
    //   type: Boolean,
    //   default() {
    //     return false
    //   }
    // }
  },
  data() {
    return {
      contactDialogVisible: false,
      fullname: ''
    }
  },
  mounted() {
    if (this.person && this.person.s_name) {
      this.fullname = [this.person.s_name, this.person.f_name, this.person.m_name].join(' ')
    }
  },
  methods: {
    calcAge(birth_date) {
      var today = new Date()
      var birthDate = new Date(birth_date)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }
  }
}
</script>

<style>

</style>
