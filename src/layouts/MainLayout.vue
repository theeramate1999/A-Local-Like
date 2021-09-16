<template>
  <q-layout view="hHh Lpr lFf">

    <q-header elevated class="bg-secondary text-white" height-hint="98">
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
        <q-route-tab to="/" label="หน้าแรก" />
        <q-route-tab to="/video" label="วีดีโอท่องเที่ยว" />
        <q-route-tab to="/contact" label="ติดต่อเรา" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
          <q-list padding class="menu-list">
              <q-item >
              <q-item-section class="text-h6" style="align-items: center;">
              สถานที่ท่องเที่ยว
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="trang_tour">
              <q-item-section style="align-items: center;">
                ตรัง
              </q-item-section>
            </q-item>

            <q-item  clickable v-ripple to="krabi_tour">

              <q-item-section style="align-items: center;">
                กระบี่
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="phangnga_tour">

              <q-item-section style="align-items: center;">
                พังงา
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="phuket_tour">

              <q-item-section style="align-items: center;">
                ภูเก็ต
              </q-item-section>
            </q-item>
              <q-item >
              <q-item-section class="text-h6" style="align-items: center;">
                ที่พัก/โรงแรม
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="trang_hotel">
              <q-item-section style="align-items: center;">
                ตรัง
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="krabi_hotel">

              <q-item-section style="align-items: center;">
                กระบี่
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="phangnga_hotel">

              <q-item-section style="align-items: center;">
                พังงา
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="phuket_hotel">

              <q-item-section style="align-items: center;">
                ภูเก็ต
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>
      <router-view />

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
<style lang="sass" scoped>
.menu-list
  background: $cyan-2
</style>
