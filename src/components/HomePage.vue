<template>
  <main-layout>
  <template v-slot:header>
    THIS IS HEADERasdasd
  </template>
  <template>
    <router-view/>
  </template>
    <template v-slot:footer>
      THIS IF FOOTER
    </template>
  </main-layout>
</template>
<script>
 import MainLayout from "../layout/MainLayout.vue";

 export default {
   components: {MainLayout},
   template:MainLayout
 }
</script>
