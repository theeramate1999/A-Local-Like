<template>
<br><br><br><br><br>
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center;">
        <q-card class="my-card">
      <q-img src="https://pix10.agoda.net/hotelImages/209/209973/209973_14010616380018010646.jpg?s=1024x768" />

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
            ศาลาเขาใหญ่
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
          99 หมู่ 11, วังกะทะ, ปากช่อง นครราชสีมา, อุทยานแห่งชาติเขาใหญ่, เขาใหญ่, ประเทศไทย, 30130
        </div><div class="text-caption text-grey">
          tel:089 846 0500 <br> Email: stay@salakhaoyai.com
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
      <q-img src="https://pix8.agoda.net/hotelImages/119/1194555/1194555_16041519160041548439.jpg?s=1024x768" />

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
            เดอะ สลีป พังงา
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
          144 ถนนเพชรเกษม ต.ท้ายช้าง, เมือง พังงา, ถ้ำน้ำผุด, อำเภอเมืองพังงา, พังงา, ประเทศไทย, 82000
        </div><div class="text-caption text-grey">
          tel:076 411 826 <br> Email: -
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
      <q-img src="https://1.bp.blogspot.com/-mtwty5776c0/XQcjZcW5vmI/AAAAAAABKGY/bGq_Fqh9p40-gZHnWDZ0lNr7o7HPRGLAgCLcBGAs/s1600/802912_15011916110024686442.jpg" />

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
            Takuapa Station Hotel
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
          ที่อยู่ 6/80 Moo 2, Bang Nai Si, Takua Pa, อ.ตะกั่วป่า จ.พังงา
        </div><div class="text-caption text-grey">
          tel:098-4619999 <br> Email: -
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
      <q-img src="https://ed.edtfiles-media.com/static-cache/resize-cache/790x528/ud/images/1/25/72902/Chongfah.jpg" />

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
            ช่องฟ้ารีสอร์ท เขาหลัก
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
          54/1 หมู่ 5, เขาหลัก 82190, ประเทศไทย
        </div><div class="text-caption text-grey">
          tel:076 486 858 <br> Email: -
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
            เดอะ ทรี สลีป แอนด์ สเปซ
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
          25/1 ถ.เจิมปัญญา ต.ทับเที่ยง อ.เมือง จ.ตรุ้ง, ตรังซิตี้เซนเตอร์, ตรัง, ประเทศไทย, 92000
        </div><div class="text-caption text-grey">
          tel:081 100 4442 <br> Email: onthetree.info@gmail.com
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
      <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/05/51/a5/31/mai-khaolak-resort-spa.jpg" />

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
            TUI BLUE Mai Khaolak
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
            9/17 Petchkasem Rd., Moo 1 Kuk Kak, Takua Pa, เขาหลัก 82190 ไทย
        </div><div class="text-caption text-grey">
          tel:+66 76 592 000 <br> Email: -
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
      <q-img src="https://1.bp.blogspot.com/-NTOrPW8So30/XjRQhzwHQCI/AAAAAAABWY4/XKDo2b-hf0McejNhPuPRw9uBvmqdSJFAgCLcBGAsYHQ/s1600/tonfds2.jpg" />

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
            Thaimueang Boutique Hotel
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
          33 หมู่ 4 ถนน เพชรเกษม ต. ท้ายเหมือง อ. ท้ายเหมือง จ.พังงา Thai Muang, Phangnga 82120
        </div><div class="text-caption text-grey">
          tel:092 261 8397 <br> Email: thaimueangboutiquehotel@gmail.com
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
      <q-img src="https://media-cdn.tripadvisor.com/media/photo-s/03/c8/59/21/getlstd-property-photo.jpg" />

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
            นาใต้ บีช รีสอร์ท แอนด์ สปา
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
          55 หมู่ 6 ต.โคกกลอย อ.ตะกั่วทุ่ง จ.พังงา, โคกกลอย, ภูเก็ต, ประเทศไทย, 82140
        </div><div class="text-caption text-grey">
          tel:076 401 301 <br> Email: natairsvn@maikhaodream.com
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
            อลีนตา รีสอร์ท แอนด์ สปา
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
          33 หมู่ 5 โคกลอย, ตะกั่วทุ่ง, 82140, พังงา, ไทย
        </div><div class="text-caption text-grey">
          tel:032 618 333 <br> Email: fo.ahh@aleenta.com
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
      <q-img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011715-2a22bacc7ef5ea386f44d4c7d8a834c9.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit" />

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
            Ao Luek Panoramic Pool Villa
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
          61/3, ตำบล แหลมสัก อำเภอ อ่าวลึก กระบี่ อำเภออ่าวลึก, จังหวัดกระบี่ 81110
        </div><div class="text-caption text-grey">
          tel:065 348 9794<br> Email: -
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
