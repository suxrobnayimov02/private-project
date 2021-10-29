<template>
  <div class="content resume">
    <div class="resume__make">
      <div class="container ">
        <div class="row">
          <div class="col-lg-6">
            <div class="title">O’zingizga rezyume yaratig</div>
            <button class="btn btn-primary">
              Fayldan yuklash
            </button>
            <button class="btn btn-outline-primary">
              Tayyor shablondan foydalanish
            </button>

            <div class="form-fields form-horizontal">
              <div class="subtitle">
                Aloqa uchun ma’lumotlar
              </div>
              <div class="form-group ">
                <label for="inputEmail3" class="col-sm-4 control-label">Ism</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control checked" id="inputEmail3"
                         placeholder="Sardor">
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-4 control-label">Familiya</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control checked" id="inputEmail3"
                         placeholder="Mannonov">
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-4 control-label">Mobil telefon</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control checked" id="inputEmail3"
                         placeholder="+998 99 805 00 00">
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-4 control-label">Mobil telefon</label>
                <div class="col-sm-8">
                  <select name="" id="" class="form-control ">
                    <option value="">Toshkent shaxri</option>
                  </select>
                </div>
              </div>

            </div>
            <div class="form-fields form-horizontal">
              <div class="subtitle">
                Asosiy ma’lumotlar
              </div>
              <div class="form-group ">
                <label for="inputEmail3" class="col-sm-4 control-label">Tug’ilgan sana</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control checked" id="inputEmail3"
                         placeholder="14.02.1985">
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-4 control-label">Jinsi</label>
                <div class="col-sm-8">
                  <div class="radio ">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios1"
                             value="option1" checked>
                      Erkak
                    </label>

                  </div>
                  <div class="radio ">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios1"
                             value="option1" checked>
                      Ayol
                    </label>

                  </div>
                </div>

              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-4 control-label">Fuqaroligi</label>
                <div class="col-sm-8">
                  <select name="" id="" class="form-control ">
                    <option value="">O’zbekiston Respublikasi</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-4 control-label">Ish tajribasi</label>
                <div class="col-sm-8">
                  <div class="radio ">
                    <label>
                      <input type="radio" name="expresience" id="expresience" value="option1"
                             checked>
                      Ish tajribasiga ega
                    </label>

                  </div>
                  <div class="radio ">
                    <label>
                      <input type="radio" name="expresience" id="expresience" value="option1"
                             checked>
                      Ish tajribasiga ega emas
                    </label>

                  </div>
                </div>
              </div>

            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-lg">
                Saqlash va namoish qilish
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Create'
}
</script>

<style scoped>

</style>
