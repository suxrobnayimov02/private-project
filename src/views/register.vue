<template>
  <div class="content register">
    <div class="container">
      <div class="col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3">
        <template v-if="step === 2">
          <div class="simple-card card step-1">
            <div class="card-body">
              <div class="title">
                Kodni kiriting
              </div>
              <div class="card-text">
                Sizning <b>+998 .. … 50 00</b> telefon raqamingizga
                xabar yubordik, SMSdagi kodni kiriting
              </div>
              <div class="form-group">
                <input type="text" class="form-control " placeholder="Kodni kiriting">
              </div>
              <div class="form-group">
                <div class="card-text">
                  Kodni takroran yuborish uchun <b>00:58</b> qoldi
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Tasdiqlayman</button>
              </div>
            </div>
          </div>
        </template>
        <template v-if="step === 1">
          <div class="simple-card card" style="background-image: url('img/image/for_applicant.png');">
            <div class="card-body">
              <div class="title">
                Ish izlayabman
              </div>
              <div class="form-group">

                <!-- class is-valid покарсить иконку -->
                <input type="text" class="form-control " placeholder="Pasport ID yoki Mobil telefon ">
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Davom etish</button>
                <a href="" class="btn btn-link">Parol bilan kirish</a>
              </div>
              <div class="form-group">
                <el-button type="primary" @click="loginAuthService(authServiceOneIDLink)" icon="el-icon-key" class="w-100">OneID bilan kirish</el-button>
              </div>
            </div>
          </div>

          <div class="simple-card card" style="background-image: url('img/image/for_employer.png');">
            <div class="card-body">
              <div class="title">
                Ish beruvchiman
              </div>
              <div class="form-group card-text">
                Vakansiya e’lon qilish va rezyumelar
                bazasidan foydalanish
              </div>
              <div class="form-group">
                <button class="btn btn-outline-primary" @click="loginAuthService(authServiceEsiLink)">ERI bilan kirish</button>
              </div>
            </div>
          </div>

          <p class="oferta-info-text">
            «Davom etish» tugmasini bosib, Siz <a href="">«Ish topishga ko’maklashish bo’yicha kelishuv
              (Oferta)»</a> bilan
            tanishib chiqganingizni va kelishuvda ko’rsatilgan talablarga roziligingizni tasdiqlaysiz
          </p>
        </template>
        <template v-if="step === 3">
          <div class="simple-card card step-2">
            <div class="card-body">
              <div class="subtitle">
                O’zbekiston Respublikasi
                Milliy Vakansiyalar Bazasiga
              </div>
              <div class="title">
                Xush kelibsiz! <br>
                Sardor Mannonov
              </div>

            </div>
            <div class="card-footer">
              <div class="form-group">
                <button class="btn btn-warning">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="16"
                      viewBox="0 0 26 32"
                    >
                      <path
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        d="M26-6h4v2H26V0H24V-4H20V-6h4v-4h2ZM6-30V-6H18v2H4V-32H17.422L26-23.422V-12H24V-22H16v-8Zm12,1.422V-24h4.578Z"
                        transform="translate(-4 32)"
                        fill="#3c3c3c"
                      />
                    </svg>

                  </div>
                  <span> Rezyume yaratish</span>
                </button>
                <button class="btn btn-outline-primary">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 31.813 31.813"
                    >
                      <path
                        id="Fabric_Icons"
                        data-name="Fabric Icons"
                        d="M27.859-16.562q0,.141.008.281t.008.281q0,.141-.008.281t-.008.281l4.047,2.516L29.422-6.937,24.781-8q-.375.406-.781.781l1.063,4.641L19.078-.094,16.563-4.141q-.141,0-.281.008T16-4.125q-.141,0-.281-.008t-.281-.008L12.922-.094,6.938-2.578,8-7.219Q7.594-7.594,7.219-8L2.578-6.937.094-12.922l4.047-2.516q0-.141-.008-.281T4.125-16q0-.141.008-.281t.008-.281L.094-19.078l2.484-5.984L7.219-24q.375-.406.781-.781L6.938-29.422l5.984-2.484,2.516,4.047q.141,0,.281-.008T16-27.875q.141,0,.281.008t.281.008l2.516-4.047,5.984,2.484L24-24.781q.406.375.781.781l4.641-1.062,2.484,5.984Zm-1.828,2.031q.031-.375.063-.742t.031-.742q0-.359-.031-.734t-.062-.734l3.688-2.3-1.344-3.25-4.234.984a13.577,13.577,0,0,0-.992-1.094q-.508-.5-1.1-1l.984-4.234-3.25-1.344-2.312,3.688-.734-.062q-.375-.031-.734-.031-.375,0-.742.031l-.742.063-2.3-3.687-3.25,1.344.984,4.234a13.576,13.576,0,0,0-1.094.992q-.5.508-1,1.1l-4.234-.984-1.344,3.25,3.688,2.313q-.031.375-.062.742t-.031.742q0,.359.031.734t.063.734l-3.687,2.3,1.344,3.25,4.234-.984a13.576,13.576,0,0,0,.992,1.094q.508.5,1.1,1L8.969-3.625l3.25,1.344,2.313-3.687.734.063q.375.031.734.031.375,0,.742-.031l.742-.062,2.3,3.688,3.25-1.344-.984-4.234a13.576,13.576,0,0,0,1.094-.992q.5-.508,1-1.1l4.234.984,1.344-3.25ZM16-21.875a5.725,5.725,0,0,1,2.289.461,5.928,5.928,0,0,1,1.867,1.258,5.928,5.928,0,0,1,1.258,1.867A5.725,5.725,0,0,1,21.875-16a5.725,5.725,0,0,1-.461,2.289,5.928,5.928,0,0,1-1.258,1.867,5.928,5.928,0,0,1-1.867,1.258A5.725,5.725,0,0,1,16-10.125a5.725,5.725,0,0,1-2.289-.461,5.928,5.928,0,0,1-1.867-1.258,5.928,5.928,0,0,1-1.258-1.867A5.725,5.725,0,0,1,10.125-16a5.725,5.725,0,0,1,.461-2.289,5.928,5.928,0,0,1,1.258-1.867,5.928,5.928,0,0,1,1.867-1.258A5.725,5.725,0,0,1,16-21.875Zm0,10a4.054,4.054,0,0,0,1.609-.32,4.132,4.132,0,0,0,1.313-.883,4.132,4.132,0,0,0,.883-1.312A4.054,4.054,0,0,0,20.125-16a4.054,4.054,0,0,0-.32-1.609,4.132,4.132,0,0,0-.883-1.312,4.132,4.132,0,0,0-1.312-.883A4.054,4.054,0,0,0,16-20.125a4.054,4.054,0,0,0-1.609.32,4.132,4.132,0,0,0-1.312.883,4.132,4.132,0,0,0-.883,1.313A4.054,4.054,0,0,0,11.875-16a4.054,4.054,0,0,0,.32,1.609,4.132,4.132,0,0,0,.883,1.313,4.132,4.132,0,0,0,1.313.883A4.054,4.054,0,0,0,16-11.875Z"
                        transform="translate(-0.094 31.906)"
                        fill="#0078d4"
                      />
                    </svg>
                  </div>
                  <span> Akkauntni sozlash</span>
                </button>
              </div>
              <div class="oferta-info-text">
                O’zbekiston Respublikasi <a href="">qonunchiligi</a> asosida, shaxsingiz to’g’risidagi
                ma’lumotlarni <a href="">id.gov.uz</a> tizimidan olinganini ma’lum qilamiz
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import externalLogin from '../mixins/external-login'

export default {
  name: 'Register',
  mixins: [externalLogin],
  data () {
    return {
      step: 1
    }
  }
}
</script>

<style scoped>

</style>
