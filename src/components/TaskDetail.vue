<template>
  <h1>Task Detail</h1>
  <form @submit.prevent="handleUpdate(currentTask._id)">
    <input
      v-model="currentTask.title"
      type="text"
    />
    <textarea
      v-model="currentTask.description"
      rows="3"
    ></textarea>
    <button>Update</button>
  </form>
  <button @click="handleDelete(currentTask._id)">Delete</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Task } from '@/interfaces/Task'
import { getTask, updateTask, deleteTask } from '@/services/TaskService'

export default defineComponent({
  name: "TaskDetail",
  data() {
    return {
      currentTask: {} as Task
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id)
      this.currentTask = res.data.data
      console.log(res.data.data)
      console.log(this.currentTask)
    },
    async handleUpdate(id: string) {
      const updatedTask = await updateTask(id, this.currentTask)
      console.log(updatedTask)
      this.$router.push({ name: "tasks"} ); //redirecciona a la ruta /tasks (TaskList)
    },
    async handleDelete(id: string) {
      //const deletedTask = await deleteTask(id)
      //console.log(deletedTask)
      await deleteTask(id)
      this.$router.push({ name: "tasks"} );
    }
  },
  mounted() { // Cuando se monte el componente se carga lo que tiene en la URL (params)
    if(typeof this.$route.params.id === "string"){
      this.loadTask(this.$route.params.id)
    }
  }
})
</script>
