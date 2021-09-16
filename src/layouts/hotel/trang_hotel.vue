<template>
<br><br><br><br><br>
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center;">
        <q-card class="my-card">
      <q-img src="http://img.painaidii.com/images/20170427_8176_1493283664_110533.jpg" />

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
            โรงแรมเรือรัษฎา
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
          ถนนพัทลุง ตำบลทับเที่ยง อำเภอเมือง ตรัง 92000
        </div>
        <div class="text-caption text-grey">
          tel:(+66)75 226 999 <br> Email: info@ruarasadahotel.com
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
      <q-img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/30071141.jpg?k=d8ab17835889478f339fb0b6c9b0c54d82c5d035212c513393cd1217e9ddcae7&o=" />

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
            จามจุรีโฮม
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
          10/9 ถนนเบ็ญจางค์, ตำบล หมากแข้ง, กลางเมืองอุดรธานี, อุดรธานี, ประเทศไทย, 41000
        </div>
        <div class="text-caption text-grey">
          tel:087 951 7940 <br> Email: jamjureehome@hotmail.com
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
      <q-img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/196212300.jpg?k=ecf0aa50bc26c932e4d2990fcc2c407566f023d41d38270caaeff537ade325fe&o=&hp=1" />

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
            สยาม อีโค โฮสเทล
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
          486/106-107 ถ.เพชรบุรี แขวงถนนเพชรบุรี เขตราชเทวี กรุงเทพมหานคร, สยาม, กรุงเทพ, ประเทศไทย, 10400
        </div><div class="text-caption text-grey">
          tel:096 289 2241 <br> Email: siamecohostel@gmail.com
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
      <q-img src="https://www.chillpainai.com/src/wewakeup/img_hotels/2030/kkd2.jpg" />

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
            เดอะเซเว่นซีส์ รีสอร์ท เกาะกระดาน
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
          221/2 หมู่ 2 เกาะกระดาน, เกาะกระดาน
        </div><div class="text-caption text-grey">
          tel:082 490 2442 <br> Email: -
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
      <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/61/00/2a/vue-sur-ce-magnifique.jpg" />

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
            Mook Lamai Resort and Spa
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
          65/5 Moo 2 Koh Mook T. Koh Libong A. Kantang, Trang, เกาะมุกข์ 92110
        </div><div class="text-caption text-grey">
          tel:081 484 1119 <br> Email: llapsirisopa@gmail.com
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
      <q-img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/117021419.jpg?k=b10ddbace93d7b96fe23d8b52346b36e742b9afa730dca588b64674317614c57&o=" />

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
            เกาะไหง รีสอร์ท
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
          140/2 ถ.โรงเรียน, ต.ทับเที่ยง อ.เมือง, เกาะไหง, เกาะไหง (ตรัง), ประเทศไทย, 92000
        </div>
        <div class="text-caption text-grey">
          tel:081 087 7667 <br> Email: reservation@kohngairesort.net
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
      <q-img src="https://images.trvl-media.com/hotels/43000000/42610000/42605300/42605259/7d2a9767.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium" />

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
            มุกพาราไดซ์ บังกะโล
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
          106/8 Moo. 2 Kohmook, เกาะมุก 92110
        </div>
         <div class="text-caption text-grey">
          tel:087 264 1526 <br> Email: -
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
      <q-img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/93985259.jpg?k=5f179b1fcbd0fb5b03e66a8f9718dd800d00ee48ecba5956f4f22db6aa13211d&o=" />

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
            โรงแรมเลอเลิศ ราชบุรี
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
          8/88, ราชบุรี ซิตี้ เซ็นเตอร์, ราชบุรี, ประเทศไทย, 70000
        </div>
        <div class="text-caption text-grey">
          tel:075 290 905 <br> Email: phuphayot.resort@gmail.com
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
      <q-img src="http://img.painaidii.com/images/20140617_6_1402978366_646295.jpg" />

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
            โรงแรมศรีตรัง
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
          22-26 ถ.สถานี, ตรัง 92000
        </div>
        <div class="text-caption text-grey">
          tel:075 218 122 <br> Email: -
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
      <q-img src="http://img.painaidii.com/images/20170227_6_1488180199_120031.jpg" />

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
            เกาะมุก สิวาลัยบีช รีสอร์ท
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
          211 / 1 Moo 2 Koh mook island Trang Thailand, เกาะมุกข์ 92110
        </div><div class="text-caption text-grey">
          tel:088 765 0994 <br> Email: -
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
