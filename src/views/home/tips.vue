<template>
  <div class="tips">
    <div class="container">
      <div class="row row-no-gutters position-relative">
        <div class="col-lg-7 col-md-7">
          <div class="tips__subtitle">
            ish.mehnat.uz dan foydali maslahatlar
          </div>
          <div class="tips__title">
            REZYUMENI to’g’ri
            to’ldirishning
            10 ta usuli
          </div>
          <div class="tips__subtitle">
            Ish beruvchilar siz haqingizda xabar topsin va sizga ajoyib ish taklif qilishsin!
          </div>
          <a href="" class="tips__link">
            Rezyume yaratish
          </a>
        </div>
        <router-link :to="{ name: 'ResumeHandbook' }" class="more_link">
          Barcha
          maslahatlarni
          ko’rish
        </router-link>

      </div>

    </div>
    <div class="container no-padding-right">
      <div class="row row-no-gutters">
        <div class="col-lg-12">
          <div class="tips-slider">
            <div class="tips-carousel owl-carousel owl-theme">
              <a href="" class="item">
                <div class="number">
                  1
                </div>
                <div class="title">
                  Qayta tayyorlash
                  va o’qitish markazlari
                </div>
              </a>
              <a href="" class="item">
                <div class="number">
                  2
                </div>
                <div class="title">
                  REZYUMENI to’g’ri
                  to’ldirish usullari
                </div>
              </a>
              <a href="" class="item">
                <div class="number">
                  3
                </div>
                <div class="title">
                  Kadrlar agentliklari
                  bazasi
                </div>
              </a>
              <a href="" class="item">
                <div class="number">
                  4
                </div>
                <div class="title">
                  Rekruterlik
                  xizmati
                </div>
              </a>
              <a href="" class="item">
                <div class="number">
                  5
                </div>
                <div class="title">
                  Kadrlar agentliklari
                  bazasi
                </div>
              </a>
              <a href="" class="item">
                <div class="number">
                  6
                </div>
                <div class="title">
                  Rekruterlik
                  xizmati
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tips'
}
</script>

<style scoped>

</style>
