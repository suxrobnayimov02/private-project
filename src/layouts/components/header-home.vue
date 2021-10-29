<template>
  <div class="header">
    <div class="container">
      <div class="row row-no-gutters">
        <router-link to="/" class="header__logo">
          <span class="icon">
            <img src="/img/image/logo-uz.png" alt="" width="82">
          </span>
          <span class="name">
            Milliy
            vakansiyalar
            bazasi
          </span>
        </router-link>
        <div class="header__nav">
          <ul class="nav nav-pills" style="display:flex">
            <li class="nav-item ">
              <a href="" class="nav-link">
                <span>
                  <img src="/img/image/icon_book.svg" alt="" width="23">
                </span>
                <span class="name">Qo’llanma</span>
              </a>
            </li>
            <li class="nav-item no-tab">
              <a href="" class="nav-link">
                <span>
                  <img src="/image/icon_phone.svg" alt="" width="23">
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
                <span class="name">
                  O’zbek
                </span>
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
            <li class="nav-item no-tab">
              <router-link :to="{ name: 'Register' }" class="nav-link">
                <span>
                  <img src="/img/image/icon_door.svg" alt="" width="23">
                </span>
                <span class="name">Kirish</span>
              </router-link>
            </li>
            <li class="nav-item no-tab">
              <router-link to="/register" class="nav-link register">
                <span>
                  <img src="/img/image/icon_user.svg" alt="" width="16">
                </span>
                <span class="name">Ro’yxatdan o’tish</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="mobile__btn">
          <button class="btn ">
            <img src="/img/image/icon_menu.svg" alt="" width="24">
          </button>
        </div>
        <div class="spec-view__btn no-mobile">
          <button class="btn">
            <img src="/img/image/icon_glasses.svg" alt="" width="24">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>
