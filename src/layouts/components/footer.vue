<template>
  <div class="footer">
    <div class="container">
      <div class="footer__nav">
        <div class="nav__item">
          <h1>Ish qidiruvchilarga</h1>
          <ul class="nav">
            <li class="nav-item">
              <router-link :to="{ name: 'ResumeCreate' }" class="nav-link">
                Rezyume yaratish
              </router-link>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Ish qidirish
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Rezyume namunalari
              </a>
            </li>
          </ul>
        </div>
        <div class="nav__item">
          <h1>Ish beruvchilarga</h1>
          <ul class="nav">
            <li class="nav-item">
              <a href="" class="nav-link">
                Vakansiya joylash
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Xodim qidirish
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Tartiblar
              </a>
            </li>
          </ul>
        </div>
        <div class="nav__item">
          <h1>Ma’lumot</h1>
          <ul class="nav">
            <li class="nav-item">
              <a href="" class="nav-link">
                Sayt haqida
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Saytdan foydalanish
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Sayt xaritasi
              </a>
            </li>
          </ul>
        </div>
        <div class="nav__item">
          <h1>Aloqa</h1>
          <ul class="nav">
            <li class="nav-item icon_place">
              <a href="" class="nav-link">
                100100, Toshkent, Mirobod k., 15 uy
              </a>
            </li>
            <li class="nav-item icon_phone">
              <a href="" class="nav-link">
                +998 (71) 200-06-00
              </a>
            </li>
            <li class="nav-item icon_email">
              <a href="" class="nav-link">
                info@mehnat.uz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__logo">
      <div class="container">
        <a href="" class="icon">
          <img src="/img/image/logo-footer.svg" alt="" width="230">
        </a>
        <div class="name" />
      </div>
    </div>
    <div class="container">
      <div class="footer__bottom">
        <div class="copyright">
          © Barcha huquqlar himoyanlangan 2017 - 2021
        </div>
        <div class="info">
          Materiallardan foydalanganda www.ish.mehnat.uz
          saytiga havola berilishi shart
        </div>
        <div class="warning">
          Diqqat! Agar siz matnda xatoliklarni aniqlasangiz, ularni belgilab,
          ma`muriyatni xabardor qilish uchun Ctrl+Enter tugmalarini bosing
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
