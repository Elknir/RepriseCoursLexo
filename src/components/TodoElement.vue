<script setup lang="ts">
// definir les props (definir des types de mes valeurs)
// defineProps et defineEmit pour avoir facilement acces aux variables dans le template
import type { ToDoInterface } from '@/shared/interface'
import { ref, watch } from 'vue'

const props = defineProps<{ToDo: ToDoInterface}>()



// definir les emits ()
const emit = defineEmits<{
  (e: 'modifyTodo', id: number): void
  (e: 'deleteTodo', id: number): void
}>()

//delete faire telle action
// titre + bouton modif + bouton suppr
const isModifyActive = ref <boolean>(false)
const inputModify = ref<string>("")

const taskBaseName = ref<string>("")
watch(() => props.ToDo.taskName , (newValue:string) => {taskBaseName.value = newValue})
taskBaseName.value = props.ToDo.taskName;

function OnClickModify(): void {
  isModifyActive.value = !isModifyActive.value

  if(!isModifyActive.value){
    console.log(inputModify.value)
    console.log(isModifyActive.value)
    taskBaseName.value = inputModify.value
  }

}




</script>



<template>
  <!-- on click faire la fonction delete -->
  <div class="flex-raw">
      <span v-if="isModifyActive==false">{{ taskBaseName }}</span>
      <input v-model="inputModify" v-else/>


      <span @click="OnClickModify()">
        <span v-if="isModifyActive==false"> Modify </span>
        <span v-else> Apply </span>
      </span>

    <span @click="emit('deleteTodo', ToDo.id)"> delete </span>

  </div>






</template>

<style scoped>
.flex-raw{
  display: flex;
  flex-direction: row;
}

.container{
  width: 50%;
}

span{
  margin: 10px;
}

</style>
