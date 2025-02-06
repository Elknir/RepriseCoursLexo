<script setup lang="ts">


import { useFormStore } from '@/stores/storeForm.ts'
import type { FormDataInterface } from '@/shared/interface'

const store = useFormStore()

function handleSubmit(event: Event) {
  //truc qui a l air de pas marcher mais ca passe
  const inputData = event.target!.elements;

  const registerData: FormDataInterface = {
    name:inputData.name.value,
    email:inputData.email.value,
    commentaire:inputData.commentaire.value
  }

  store.storeForm(registerData)

  // vider les inputs
  inputData.name.value = '';
  inputData.email.value = '';
  inputData.commentaire.value = '';
}


</script>

<template>
  <div>
<!--    .prevent pour pas recharger la page et predre toutes les datas-->
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div>
<!--          label = quand on clique sur le titre de l'input on puisse input-->
          <label for="name"> name </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label for="email"> email </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label for="commentaire"> commentaire </label>
          <input type="text" name="commentaire" id="commentaire" required />
        </div>
      </div>
      <!--Quand on clique sur le bouton submit = enregister les datas-->
      <button type="submit"> Submit </button>
    </form>


  </div>

</template>

<style scoped></style>
