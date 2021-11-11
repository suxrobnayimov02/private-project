<template>
  <div class="intro">
    <div class="container">
      <div class="row">
        <div class="main_nav">
          <ul class="nav nav-pills navMenu on-mobile">
            <div class="menuLogo">
              <router-link to="/" class="header__logo">
                <span class="icon">
                  <img :src="logoUrl" alt="" width="82">
                </span>
                <span class="name"> Milliy vakansiyalar bazasi </span>
              </router-link>
            </div>
<!--            <ul class="nav" />-->
            <li class="nav-item nav-title no-desktop on-mobile">
              Ish qidiruvchilarga
            </li>

            <li class="nav-item">
              <router-link to="/" class="nav-link">Bosh sahifa</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ResumeCreate' }"
                class="nav-link"
              >Rezyume qo’shish</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
              >Vakansiya e’lon qilish</router-link>
            </li>
<!--            <li class="nav-item mobile__btn">-->
<!--              <button class="btnHamburger">-->
<!--                <img src="/img/image/icon_menu.svg" alt="" width="24">-->
<!--              </button>-->
<!--            </li>-->
          </ul>
          <ul class="nav nav-pills no-desktop on-mobile">
            <li class="nav-item nav-title">Ish qidiruvchilarga</li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Bosh sahifa</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ResumeCreate' }"
                class="nav-link"
              >Rezyume qo’shish</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
              >Vakansiya e’lon qilish</router-link>
            </li>
          </ul>
          <ul class="nav nav-pills no-desktop on-mobile">
            <li class="nav-item">
              <router-link to="/register" class="nav-link register">
                <span>
                  <img src="/img/image/icon_user.svg" alt="" width="16">
                </span>
                <span class="name">Ro’yxatdan o’tish</span>
              </router-link>
            </li>
          </ul>

          <ul class="nav nav-pills no-desktop on-mobile">
            <li class="nav-item">
              <a href="" class="nav-link">
                <span>
                  <img src="/img/image/icon_book.svg" alt="" width="23">
                </span>
                <span class="name">Qo’llanma</span>
              </a>
            </li>

            <li class="nav-item">
              <a href="" class="nav-link">
                <span>
                  <img src="/img/image/icon_phone.svg" alt="" width="23">
                </span>
                <span class="name">+998 (71) 200-06-00</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                href=""
                class="nav-link"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>
                  <img src="/img/image/icon_globus.svg" alt="" width="23">
                </span>
                <span class="name"> O’zbek </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="" class="nav-link">O’zbek</a>
                </li>
                <li>
                  <a href="" class="nav-link">Руский</a>
                </li>
                <li>
                  <a href="" class="nav-link">English</a>
                </li>
              </ul>
            </li>
          </ul>
          <button class="js_close_main-nav">
            <img src="/img/image/icon_close.svg" width="32">
          </button>

          <a href="" class="nav-link login-link">
            <span>
              <img src="/img/image/icon_door.svg" alt="" width="23">
            </span>
            <span class="name">Kirish</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 no-mobile">
          <map-regions />
        </div>
        <div class="col-lg-5 col-md-5">
          <div class="row">
            <div class="col-lg-10 col-lg-offset-2">
              <div class="tab-form">
                <form action="">
                  <!-- <ul class="nav nav-justified nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a
                      href="#home"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span>
                        Ish izlayabman
                      </span>
                    </a></li>
                    <li role="presentation"><a
                      href="#profile"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span>
                        Ish beruvchiman
                      </span>
                    </a>
                    </li>

                  </ul> -->

                  <!-- Tab panes -->
                  <!-- <div class="tab-content">
                    <div id="home" role="tabpanel" class="tab-pane active">
                      <div class="form-group">
                        <select id="" name="" class="form-control job">
                          <option value="0">Kasbni tanlang</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <select id="" name="" class="form-control place">
                          <option value="0">Xududni tanlang</option>
                        </select>
                      </div>

                      <div class="form-group row row-no-gutters">
                        <div class="links pull-left">
                          <router-link to="/register" class="btn-link">Ro’yhatdan o’tish</router-link>
                        </div>
                        <button class="btn btn-primary pull-right">
                          Qidirish
                        </button>
                      </div>
                    </div>
                    <div id="profile" role="tabpanel" class="tab-pane">
                      <div class="form-group">
                        <select id="" name="" class="form-control job">
                          <option value="0">Kasbni tanlang</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <select id="" name="" class="form-control place">
                          <option value="0">Xududni tanlang</option>
                        </select>
                      </div>

                      <div class="form-group row row-no-gutters">
                        <div class="links pull-left">
                          <router-link to="/register" class="btn-link">Ro’yhatdan o’tish</router-link>
                        </div>
                        <button class="btn btn-primary pull-right">
                          Qidirish
                        </button>
                      </div>
                    </div>

                  </div> -->
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="map_popup">
          <div class="title">
            <b> Navoi </b>
            viloyati
          </div>
          <table class="popup-table">
            <tr>
              <td>Vakansiyalar:</td>
              <td>2 153</td>
            </tr>
            <tr>
              <td>Ish beruvchilar:</td>
              <td>896</td>
            </tr>
            <tr>
              <td>Rezyumelar:</td>
              <td>5 879</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="statistic">
        <div class="row">
          <a href="" class="statistic__logo">
            <el-row>
              <el-col :span="12">
                <span class="icon float-end">
                  <img src="/img/image/logo-uz.png" alt="" width="82">
                </span>
              </el-col>
              <el-col :span="12">
                <span class="name"> Milliy vakansiyalar bazasi </span>
              </el-col>
            </el-row>
          </a>
        </div>
        <el-row class="statistic-el-row">
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="item">
              <div class="icon">
                <img src="/img/image/icon_users.svg" alt="" width="64px">
              </div>
              <div class="info">
                <div class="number">56 829</div>
                <div class="name">Rezyumelar</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="item">
              <div class="icon">
                <img src="/img/image/icon_case.svg" alt="" width="64px">
              </div>
              <div class="info">
                <div class="number">34 789</div>
                <div class="name">Ish o’rinlari</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="item">
              <div class="icon">
                <img src="/img/image/icon_building.svg" alt="" width="67" height="52">
              </div>
              <div class="info">
                <div class="number">1 253</div>
                <div class="name">Korhonalar</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="item">
              <div class="icon">
                <img src="/img/image/icon_flag.svg" alt="" width="55px">
              </div>
              <div class="info">
                <div class="number">358</div>
                <div class="name">Davlat tashkilotlari</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="row text-center">
          <button class="swipe__btn" type="button">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17px"
                height="17px"
                viewBox="0 0 33.082 35.895"
              >
                <path
                  id="Fabric_Icons"
                  data-name="Fabric Icons"
                  d="M16.541-16.646,0-.105-16.541-16.646l1.582-1.582L-1.125-4.395V-36h2.25V-4.395L14.959-18.229Z"
                  transform="translate(16.541 36)"
                  fill="#333"
                />
              </svg>
            </div>
            <div class="text" @click="goToServices">Davom etish</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapRegions from './components/map.vue'
export default {
  name: 'Intro',
  components: { MapRegions },
  computed: {
    logoUrl() {
      return process.env.VUE_APP_BASE_URL + 'storage/image/logo-uz.png'
    }
  },
  methods: {
    goToServices() {
      var element = document.getElementById('vacancies__section')
      var top = element.offsetTop
      window.scrollTo({
        top: top - 100,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
</style>
