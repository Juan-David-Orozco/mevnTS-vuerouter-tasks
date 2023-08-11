<template>
  <div class="col-md-8 offset-md-2">
    <div class="row">
      <div class="col-sm-9">
        <h1 class="text-center my-2">Task Detail</h1>
      </div>
      <div class="col-sm-3 m-auto text-center">
        <button class="btn btn-danger btn-sm m-1" @click="handleDelete()">Delete</button>
      </div>
    </div>
    <form @submit.prevent="handleUpdate(currentTask._id)" class="card card-body">
      <input
        class="form-control m-1"
        v-model="currentTask.title"
        type="text"
      />
      <textarea
        class="form-control m-1"
        v-model="currentTask.description"
        rows="3"
      ></textarea>
      <button class="btn btn-info m-1 mx-auto">Update</button>
    </form>
  </div>
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
      console.log(res)
      console.log(this.currentTask)
    },
    async handleUpdate(id: string) {
      const updatedTask = await updateTask(id, this.currentTask)
      console.log(updatedTask)
      this.$router.push({ name: "tasks"} ); //redirecciona a la ruta /tasks (TaskList)
    },
    async handleDelete() {
      if(typeof this.$route.params.id === "string"){
        await deleteTask(this.$route.params.id)
        this.$router.push({ name: "tasks"} );
      }
    }
  },
  mounted() { // Cuando se monte el componente se carga lo que tiene en la URL (params)
    if(typeof this.$route.params.id === "string"){
      this.loadTask(this.$route.params.id)
    }
  }
})
</script>
