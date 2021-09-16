<template>
<br><br><br><br><br>
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center;">
        <q-card class="my-card">
      <q-img src="https://th.readme.me/f/12484/59c1d9292da4ff6c6bdbe73f.jpg" />

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
            เขาไข่นุ้ย ทะเลหมอกพังงา
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
          หนึ่งใน ที่เที่ยวพังงา ที่ยอดนิยม คือ เขาไข่นุ้ย ตั้งอยู่ที่บ้านฝายท่า ตำบลทุ่งมะพร้าว อำเภอท้ายเหมือง โดยที่เขาไข่นุ้ยนะคะ มีความสูงถึง 200 เมตร
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
      <q-img src="https://live.staticflickr.com/65535/51278152911_93d051ab0d_c.jpg" />

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
            สำนักสงฆ์ถ้ำผาผึ้ง ถ้ำน้ำผุด
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
          นักสงฆ์ถ้ำผาผึ้ง ต.ถ้ำน้ำผุด จ.พังงาเป็นจุดที่มีมุมชมวิว ชมธรรมชาติ ได้สวยมากเปลี่ยนบรรยากาศ มาเที่ยวชมธรรมชาติ สูดอากาศบริสุทธิ์ และชมวิว180 องศา
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
      <q-img src="https://www.takuapacity.go.th/tmp/7915499c57f7551904f79db9df012d01.jpg" />

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
            เมืองเก่าตะกั่วป่า ถนนวัฒนธรรม
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
          ตั้งอยู่ที่อำเภอตะกั่วป่า จังหวัดพังงา เป็นเมืองเล็กๆ ที่มีเสน่ห์ชวนค้นหา ในด้านวิถีชีวิต วัฒนธรรม และสถาปัตยกรรม ในยุคเหมืองแร่ดีบุกที่เฟื่องฟูตั้งแต่สมัยรัชกาลที่ 7
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
      <q-img src="https://cms.dmpcdn.com/travel/2020/10/21/5b663c60-136a-11eb-ab84-d705c02e81b2_original.jpg" />

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
            ประภาคารเขาหลัก หาดนางทอง
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
          ตั้งอยู่ที่บริเวณ หาดนางทอง ตำบลคึกคัก อำเภอตะกั่วป่า จังหวัดพังงา จุดเช็คอินที่เที่ยวพังงา เขาหลักสำคัญของหาดนางทอง
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
      <q-img src="https://www.touronthai.com/gallery/photo/15000018/sairungwaterfall16.jpg" />

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
            น้ำตกสายรุ้ง
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
          ตั้งอยู่ในอำเภอตะกั่วป่า จังหวัดพังงา ก็เป็นสีน้ำธรรมดา แต่น้ำตกจะไหลจากหน้าผาที่สูงมากๆตกลงมาในแอ่งน้ำ
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
      <q-img src="https://www.leelawadee.holiday/userfiles/%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87.jpg" />

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
            คลองสังเน่ห์
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
          หมู่ 9 ตำบลบางนายสี อำเภอตะกั่วป่า จังหวัดพังงา เป็นสถานที่ที่เที่ยวพังงาที่ชาวตะกั่วป่าของเราคุ้นหูกันแน่นอน สถานที่นี้จะอยู่ลึกเข้าไปนิดหน่อย เหมือนเป็นการจำลองการไปเที่ยวอเมซอนขนาดย่อมดีๆนี่เอง
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
      <q-img src="https://s.isanook.com/tr/0/ud/283/1415541/g455h.jpg" />

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
            น้ำตกลำปี
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
          ตั้งอยู่หมู่ที่ 6 ตำบลท้ายเหมือง อำเภอท้ายเหมือง จังหวัดพังงา สวยงามตามธรรมชาติมากๆ น้ำใสๆที่ตกลงมามีถึงสามชั้นด้วย ซึ่งเป็นอะไรที่เพอร์เฟ็คสุดๆ นับว่าเป็นหนึ่งในที่เที่ยวพังงา
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
      <q-img src="https://www.phangngasmarttravel.com/statics/ui/place/8271/b/e640aebc693c57a8f49eb5ce8165ccd2.jpeg" />

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
            หาดท้ายเหมือง
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
          ตั้งอยู่ที่บ้านท่าแตง ต.นาเตย อ.ท้ายเหมือง จ.พังงา วัดท่าไทรเป็นวัดที่โดดเด่นมากใน ที่เที่ยวพังงา เนื่องด้วยจากสถานที่ที่ตั้งวัดอยู่ติดกับทะเล ไหนจะอุโบสถที่ทำจากไม้ทั้งหลัง
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
      <q-img src="https://lh3.googleusercontent.com/proxy/Q79mVAD9ar8tLhZAOBnmY_VZVYEZnZY9zzTKwpvG2zMiD0EWYqCcz_n_4FUAOiKB7MlUOFVMyTRrjUpsuG6xat6iCVp7qL4-DRrXBdqONA9XNribBvExxaU" />

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
            สะพานไม้เขาปิหลาย
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
          ตำบล โคกกลอย อำเภอตะกั่วทุ่ง พังงา 82140 เป็นสะพานไม้เก่าที่มีความผุพังเป็นที่เรียบร้อยแล้ว ซึ่งไม่สามารถใช้งานจริงได้
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
      <q-img src="https://i0.wp.com/th.blog.kkday.com/wp-content/uploads/jpg-27.jpeg?fit=1350%2C759&ssl=1" />

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
            เขาตะปู
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
          ตั้งอยู่ทางด้านเหนือในเวิ้งอ่าวของเกาะเขาพิงกัน ทางทิศตะวันตกเฉียงใต้ของอุทยานแห่งชาติอ่าวพังงาในท้องที่ ตำบลกะไหล อำเภอตะกั่วทุ่ง จังหวัดพังงา
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
