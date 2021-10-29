<template>
  <div class="content list">
    <div class="list__header">
      <div class="container">
        <div class="search-form">
          <form action="">
            <div class="row">
              <div class="col-lg-10 col-md-10 col-sm-9 col-xs-10 no-padding-right-mobile">
                <div class="form-group position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Vakansiya izlash uchun kasb, hudud, lavozim yoki tashkilot nomini kiriting "
                  >
                  <button class="btn btn-default btn-filter-setting">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="23"
                      viewBox="0 0 48 45"
                    >
                      <path
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        d="M48-42v3H30v1.5a4.415,4.415,0,0,1-.352,1.758,4.515,4.515,0,0,1-.961,1.43,4.515,4.515,0,0,1-1.43.961A4.415,4.415,0,0,1,25.5-33a4.415,4.415,0,0,1-1.758-.352,4.515,4.515,0,0,1-1.43-.961,4.515,4.515,0,0,1-.961-1.43A4.415,4.415,0,0,1,21-37.5V-39H0v-3H21v-1.5a4.415,4.415,0,0,1,.352-1.758,4.515,4.515,0,0,1,.961-1.43,4.515,4.515,0,0,1,1.43-.961A4.415,4.415,0,0,1,25.5-48a4.415,4.415,0,0,1,1.758.352,4.515,4.515,0,0,1,1.43.961,4.515,4.515,0,0,1,.961,1.43A4.415,4.415,0,0,1,30-43.5V-42ZM37.5-18a4.415,4.415,0,0,1,1.758.352,4.515,4.515,0,0,1,1.43.961,4.515,4.515,0,0,1,.961,1.43A4.415,4.415,0,0,1,42-13.5V-12h6v3H42v1.5a4.415,4.415,0,0,1-.352,1.758,4.515,4.515,0,0,1-.961,1.43,4.515,4.515,0,0,1-1.43.961A4.415,4.415,0,0,1,37.5-3a4.415,4.415,0,0,1-1.758-.352,4.515,4.515,0,0,1-1.43-.961,4.515,4.515,0,0,1-.961-1.43A4.415,4.415,0,0,1,33-7.5V-9H0v-3H33v-1.5a4.415,4.415,0,0,1,.352-1.758,4.515,4.515,0,0,1,.961-1.43,4.515,4.515,0,0,1,1.43-.961A4.415,4.415,0,0,1,37.5-18Zm-27-15a4.415,4.415,0,0,1,1.758.352,4.515,4.515,0,0,1,1.43.961,4.515,4.515,0,0,1,.961,1.43A4.415,4.415,0,0,1,15-28.5V-27H48v3H15v1.5a4.415,4.415,0,0,1-.352,1.758,4.515,4.515,0,0,1-.961,1.43,4.515,4.515,0,0,1-1.43.961A4.415,4.415,0,0,1,10.5-18a4.415,4.415,0,0,1-1.758-.352,4.515,4.515,0,0,1-1.43-.961,4.515,4.515,0,0,1-.961-1.43A4.415,4.415,0,0,1,6-22.5V-24H0v-3H6v-1.5a4.415,4.415,0,0,1,.352-1.758,4.515,4.515,0,0,1,.961-1.43,4.515,4.515,0,0,1,1.43-.961A4.415,4.415,0,0,1,10.5-33ZM12-28.5a1.442,1.442,0,0,0-.445-1.055A1.442,1.442,0,0,0,10.5-30a1.442,1.442,0,0,0-1.055.445A1.442,1.442,0,0,0,9-28.5v6a1.442,1.442,0,0,0,.445,1.055A1.442,1.442,0,0,0,10.5-21a1.442,1.442,0,0,0,1.055-.445A1.442,1.442,0,0,0,12-22.5Zm15-15a1.442,1.442,0,0,0-.445-1.055A1.442,1.442,0,0,0,25.5-45a1.442,1.442,0,0,0-1.055.445A1.442,1.442,0,0,0,24-43.5v6a1.442,1.442,0,0,0,.445,1.055A1.441,1.441,0,0,0,25.5-36a1.442,1.442,0,0,0,1.055-.445A1.442,1.442,0,0,0,27-37.5Zm12,30a1.442,1.442,0,0,0-.445-1.055A1.442,1.442,0,0,0,37.5-15a1.442,1.442,0,0,0-1.055.445A1.441,1.441,0,0,0,36-13.5v6a1.442,1.442,0,0,0,.445,1.055A1.442,1.442,0,0,0,37.5-6a1.442,1.442,0,0,0,1.055-.445A1.442,1.442,0,0,0,39-7.5Z"
                        transform="translate(0 48)"
                        fill="#0078d4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-3 col-xs-2 no-padding-left-mobile">
                <button class="btn btn-primary btn-block btn-find">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                  >
                    <path
                      id="Fabric_Icons"
                      data-name="Fabric Icons"
                      d="M21-32a10.866,10.866,0,0,1,2.922.391A10.868,10.868,0,0,1,26.547-30.5a11.142,11.142,0,0,1,2.227,1.727A11.142,11.142,0,0,1,30.5-26.547a10.868,10.868,0,0,1,1.109,2.625A10.866,10.866,0,0,1,32-21a10.866,10.866,0,0,1-.391,2.922A10.868,10.868,0,0,1,30.5-15.453a11.142,11.142,0,0,1-1.727,2.227A11.142,11.142,0,0,1,26.547-11.5a10.868,10.868,0,0,1-2.625,1.109A10.866,10.866,0,0,1,21-10a10.781,10.781,0,0,1-3.742-.656,11.233,11.233,0,0,1-3.289-1.891L1.7-.3A.961.961,0,0,1,1,0,.961.961,0,0,1,.3-.3.961.961,0,0,1,0-1a.961.961,0,0,1,.3-.7l12.25-12.266a11.233,11.233,0,0,1-1.891-3.289A10.781,10.781,0,0,1,10-21a10.866,10.866,0,0,1,.391-2.922A10.868,10.868,0,0,1,11.5-26.547a11.142,11.142,0,0,1,1.727-2.227A11.142,11.142,0,0,1,15.453-30.5a10.868,10.868,0,0,1,2.625-1.109A10.866,10.866,0,0,1,21-32Zm0,20a8.707,8.707,0,0,0,3.5-.711,9.138,9.138,0,0,0,2.859-1.93,9.139,9.139,0,0,0,1.93-2.859A8.707,8.707,0,0,0,30-21a8.707,8.707,0,0,0-.711-3.5,9.139,9.139,0,0,0-1.93-2.859,9.139,9.139,0,0,0-2.859-1.93A8.707,8.707,0,0,0,21-30a8.707,8.707,0,0,0-3.5.711,9.139,9.139,0,0,0-2.859,1.93,9.138,9.138,0,0,0-1.93,2.859A8.707,8.707,0,0,0,12-21a8.707,8.707,0,0,0,.711,3.5,9.138,9.138,0,0,0,1.93,2.859,9.138,9.138,0,0,0,2.859,1.93A8.707,8.707,0,0,0,21-12Z"
                      transform="translate(0 32)"
                      fill="#f8f8f8"
                    />
                  </svg>
                  <span class="text">Qidirish</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <ul class="nav nav-pills">
          <li class="nav-item ">
            <a href="" class="nav-link active">
              Vakansiyalar
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              Rezyumelar
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              Tashkilotlar
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="list__content">
      <div class="container">
        <div class="list__info">
          <div class="__header">
            <div class="list__title">
              Topilgan vakansiyalar soni <b>53 897</b> ta
            </div>
            <div class="btn-group btn-group-slider">
              <button class="btn btn-default">
                Vaqtincha ish
              </button>
              <button class="btn btn-default">
                Mavsumiy ish
              </button>
              <button class="btn btn-default">
                Doimiy ish
              </button>
              <button class="btn btn-default">
                Masofadan turib ishlash
              </button>
              <button class="btn btn-default">
                Smenali ish
              </button>
            </div>
          </div>

        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="filter__header">
              <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <select id="" name="" class="form-control">
                    <option value="">Barcha e’lonlar</option>
                  </select>
                </div>
                <div class="col-lg-10 col-md-10 col-sm-9 col-xs-8 text-right">
                  <div class="total">Namoyish etilyapdi <b>20</b> ta <b>53 897</b> tadan </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="list__filters filter">
              <div class="filter__item">
                <div class="filter__title">Kasblar</div>
                <table>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          Barcha kasblar
                        </label>
                      </div>
                    </td>
                    <td>53 897 </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="Oqituvchi"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="Oqituvchi">
                          O’qituvchi
                        </label>
                      </div>
                    </td>
                    <td>18 752</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          Repetitor
                        </label>
                      </div>
                    </td>
                    <td> 963</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          Barcha kasblar
                        </label>
                      </div>
                    </td>
                    <td>53 897</td>
                  </tr>
                  <tfoot>
                    <tr>
                      <td>
                        <button class="btn-link">
                          Barchasini ko’rsatish
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>

              </div>
              <div class="filter__item">
                <div class="filter__title">Maosh, so’mda</div>
                <table>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          Ahamiyatsiz
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="Oqituvchi"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="Oqituvchi">
                          1 000 000 dan
                        </label>
                      </div>
                    </td>
                    <td>35 842</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          2 000 000 dan
                        </label>
                      </div>
                    </td>
                    <td> 9 752</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          3 000 000 dan
                        </label>
                      </div>
                    </td>
                    <td>5 963</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          O’zingiz belgilang
                        </label>
                      </div>
                    </td>

                  </tr>
                  <tfoot>
                    <tr>
                      <td class="with-input">
                        <div class="form-group position-relative">
                          <input type="text">
                          <span class="input-postfix">dan</span>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>

              </div>
              <div class="filter__item">
                <div class="filter__title">Ta’lim darajasi</div>
                <table>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          checked
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          Ahamiyatsiz
                        </label>
                      </div>
                    </td>
                    <td>53 897 </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="Oqituvchi"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="Oqituvchi">
                          O’rta
                        </label>
                      </div>
                    </td>
                    <td>1 752</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          O’rta maxsus
                        </label>
                      </div>
                    </td>
                    <td> 963</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="checkbox ">
                        <input
                          id="barcha_kasblar"
                          type="checkbox"
                          value="option1"
                          aria-label="..."
                        >
                        <label for="barcha_kasblar">
                          Oliy
                        </label>
                      </div>
                    </td>
                    <td>53 897</td>
                  </tr>
                  <tfoot>
                    <tr>
                      <td>
                        <button class="btn-link">
                          Barchasini ko’rsatish
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>

              </div>
            </div>

          </div>
          <div class="col-lg-9">
            <div class="list__vacancies">
              <!--  -->
              <div v-for="(vacancy, index) in vacancies_static.data" :key="index" class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">{{ vacancy.position_name }}</div>
                    <div class="salary" v-if="vacancy.position_salary">
                      {{vacancy.position_salary}} <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization">{{vacancy.company_name}}</div>
                  <div class="address">
                    {{ vacancy.region ? vacancy.region.name_uz_ln : '' }}
                    {{ vacancy.city ? ', ' + vacancy.city.name_uz_ln : '' }}

                  </div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/portal.svg') ;"
                  />
                  <div class="desc">
                    {{ vacancy.position_name }}
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="icon-question">
                    <img src="/img/image/question.svg" alt="">
                  </div>
                  <div class="date_view">
                    <div class="date">
                      {{ vacancy.date_start }}
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <!-- <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Umumta’lim maktabi o’qituvchisi</div>
                    <div class="salary">
                      2 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization">60-Umumta’lim maktabi</div>
                  <div class="address">Andijon viloyati, Jalolquduq tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/portal.svg') ;"
                  />
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="icon-question">
                    <img src="/img/image/question.svg" alt="">
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">

                  <div class="item-row">
                    <div class="name">Sug’urta kompaniyasining Sirdaryo viloyati filiali
                      direktori</div>
                    <div class="salary">
                      8 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">Asko-Vostok MChJ QK ST</div>
                  <div class="address">Toshkent shaxri, Yakkasaroy tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/asko.png') ;"
                  />
                  <div class="desc">
                    ASKO-VOSTOK sug’urta tashkiloti butun Respublika bo’yicha sug’urta
                    agentlarini ishga taklif qiladi.
                    Ish tajribasi ahamiyatsiz, eng asosiysi ishga ma’suliyat bilan yondashish.
                    Mijozlar bilan aloqa o’rnatish, tushuntirish ishlarini oborish…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Lukoil Uzbekistan bosh muxandis
                      direktori</div>
                    <div class="salary">
                      7 000 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">60-Umumta’lim maktabi</div>
                  <div class="address">Andijon viloyati, Jalolquduq tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/lukoil.png') ;"
                  />
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Sug’urta agenti</div>
                    <div class="salary">
                      8 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">Asko-Vostok MChJ QK ST</div>
                  <div class="address">Toshkent shaxri, Yakkasaroy tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/beeline.png') ;"
                  />
                  <div class="desc">
                    ASKO-VOSTOK sug’urta tashkiloti butun Respublika bo’yicha sug’urta
                    agentlarini ishga taklif qiladi.
                    Ish tajribasi ahamiyatsiz, eng asosiysi ishga ma’suliyat bilan yondashish.
                    Mijozlar bilan aloqa o’rnatish, tushuntirish ishlarini oborish…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Umumta’lim maktabi o’qituvchisi</div>
                    <div class="salary">
                      2 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">60-Umumta’lim maktabi</div>
                  <div class="address">Andijon viloyati, Jalolquduq tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/unesco.png') ;"
                  />
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Sug’urta agenti</div>
                    <div class="salary">
                      1 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">Asko-Vostok MChJ QK ST</div>
                  <div class="address">Toshkent shaxri, Yakkasaroy tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/portal.svg') ;"
                  />
                  <div class="desc">
                    ASKO-VOSTOK sug’urta tashkiloti butun Respublika bo’yicha sug’urta
                    agentlarini ishga taklif qiladi.
                    Ish tajribasi ahamiyatsiz, eng asosiysi ishga ma’suliyat bilan yondashish.
                    Mijozlar bilan aloqa o’rnatish, tushuntirish ishlarini oborish…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Umumta’lim maktabi o’qituvchisi</div>
                    <div class="salary">
                      2 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">Asko-Vostok MChJ QK ST</div>
                  <div class="address">Toshkent shaxri, Yakkasaroy tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/korzinka.svg') ;"
                  />
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Sug’urta agenti</div>
                    <div class="salary">
                      3 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">Asko-Vostok MChJ QK ST</div>
                  <div class="address">Toshkent shaxri, Yakkasaroy tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/mitc.svg') ;"
                  />
                  <div class="desc">
                    ASKO-VOSTOK sug’urta tashkiloti butun Respublika bo’yicha sug’urta
                    agentlarini ishga taklif qiladi.
                    Ish tajribasi ahamiyatsiz, eng asosiysi ishga ma’suliyat bilan yondashish.
                    Mijozlar bilan aloqa o’rnatish, tushuntirish ishlarini oborish…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Umumta’lim maktabi o’qituvchisi</div>
                    <div class="salary">
                      2 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">Asko-Vostok MChJ QK ST</div>
                  <div class="address">Toshkent shaxri, Yakkasaroy tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/minzdrav.svg') ;"
                  />
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div>
              </div>
              <div class="list__vacancies__item">
                <div class="item-body">
                  <div class="item-row">
                    <div class="name">Sug’urta agenti</div>
                    <div class="salary">
                      3 500 000 <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization checked">Asko-Vostok MChJ QK ST</div>
                  <div class="address">Toshkent shaxri, Yakkasaroy tumani</div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/murad-building.svg') ;"
                  />
                  <div class="desc">
                    ASKO-VOSTOK sug’urta tashkiloti butun Respublika bo’yicha sug’urta
                    agentlarini ishga taklif qiladi.
                    Ish tajribasi ahamiyatsiz, eng asosiysi ishga ma’suliyat bilan yondashish.
                    Mijozlar bilan aloqa o’rnatish, tushuntirish ishlarini oborish…
                  </div>

                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">
                    Qiziqish bildirish
                  </div>
                  <div class="btn btn-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 49"
                    >
                      <text
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        transform="translate(0 48)"
                        fill="#a6a6a6"
                        font-size="48"
                        font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"
                        letter-spacing="1em"
                      >
                        <tspan x="0" y="0"></tspan>
                      </text>
                    </svg>
                  </div>
                  <div class="date_view">
                    <div class="date">
                      16 Sen 2021
                    </div>
                    <div class="view-count">
                      2,5К
                    </div>
                  </div>
                </div> -->
              <!-- </div> -->
            </div>
            <div class="text-center">
              <button class="filter_mobile_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 32 28">
                  <path
                    id="Fabric_Icons"
                    data-name="Fabric Icons"
                    d="M16-30v3.422l-12,12V-2H-4V-14.578l-12-12V-30Zm-2,2H-14v.578l12,12V-4H2V-15.422l12-12Z"
                    transform="translate(16 30)"
                    fill="#f8f8f8"
                  />
                </svg>

                <span>
                  Filtrlar
                </span>
              </button>
            </div>
            <nav class="pagination-row">
              <ul class="pagination">
                <li class="disabled">
                  <span class="icon" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      viewBox="0 0 31.906 29.406"
                    >
                      <path
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        d="M31.906-15,17.2-29.7,15.8-28.3,28.094-16H0v2H28.094L15.8-1.7,17.2-.3Z"
                        transform="translate(31.906 -0.297) rotate(180)"
                        fill="#f8f8f8"
                      />
                    </svg>
                  </span>
                </li>
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="dots">
                  <span>
                    ...
                  </span>
                </li>
                <li><a href="#">98</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        viewBox="0 0 31.906 29.406"
                      >
                        <path
                          id="Fabric_Icons"
                          data-name="Fabric Icons"
                          d="M31.906-16,17.2-1.3,15.8-2.7,28.094-15H0v-2H28.094L15.8-29.3,17.2-30.7Z"
                          transform="translate(0 30.703)"
                          fill="#f8f8f8"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'Index',
  data () {
    return {
      vacancies_static: {
        current_page: 1,
        data: [
          {
            id: 21926568,
            company_name: 'ООО "KING GARMENT TEXTILE"',
            position_name: 'Оператор',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1726283',
            company_soato_code4: '1726',
            company_soato_code7: '1726283',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: "Sirg'ali tumani",
              name_uz_cl: 'Сирғали тумани',
              soato: '1726283'
            }
          },
          {
            id: 21926567,
            company_name: '"QIZILQUMGEOLOGIYA" AKSIYADORLIK JAMIYATI',
            position_name: 'Бурғилаш қурилмаси машинисти',
            position_salary: '862069.77',
            date_start: '2021-10-29',
            company_soato_code: '1712408',
            company_soato_code4: '1712',
            company_soato_code7: '1712408',
            region: {
              name_uz_ln: 'Navoiy viloyati',
              name_uz_cl: 'Навоий вилояти',
              soato: '1712'
            },
            city: {
              name_uz_ln: 'Zarafshon',
              name_uz_cl: 'Зарафшон',
              soato: '1712408'
            }
          },
          {
            id: 21926566,
            company_name: 'УЧРЕЖДЕНИЕ "RESPUBLIKA SHOSHILINCH TIBBIY YORDAM ILMIY MARKAZI',
            position_name: 'Умумий амалиёт шифокори (ўриндош)',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1726294',
            company_soato_code4: '1726',
            company_soato_code7: '1726294',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: 'Chilonzor tumani',
              name_uz_cl: 'Чилонзор тумани',
              soato: '1726294'
            }
          },
          {
            id: 21926565,
            company_name: 'МАРКАЗИЙ КОН БОШКАРМАСИ',
            position_name: 'Бадиий-безак ишларини бажарувчиси',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1712408',
            company_soato_code4: '1712',
            company_soato_code7: '1712408',
            region: {
              name_uz_ln: 'Navoiy viloyati',
              name_uz_cl: 'Навоий вилояти',
              soato: '1712'
            },
            city: {
              name_uz_ln: 'Zarafshon',
              name_uz_cl: 'Зарафшон',
              soato: '1712408'
            }
          },
          {
            id: 21926564,
            company_name: '"MIKROKREDITBANK" AKSIYADORLIK-TIJORAT BANKI',
            position_name: 'Департамент директори ўринбосари',
            position_salary: '1999926.00',
            date_start: '2021-10-29',
            company_soato_code: '1726294',
            company_soato_code4: '1726',
            company_soato_code7: '1726294',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: 'Chilonzor tumani',
              name_uz_cl: 'Чилонзор тумани',
              soato: '1726294'
            }
          },
          {
            id: 21926563,
            company_name: 'GID.INSH.QUR.DIREK. O ZTEMIRYO',
            position_name: 'Дурадгор',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1726273',
            company_soato_code4: '1726',
            company_soato_code7: '1726273',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: 'Mirobod tumani',
              name_uz_cl: 'Миробод тумани',
              soato: '1726273'
            }
          },
          {
            id: 21926562,
            company_name: 'OLMALIQ KON-METALLURGIYA KOMBINATI',
            position_name: '“Yoshlik-1» karyerida ishlovchi TD-40 buldozer mashinisti 5 razryadli',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1727404',
            company_soato_code4: '1727',
            company_soato_code7: '1727404',
            region: {
              name_uz_ln: 'Toshkent viloyati',
              name_uz_cl: 'Тошкент вилояти',
              soato: '1727'
            },
            city: {
              name_uz_ln: 'Olmaliq',
              name_uz_cl: 'Олмалиқ',
              soato: '1727404'
            }
          },
          {
            id: 21926561,
            company_name: '"O`ZBEKISTON SANOAT-QURILISH BANK" AKSIYADORLIK TIJORAT BANKI',
            position_name: 'Бўлим бошлиғи',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1726266',
            company_soato_code4: '1726',
            company_soato_code7: '1726266',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: 'Yunusobod tumani',
              name_uz_cl: 'Юнусобод тумани',
              soato: '1726266'
            }
          },
          {
            id: 21926560,
            company_name: "OQOLTIN TUMANI 8-UMUMIY O'RTA TA'LIM MAKTABI",
            position_name: 'Қоровул',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1724206824',
            company_soato_code4: '1724',
            company_soato_code7: '1724206',
            region: {
              name_uz_ln: 'Sirdaryo viloyati',
              name_uz_cl: 'Сирдарё вилояти',
              soato: '1724'
            },
            city: {
              name_uz_ln: 'Oqoltin tumani',
              name_uz_cl: 'Оқолтин тумани',
              soato: '1724206'
            }
          },
          {
            id: 21926559,
            company_name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "HOME TEXTILE NT"',
            position_name: 'Direktor',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1714401365',
            company_soato_code4: '1714',
            company_soato_code7: '1714401',
            region: {
              name_uz_ln: 'Namangan viloyati',
              name_uz_cl: 'Наманган вилояти',
              soato: '1714'
            },
            city: {
              name_uz_ln: 'Namangan',
              name_uz_cl: 'Наманган',
              soato: '1714401'
            }
          },
          {
            id: 21926558,
            company_name: "SHOVOT TUMANI 31-SON MAKTABGACHA TA'LIM MUASSASASI",
            position_name: 'Xo‘jalik mudiri',
            position_salary: '702004.00',
            date_start: '2021-10-29',
            company_soato_code: '1733230811',
            company_soato_code4: '1733',
            company_soato_code7: '1733230',
            region: {
              name_uz_ln: 'Xorazm viloyati',
              name_uz_cl: 'Хоразм вилояти',
              soato: '1733'
            },
            city: {
              name_uz_ln: 'Shovot tumani',
              name_uz_cl: 'Шовот тумани',
              soato: '1733230'
            }
          },
          {
            id: 21926557,
            company_name: '"ANOR BANK" AKSIYADORLIK JAMIYATI',
            position_name: 'Катта мутахассис',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1726269',
            company_soato_code4: '1726',
            company_soato_code7: '1726269',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: "Mirzo Ulug'bek tumani",
              name_uz_cl: 'Мирзо Улуғбек тумани',
              soato: '1726269'
            }
          },
          {
            id: 21926556,
            company_name: '"ATROF MUHITNI MUHOFAZA QILISH SOHASIDA FAOLIYAT KO`RSATAYOTGAN XODIMLARNI QAYTA TAYYORLASH VA ULARNI MALAKASINI OSHIRISH MARKAZI"',
            position_name: 'Етакчи мутахассис',
            position_salary: '1192224.00',
            date_start: '2021-10-29',
            company_soato_code: '1726294',
            company_soato_code4: '1726',
            company_soato_code7: '1726294',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: 'Chilonzor tumani',
              name_uz_cl: 'Чилонзор тумани',
              soato: '1726294'
            }
          },
          {
            id: 21926555,
            company_name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "INTERTEXSERVIS"',
            position_name: 'Лазер қурилмаларида пайвандловчи',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1726290',
            company_soato_code4: '1726',
            company_soato_code7: '1726290',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: 'Yashnobod tumani',
              name_uz_cl: 'Яшнобод тумани',
              soato: '1726290'
            }
          },
          {
            id: 21926554,
            company_name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "BCT CLUSTER AGROKO',
            position_name: 'дала ишчиси',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1706242501',
            company_soato_code4: '1706',
            company_soato_code7: '1706242',
            region: {
              name_uz_ln: 'Buxoro viloyati',
              name_uz_cl: 'Бухоро вилояти',
              soato: '1706'
            },
            city: {
              name_uz_ln: 'Romitan tumani',
              name_uz_cl: 'Ромитан тумани',
              soato: '1706242'
            }
          },
          {
            id: 21926553,
            company_name: 'ZINATULIN RAVIL ABDURAXMANOVICH',
            position_name: 'Директор',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1722210',
            company_soato_code4: '1722',
            company_soato_code7: '1722210',
            region: {
              name_uz_ln: 'Surxondaryo viloyati',
              name_uz_cl: 'Сурхондарё вилояти',
              soato: '1722'
            },
            city: {
              name_uz_ln: 'Denov tumani',
              name_uz_cl: 'Денов тумани',
              soato: '1722210'
            }
          },
          {
            id: 21926552,
            company_name: '1-САНЛЫ САНАТОРИЯ ТИПИНДЕГИ   МЕКТЕПКЕ ШЕКЕМГИ ТАЛИМ МУАССАС',
            position_name: 'Тарбиячи ёрдамчиси',
            position_salary: '450000.00',
            date_start: '2021-10-29',
            company_soato_code: '1735243501',
            company_soato_code4: '1735',
            company_soato_code7: '1735243',
            region: {
              name_uz_ln: "Qoraqalpog'iston Respublikasi",
              name_uz_cl: 'Қорақалпоғистон Республикаси',
              soato: '1735'
            },
            city: {
              name_uz_ln: 'Shumanay tumani',
              name_uz_cl: 'Шуманай тумани',
              soato: '1735243'
            }
          },
          {
            id: 21926551,
            company_name: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "VODIY METAN ISTIQBOLI"',
            position_name: 'Заправка станциялари оператори',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1730221816',
            company_soato_code4: '1730',
            company_soato_code7: '1730221',
            region: {
              name_uz_ln: "Farg'ona viloyati",
              name_uz_cl: 'Фарғона вилояти',
              soato: '1730'
            },
            city: {
              name_uz_ln: "Uchko'prik tumani",
              name_uz_cl: 'Учкўприк тумани',
              soato: '1730221'
            }
          },
          {
            id: 21926549,
            company_name: 'MANZARALI GULLAR VA DARAXTLAR',
            position_name: 'Ёрдамчи ишчи',
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1726262',
            company_soato_code4: '1726',
            company_soato_code7: '1726262',
            region: {
              name_uz_ln: 'Toshkent shahri',
              name_uz_cl: 'Тошкент шаҳри',
              soato: '1726'
            },
            city: {
              name_uz_ln: 'Uchtepa tumani',
              name_uz_cl: 'Учтепа тумани',
              soato: '1726262'
            }
          },
          {
            id: 21926548,
            company_name: '60-СОНЛИ УМУМИЙ УРТА ТАЪЛИМ МАКТАБИ',
            position_name: "O't yoquvchi",
            position_salary: null,
            date_start: '2021-10-29',
            company_soato_code: '1706215501',
            company_soato_code4: '1706',
            company_soato_code7: '1706215',
            region: {
              name_uz_ln: 'Buxoro viloyati',
              name_uz_cl: 'Бухоро вилояти',
              soato: '1706'
            },
            city: {
              name_uz_ln: "G'ijduvon tumani",
              name_uz_cl: 'Ғиждувон тумани',
              soato: '1706215'
            }
          }
        ],
        first_page_url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=1',
        from: 1,
        last_page: 13490,
        last_page_url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=13490',
        links: [
          {
            url: null,
            label: '&laquo; Previous',
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=1',
            label: 1,
            active: true
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=2',
            label: 2,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=3',
            label: 3,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=4',
            label: 4,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=5',
            label: 5,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=6',
            label: 6,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=7',
            label: 7,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=8',
            label: 8,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=9',
            label: 9,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=10',
            label: 10,
            active: false
          },
          {
            url: null,
            label: '...',
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=13489',
            label: 13489,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=13490',
            label: 13490,
            active: false
          },
          {
            url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=2',
            label: 'Next &raquo;',
            active: false
          }
        ],
        next_page_url: 'http://ish-api.mintrud.local/api/v1/vacancies?page=2',
        path: 'http://ish-api.mintrud.local/api/v1/vacancies',
        per_page: 20,
        prev_page_url: null,
        to: 20,
        total: 269791
      }
    }
  },
  async mounted () {
    this.fetchVacancies().then(res => {
      console.log('res', res)
    })
    await axios.get('https://ishapi.mehnat.uz/api/v1/vacancies').then(res => {
      console.log('res', res)
    })
  },
  computed: {
    ...mapGetters({ vacancies: 'vacancy/GET_VACANCIES' })
  },
  methods: {
    ...mapActions({ fetchVacancies: 'vacancy/index' })
  }
}
</script>

<style scoped>

</style>
