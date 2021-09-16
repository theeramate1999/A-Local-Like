<template>
<br><br><br><br><br>
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center;">
        <q-card class="my-card">
      <q-img src="https://lh3.googleusercontent.com/proxy/3hIVc18A8J7Banybu1N0kNdjhzqjkg5fxoc6TntFmqO-7-rrMFpwYlAPAZzLl-RB35MgioPcojXIHkXoJN8YZLPq8jA-5hzkcNa-R3r7gHl01LSX7ZPtZ9K1eQC98gxkNFlT" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            สระมรกต
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            100,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ตั้งอยู่ที่อำเภอคลองท่อม ในเขตรักษาพันธุ์สัตว์ป่าเขาประมง โดยมีต้นกำเนิดมาจากธารน้ำอุ่นในผืนป่าที่ราบต่ำภาคใต้
        </div>
      </q-card-section>
      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

     <q-card class="my-card">
      <q-img src="https://i2.wp.com/travelblog.expedia.co.th/wp-content/uploads/2018/06/cover-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B9%81%E0%B8%AB%E0%B8%A7%E0%B8%81.jpg?fit=1200%2C550&ssl=1" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            ทะเลแหวก
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            100 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ตั้งอยู่บริเวณ หมู่ที่ 2 ตำบลอ่าวนาง อำเภอเมือง จังหวัดกระบี่ หนึ่งในที่เที่ยวสุดอันซีนของกระบี่ที่มีชื่อเสียงโด่งดังไปทั่วโลก
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/aa/b6/dd/caption.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            อ่าวนาง
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          เป็นส่วนหนึ่งของ อุทยานแห่งชาติหาดนพรัตน์ธารา - หมู่เกาะพีพี เป็นหาดที่มีชื่อเสียงที่สุดแห่งหนึ่งของกระบี่ ด้วยเพราะเป็นจุดต่อเรือไปยังที่ต่าง ๆ ได้สะดวก จึงทำให้มีนักท่องเที่ยวแวะเข้ามาเที่ยวที่อ่าวนางเป็นจำนวนมาก
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://wearekrabi.com/wp-content/uploads/2020/09/3-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%9B%E0%B8%AD%E0%B8%A1-%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3-1-scaled.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            ป่าพรุท่าปอม คลองสองน้ำ
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
         ตั้งอยู่ที่บ้านหนองจิก ที่นี่มีแหล่งน้ำจืดที่ใสสะอาดเสียจนมองเห็นพื้นน้ำเบื้องล่าง ประดับด้วยรากไม้ป่าหลุมพีที่เลื้อยไปเลื้อยมา ยิ่งเมื่อแดดสาดแสงลงมาจับต้องแอ่งน้ำเหล่านี้
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

<q-card class="my-card">
      <q-img src="https://cms.dmpcdn.com/travel/2020/04/14/a4ab8040-7e39-11ea-8f7b-911db50d4af3_original.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            น้ำตกร้อนคลองท่อม
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ตั้งอยู่ตำบล คลองท่อมเหนือ อำเภอคลองท่อม กระบี่ 81120 บริเวณบ้านบางคราม-บ้านบางเตียว มีลักษณะเป็นอ่างเก็บน้ำธรรมชาติกลางป่ารองรับน้ำตก
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://www.emagtravel.com/wp-content/uploads/2014/07/thampranang-800.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            หาดถ้ำพระนาง
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          อยู่ในเขต ต.อ่าวนาง จะกระบี่ เชื่อกันว่าสถานที่แห่งนี้เป็นที่สถิตของพระนางอันศักดิ์สิทธิ์ ซึ่งชาวเรือแถบนี้เคารพสักการะ
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

<q-card class="my-card">
      <q-img src="https://tatapi.tourismthailand.org/tatfs/IMAGE/CustomPOI/Picture/P03013288_pic1.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            หมู่เกาะห้อง
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
         ตั้งอยู่ในเขตอุทยานแห่งชาติธารโบกขรณี จังหวัดกระบี่ เป็นเกาะเล็ก ๆ ที่มีทัศนียภาพสวยงามมาก ล้อมรอบด้วยน้ำทะเลสีคราม
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://lh3.googleusercontent.com/proxy/LncqWKhRJl0dsy3GQ-LZwj8EVnQ6UmhBzZeEbooUzp2tH7kmrS9ZpOGS3-vak2k1il6MHCDbqxmbnJfJOZLRzFXWq2o0DbwIZWVscAv1t_4kMPEi9yeaAPcMufBYnYY" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            หาดไร่เลย์
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ศาลากลางจังหวัดกระบี่ 9/10 ถนนอุตรกิจ อำเภอเมือง จังหวัดกระบี่ 81000 เป็นที่รู้จักดีในหมู่นักท่องเที่ยว โดยเฉพาะผู้ที่ชื่นชอบกิจกรรมปีนหน้าผา
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

<q-card class="my-card">
      <q-img src="https://youimg1.tripcdn.com/target/100v1f000001h1c9v17D4.jpg?proc=source%2Ftrip" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            น้ำตกธารโบกขรณี
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            90,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ตั้งอยู่ในบริเวณอุทยานแห่งชาติธารโบกขรณี มีลักษณะเป็นธารน้ำธรรมชาติไหลลงมายังแอ่งน้ำน้อยใหญ่ไล่ระดับกัน นักท่องเที่ยวสามารถลงเล่นน้ำได้
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="data:image/jpeg;base64,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" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            วัดถ้ำเสือ
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            120,000 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          ตั้งอยู่ห่างจากตัวเมืองกระบี่ประมาณ 5-6 กิโลเมตร เป็นที่รู้จักกันดีในหมู่นักท่องเที่ยวทั้งชาวไทยและต่างชาติ พลาดไม่ได้กับการสักการะขอพรจาก "เจ้าแม่กวนอิม" ซึ่งตั้งประดิษฐานอยู่ภายในวัด สูงเด่นเป็นสง่า
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="phone" />
        <q-btn flat color="primary">
          Contact Us
        </q-btn>
      </q-card-actions>
    </q-card>

    </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(5)
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  left : center
  width: 100%
  max-width: 300px
  max-height:500px
</style>
