<template>
  <q-layout view="hHh Lpr lFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Island_with_Trees_Flat_Icon_Vector.svg/1024px-Island_with_Trees_Flat_Icon_Vector.svg.png" >
          </q-avatar>
          A local like
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/home" label="หน้าแรก" />
        <q-route-tab to="/video" label="วีดีโอท่องเที่ยว" />
        <q-route-tab to="/review" label="รีวิวคาเฟ่/ร้านอาหาร" />
        <q-route-tab to="/contact" label="ติดต่อเรา" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
          <q-list padding class="menu-list">
              <q-item >
              <q-item-section avatar>
                <!-- <q-icon name="inbox" /> -->
              </q-item-section>
              <q-item-section>
                สถานที่ท่องเที่ยว
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="inbox" /> -->
              </q-item-section>
              <q-item-section>
                ตรัง
              </q-item-section>
            </q-item>

            <q-item  clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="star" /> -->
              </q-item-section>

              <q-item-section>
                กระบี่
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="send" /> -->
              </q-item-section>

              <q-item-section>
                พังงา
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="drafts" /> -->
              </q-item-section>

              <q-item-section>
                ภูเก็ต
              </q-item-section>
            </q-item>
              <q-item >
              <q-item-section avatar>
                <!-- <q-icon name="inbox" /> -->
              </q-item-section>
              <q-item-section>
                ที่พัก/โรงแรม
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="inbox" /> -->
              </q-item-section>
              <q-item-section>
                ตรัง
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="star" /> -->
              </q-item-section>

              <q-item-section>
                กระบี่
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="send" /> -->
              </q-item-section>

              <q-item-section>
                พังงา
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <!-- <q-icon name="drafts" /> -->
              </q-item-section>

              <q-item-section>
                ภูเก็ต
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
