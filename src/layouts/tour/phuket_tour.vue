<template>
<br><br><br><br><br>
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center;">
        <q-card class="my-card">
      <q-img src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000014_1.jpeg" />

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
            ตึกชิโนโปรตุกีส
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
          ถนน ดีบุก ตำบลตลาดเหนือ อำเภอเมืองภูเก็ต ภูเก็ต 83000 จุดถ่ายรูปสวยแห่งแรกที่เราอยากให้มาเช็คอินกันก็คือ เมืองเก่าภูเก็ต ไปเดินเล่นถ่ายรูปสวยๆ
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
      <q-img src="https://www.phuketcity.go.th/files/com_travel/2019-05_c5e2bc8e94e4910.jpg" />

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
            แหลมพรหมเทพ
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
          ตำบลราไวย์ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต อีกหนึ่งที่เที่ยวในเมืองภูเก็ต ที่ห้ามพลาดเลยก็คือ แหลมพรหมเทพ บอกเลยว่าที่นี่ถูกยกให้เป็น จุดชมพระอาทิตย์ตก
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
      <q-img src="https://static.wixstatic.com/media/28711a_c5595d2928764682b393facc5a34100c~mv2.jpg/v1/fill/w_640,h_440,al_c,q_80,usm_0.66_1.00_0.01/28711a_c5595d2928764682b393facc5a34100c~mv2.webp" />

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
            เกาะไม้ท่อน
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
          ตำบลราไวย์ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต ถ้าหากอยากจะดำน้ำหรือพักผ่อนบนเกาะสวยฟีลส่วนตัวแล้วล่ะก็ต้องไปเกาะไม้ท่อน
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
      <q-img src="https://img.kapook.com/u/2016/suppaporn/phuket/phahindum/p02.jpg" />

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
            จุดชมวิว ผาหินดํา
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
          ซอยแหลมมุมนอก ตำบลกะรน อำเภอเมืองภูเก็ต จังหวัดภูเก็ต เป็นจุดชมวิวที่สวยอลังการสุดๆ แบบ 360 องศาสามารถมองเห็นเกาะต่างๆ
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
      <q-img src="https://www.thongteaw.com/Travel_tour_picture_Phuket/%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C_%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%AE_28.jpg" />

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
            เกาะเฮ
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
          ตำบลราไวย์ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต เกาะที่นักเที่ยวนิยมมาเที่ยวอีกแห่งหนึ่งในภูเก็ต เพราะเป็นเกาะที่เดินทางไปไม่ยากจากตัวเมือง
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
      <q-img src="https://cms.dmpcdn.com/travel/2020/08/20/a23f08f0-e2a6-11ea-9dda-d5a62082e005_original.jpg" />

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
            หาดไม้ขาว
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
         อำเภอถลาง จังหวัดภูเก็ต และสิ่งที่ทุกคนต้องทำเมื่อมาเที่ยวที่นี่ก็คือ การถ่ายรูปนอนเล่นริมหาด พร้อมทั้งเซลฟี่กับเครื่องบินทั้งลำ
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
      <q-img src="https://www.phuketcity.go.th/files/com_travel/2019-05_cb9d693904c2617.jpg" />

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
            หาดป่าตอง
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
        ตำบลป่าตอง อำเภอกะทู้ จังหวัดภูเก็ต แลนด์มาร์คของภูเก็ตที่ใครๆ ก็ต้องมาเช็คอินสักครั้ง ไม่อย่างนั้น เหมือนไม่ได้มาเที่ยวภูเก็ตทีเดียว
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
      <q-img src="https://img.wongnai.com/p/1920x0/2018/07/09/e3d33bf3783d46c592ba0929400adc4d.jpg" />

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
            อนุสาวรีย์ท้าวเทพกระษัตรี ท้าวศรีสุนทร
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
           วงเวียนสี่แยกท่าเรือ ตำบลศรีสุนทร อำเภอถลาง จังหวัดภูเก็ต สองวีรสตรีที่ชาวภูเก็ตให้การเคารพนับถือ ที่ป้องกันเมืองถลางให้รอดพ้นจากข้าศึกได้
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
      <q-img src="https://www.รถตู้ให้เช่าภูเก็ตวีไอพี.com/wp-content/uploads/2013/04/golden_buddha1.jpg" />

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
            วัดพระทอง
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
          ตำบลเทพกระษัตรี อำเภอถลาง จังหวัดภูเก็ต เป็นวัดเก่าแก่ที่มีชื่อเสียงวัดหนึ่งในจังหวัดภูเก็ต สิ่งที่โดดเด่นของที่นี่ คือ พระผุด
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
            วัดฉลอง
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
          70 หมู่ 6 ถนนเจ้าฟ้าตะวันตก อำเภอเมืองภูเก็ต จังหวัดภูเก็ต เป็นวัดคู่บ้านคู่เมืองภูเก็ตที่ใครๆ ก็ต้องรู้จัก หรือเคยได้ยินชื่อกันทั้งนั้น
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
