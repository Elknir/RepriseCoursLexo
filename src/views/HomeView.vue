<template>
  <main>
    <ul>
<!--      faire une v-for de "todoElement"-->
      <li v-for="value in ToDoValues" :key="value.id">
<!--        afficher le nom de la tache-->
            <TodoElement :ToDo="value" @delete-todo="deleteToDoElement" @modify-todo="modifyToDoElement"></TodoElement>

        <!--        mettre un bouton onclick Modifiy (console.log)-->

<!--        mettre un bouton onclick Delete (console.log)-->

      </li>
    </ul>
  </main>
</template>


<script setup lang="ts">


import { reactive } from 'vue'
import type { ToDoInterface } from '@/shared/interface'
import TodoElement from '@/components/TodoElement.vue'

//reactive pour definir des values mais en tableau
//<{interface}>(valeurs)

//definir les variables
const ToDoValues = reactive<ToDoInterface[]>(
  [
    {id: 0, taskName: "Todo 1"},
    {id: 1,taskName: "Todo 2"},
    {id: 2,taskName: "Todo 3"},
  ]
)

function deleteToDoElement(id: number){
  const indexDeleteToDo = ToDoValues.findIndex((Todo) => {
     return (Todo.id === id);
  })

  ToDoValues.splice(indexDeleteToDo, 1);
}

function modifyToDoElement(id: number){

  /*const indexDeleteToDo = ToDoValues.findIndex((Todo) => {
    return (Todo.id === id);
  })*/


}

</script>
