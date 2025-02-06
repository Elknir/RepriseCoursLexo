<script setup lang="ts">
// composant parent qui garde en memoire l'etat actuel
// bouton pour switch avec la page viewer/admin

// page admin
// 1 component pour add une data
// page viewer


import FormAdmin from '@/components/FormAdmin.vue';
import FormUser from '@/components/FormUser.vue'
import { ref, type Component as C } from 'vue'



const selectedPage = ref<string>("FormAdmin");
// Selection des pages ici
const pages : {[s: string]: C} = {
  FormAdmin,
  FormUser
}



</script>

<template>
  <main>
    <!-- seuls le bouton doit persister entre les pages-->
    <!--Puis change de page-->
    <button @click="selectedPage ='FormUser'">User</button>
    <button @click="selectedPage ='FormAdmin'">Admin</button>

<!--    chaque compornent doit avoir sa propre logique-->
    <Component :is="pages[selectedPage]"></Component>
  </main>
</template>

<style scoped></style>
