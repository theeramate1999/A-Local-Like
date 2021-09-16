<template>
<br><br><br><br><br>
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center;">
        <q-card class="my-card">
      <q-img src="https://pix10.agoda.net/hotelImages/119/1197049/1197049_16051900490042466650.jpg?s=1024x768" />

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
            วนิลาวิวรีสอร์ท (Vanilla Ville Resort)
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
          ซอยเทศบาล2, คลองท่อม, กระบี่, ประเทศไทย, 81120
        </div>
                <div class="text-caption text-grey">
          tel:081 802 9761 <br> Email: rawiphol@hotmail.co.th
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
      <q-img src="https://www.chillpainai.com/src/wewakeup/chillwriter/fb/51_2018-01-16_18_10_20.jpg" />

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
            อวตาร ไรเลย์ รีสอร์ต
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
          Railay Krabi เทศบาลเมืองกระบี่, จังหวัดกระบี่ 81000
        </div><div class="text-caption text-grey">
          tel:075 818 333 <br> Email: -
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
      <q-img src="https://pix10.agoda.net/hotelImages/3624817/-1/fd913b8cc2d14cf5addce843e33514d7.jpg?s=1024x768" />

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
            ปาหนัน กระบี่ รีสอร์ต
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
          945 หมู่ 2 ตำบลอ่าวนาง อำเภอเมืองกระบี่ จังหวัดกระบี่, อ่าวนาง, กระบี่, ประเทศไทย, 81180
        </div><div class="text-caption text-grey">
          tel:075 817 788 <br> Email: info@panankrabiresort.com
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
      <q-img src="https://pix10.agoda.net/hotelImages/165372/-1/b2925c801cf9ad657110e49016c5fa8f.jpg?s=1024x768" />

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
            ดิ เอเลเมนท์ กระบี่ รีสอร์ท
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
         189 Moo 3, 81000, คลองม่วง
        </div>
        <div class="text-caption text-grey">
          tel:+66 (0) 2630 6122 <br> Email: info@theelementsresort.com
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
            วารีรัก ฮ็อต สปริง แอนด์ เวลเนส
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
          Khlong Tom, คลองท่อม, กระบี่, ประเทศไทย, 81120
        </div><div class="text-caption text-grey">
          tel:062 457 6350 <br> Email: info@vacationvillage.co.th
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
      <q-img src="https://www.halalroute.in.th/wp-content/uploads/2017/05/IMG_9140-1024x682.jpg" />

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
            ไร่เลย์ วิลเลจ รีสอร์ท แอนด์ สปา
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
          544 หมู่ 2, กระบี่, ประเทศไทย
        </div><div class="text-caption text-grey">
          tel:075 819 413 <br> Email: info@railayvillagekrabi.com
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
      <q-img src="https://pix10.agoda.net/hotelImages/5904263/0/099a0e978e4309d7691799e98467672d.jpg?s=1024x768" />

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
            Purana resort koh yao noi
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
         เกาะยาวน้อย, ภูเก็ต, ประเทศไทย
        </div><div class="text-caption text-grey">
          tel:065 220 8999 <br> Email: rsvn.puranahotel@gmail.com
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
      <q-img src="https://images.trvl-media.com/hotels/5000000/4290000/4288400/4288356/cf301689.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium" />

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
            ไร่เลย์ ภูตะวัน รีสอร์ท
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
         516 หมู่ 2 ตำบลอ่าวนาง อำเภอเมือง จังหวัดกระบี่, ไร่เลย์, กระบี่, ประเทศไทย, 81180
        </div><div class="text-caption text-grey">
          tel:097 285 9839 <br> Email: booking.railayphutawan@gmail.com
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
      <q-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVOeELzazmrXVUQpX5nbCn6dhIJwOHEUYqfwwVto8cUnelDhzxHkaRUJ3qUOzPnuIijk&usqp=CAU" />

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
            Baan Suan Thip Homestay
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
          167/4 Jantarojwong Rd., Ao Luek Tai, Ao Luek, Krabi, 81110 อ่าวลึก
        </div><div class="text-caption text-grey">
          tel:084 544 4614 <br> Email: bst.homestay@gmail.com
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
            The 28th Hotel
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
          แม่น้ำแคว, กาญจนบุรี, ประเทศไทย, 71000
        </div><div class="text-caption text-grey">
          tel:034 512 828 <br> Email: the28thhotel@gmail.com
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
