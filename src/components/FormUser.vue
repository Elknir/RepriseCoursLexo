<script setup lang="ts">
// afficher les datas dans le user
import { useFormStore } from '@/stores/storeForm.ts'
import type { FormDataInterface } from '@/shared/interface'

// avoir acces aux getters + actions de mon pinia
const store = useFormStore()
// choppper le getter
const storeData: FormDataInterface[] = store.getData
</script>

<template>
  <div>
    <!--iterer sur les data que me donne le getter de mon pinia-->
    <div v-for="(element, index) in storeData" :key="index">
      <h3>{{ element.name }}</h3>
      <div>{{ element.email }}</div>
      <div>{{ element.commentaire }}</div>
    </div>
  </div>
</template>

<style scoped></style>
