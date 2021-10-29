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
              <div class="list__vacancies__item">
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
                </div>
              </div>
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
export default {
  name: 'Index'
}
</script>

<style scoped>

</style>
