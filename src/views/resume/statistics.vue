<template>
  <div class="content resume-info">
    <div class="container">
      <div class="block">
        <div class="row row-no-gutters">
          <button v-if="!user.id" class="btn btn-warning">
            Rezyume yaratish
          </button>
          <button v-else class="btn btn-warning" @click="goToRoute('ResumeShow', {id: user.id})">
            Rezyumeni ko'rish
          </button>
          <!-- <button class="btn btn-outline-primary">
            Tayyor shablondan foydalanish
          </button> -->
          <div class="title">Mening rezyumeim</div>

          <div class="col-lg-7">
            <div class="simple-card">
              <div class="__title">
                Yana 9 martta «Qiziqish bildirish»
                imkoniyatingiz bor
              </div>
              <div class="__desc">
                O’zingizga yoqgan vakansiyalarga qiziqish bildiring,
                statistika bo’yicha, 10 ta qiziqish bildirilgan
                vakansiyalardan o’rtacha 1 dona ishga taklif tushadi
              </div>
              <div class="interest">
                <b>1</b>/10
              </div>

              <button class="btn btn-outline-primary">Qiziqish bildirishga mos vakansiyalar</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="resume && resume.position" class="block">
        <div class="job-title">
          {{ resume.position['name_uz-ln'] }}
        </div>
        <div class="date_view">
          <div class="date">
            16 Sen 2021
          </div>
          <div class="view-count">
            2,5К
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="outline-card">
              <div class="__title increase"><b>27</b> <span>+4</span></div>
              <div class="__desc">
                Hafta davomida qidiruv
                natijalarida ko’rsatildi
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="outline-card">
              <div class="__title decrease"><b>3</b> <span>-1</span></div>
              <div class="__desc">
                Hafta davomida rezyume
                ko’rib chiqildi
              </div>
              <a href="" class="link">
                <img src="/img/image/arrow-rightt.svg" alt="">
              </a>
              <a class="info">
                <img src="/img/image/info.svg" alt="">
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="outline-card">
              <div class="__title "><b>0</b> <span /></div>
              <div class="__desc">
                Hafta davomida ishga
                takliflar soni
              </div>
              <a href="" class="link">
                <img src="/img/image/arrow-rightt.svg" alt="">
              </a>
              <a class="info">
                <img src="/img/image/info.svg" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5">
            <div class="block-text">
              Rezyumeni ko’p ish beruvchilar ko’rishi uchun, qidiruv natijalaridagi
              o’rnini muntazam ko’tarib turing
            </div>
            <!-- <button class="btn btn-primary">
              Rezyume o’rnini ko’tarish
            </button> -->
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="nav nav-pills">
              <li>
                <a href="#">
                  <img src="/img/image/hidden.svg" alt="">
                  Ko’rishni o’zgartirish
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link :to="{name: 'ResumeUpdate', params: { id: resume.user_id}}">
                    <img src="/img/image/edit-pen.svg">
                    Tahrir qilish
                  </router-link>
                </a>
              </li>
              <!-- <li><a href="#">
                Takroriy nusxa</a></li> -->
              <li>
                <a href="#">
                  <img src="/img/image/trash.svg" alt="">
                  O’chirish</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Show',
  data() { 
    return {
      
    }
  },
  computed: {
    ...mapGetters({ resume: 'resources/GET_WORK_SEEKER' })
  },
  mounted() {
    this.getInfo().then(res => {
      this.fetchResume({ user_id: this.user.id, search_by: 'user_id' })
    })
    console.log(this.user)
  },
  methods: {
    ...mapActions({ fetchResume: 'resources/get_work_seeker', getInfo: 'auth/getInfo' })
  }
}
</script>

