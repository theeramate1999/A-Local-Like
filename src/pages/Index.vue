<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <br><br><br><br><br>
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://www.brighttv.co.th/wp-content/uploads/2021/06/%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%84%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%81-%E0%B8%9B%E0%B8%81.png"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://img.kapook.com/u/2019/sutasinee/01/h10.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://mpics.mgronline.com/pics/Images/564000002318801.JPEG"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://www.phuketcity.go.th/files/com_travel/2019-05_c5e2bc8e94e4910.jpg"
          />
        </q-carousel>
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
        <div class="text-h4" style="text-align: center;">A Local Like</div>
        <br>
        <div class="text-h6" style="text-align: center;"> &nbsp;&nbsp;&nbsp; เคยเป็นมั้ย ? เวลาไปเที่ยวภูเขาแล้วคิดถึงทะเล หรือบางทีไปเที่ยวทะเล เอ้า ! ดันคิดถึง(ภู)เขาซะงั้น</div>
        <div class="text-h6" style="text-align: center;">พอเป็นแบบนี้แล้วเลือกไม่ถูกเลย ว่าสรุปแล้วจะไปหาเขา หรือไปเอาเท้าจุ่มน้ำที่ทะเลดี</div>
        <div class="text-h6" style="text-align: center;">วันนี้ชิลไปไหนขออาสาพาเพื่อนๆไปตะลอนเที่ยว</div>
        <div class="text-h5" style="text-align: center;">" 4 จังหวัดน่าเที่ยวภาคใต้ ไม่ต้องเลือกให้ลังเล ฟินได้ทั้งเขาทั้งทะเลในที่เดียว "</div>
        <br>

        <q-card-actions class="btn-a" align="around">
        <q-btn outline class="text-h6" clickable v-ripple to="/video">เยี่ยมชมวิดีโอท่องเที่ยว</q-btn>
        <q-btn outline class="text-h6" clickable v-ripple to="/contact">ต้องการติดต่อเรา</q-btn>
      </q-card-actions>
      </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px(6,61,124,.2)
.row + .row
  margin-top: 1rem
.text-h5
  color: $yellow
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
