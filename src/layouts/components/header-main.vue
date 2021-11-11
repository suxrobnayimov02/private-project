<template>
  <div class="header inner">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="nav">
              <label class="radio-inline">
                <input
                  id="inlineRadio1"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                >
                <label for="inlineRadio1">Ish izlayotganlarga</label>
              </label>
              <label class="radio-inline">
                <input
                  id="inlineRadio2"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option2"
                >
                <label for="inlineRadio2">Ish beruvchilarga</label>
              </label>
            </div>
          </div>
          <div class="col-lg-5 pull-right no-tab">
            <ul class="nav nav-pills">
              <li class="nav-item dropdown nav-lang">
                <a
                  id="dropdownMenu1"
                  href=""
                  class="nav-link dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  O’zbek
                  <span class="caret" />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenu1"
                >
                  <li><a href="#">Русский</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 40 41"
                  >
                    <text
                      id="Fabric_Icons"
                      data-name="Fabric Icons"
                      transform="translate(0 40)"
                      fill="#0078d4"
                      font-size="40"
                      font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                      letter-spacing="1em"
                    >
                      <tspan x="0" y="0"></tspan>
                    </text>
                  </svg>

                  <span> +998 (71) 200-06-00</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 40 41"
                  >
                    <text
                      id="Fabric_Icons"
                      data-name="Fabric Icons"
                      transform="translate(0 40)"
                      fill="#0078d4"
                      font-size="40"
                      font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                      letter-spacing="1em"
                    >
                      <tspan x="0" y="0"></tspan>
                    </text>
                  </svg>

                  <span>Qo’llanma</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header__middle">
      <div class="container">
        <div class="row-no-gutters">
          <router-link to="/" class="header__logo">
            <span class="icon">
              <img :src="logoUrl" alt="" width="82">
            </span>
            <span class="name"> Milliy vakansiyalar bazasi </span>
          </router-link>
          <div class="header__nav">
            <<<<<<< HEAD
            <ul class="nav nav-pills" style="display:flex">

              =======
              <ul class="nav nav-pills" style="display: flex; align-items: center;">
                <li class="nav-link" />
  
                >>>>>>> 1e019e605e2ac135b732c938800896a8159bf1fb
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <span class="name">Bosh sahifa</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <span class="name">Rezyume qo’shish</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <span class="name">Vakansiya e’lon qilish</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link register">
                    <span>
                      <img src="img/image/icon_user.svg" alt="" width="16">
                    </span>
                    <span class="name">Ro’yxatdan o’tish</span>
                  </a>
                </li>
                <li class="nav-item mobile__bt">
                  <button class="btn">
                    <img src="img/image/icon_menu.svg" alt="" width="24">
                  </button>
                </li>
              </ul>
            </ul></div>
          <!-- <div class="mobile__btn">
            <button class="btn">
              <img src="img/image/icon_menu.svg" alt="" width="24" />
            </button>
          </div> -->
          <div class="spec-view__btn no-mobile">
            <button class="btn">
              <img src="img/image/icon_glasses.svg" alt="" width="24">
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Bosh sahifa </a></li>
          <li class="breadcrumb-item active">Ro’yhatdan o’tish</li>
        </ol>

        <div class="search dropdown">
          <button
            id="dLabel"
            class="btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="img/image/icon_search.svg" alt="" width="24px">
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dLabel"
          >
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                >
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">Найти</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="main_nav">
      <ul class="nav nav-pills on-mobile no-desktop">
        <li class="nav-item nav-title no-desktop on-mobile">
          Ish qidiruvchilarga
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Bosh sahifa</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Rezyume qo’shish</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Vakansiya e’lon qilish</a>
        </li>
      </ul>
      <ul class="nav nav-pills no-desktop on-mobile">
        <li class="nav-item nav-title">Ish qidiruvchilarga</li>
        <li class="nav-item">
          <a href="" class="nav-link">Bosh sahifa</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Rezyume qo’shish</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">Vakansiya e’lon qilish</a>
        </li>
      </ul>
      <ul class="nav nav-pills no-desktop on-mobile">
        <li class="nav-item">
          <a href="" class="nav-link register">
            <span>
              <img src="img/image/icon_user.svg" alt="" width="16">
            </span>
            <span class="name">Ro’yxatdan o’tish</span>
          </a>
        </li>
      </ul>

      <ul class="nav nav-pills no-desktop on-mobile">
        <li class="nav-item">
          <a href="" class="nav-link">
            <span>
              <img src="img/image/icon_book.svg" alt="" width="23">
            </span>
            <span class="name">Qo’llanma</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
            <span>
              <img src="img/image/icon_phone.svg" alt="" width="23">
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
              <img src="img/image/icon_globus.svg" alt="" width="23">
            </span>
            <span class="name"> O’zbek </span>
          </a>
          <ul class="dropdown-menu">
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
        <img src="img/image/icon_close.svg" width="32">
      </button>

      <a href="" class="nav-link login-link">
        <span>
          <img src="img/image/icon_door.svg" alt="" width="23">
        </span>
        <span class="name">Kirish</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
  computed: {
    logoUrl() {
      return process.env.VUE_APP_BASE_URL + 'storage/image/logo-uz.png'
    }
  }
}
</script>
