<template>
  <div class="col-md-6 offset-md-3">
    <form @submit.prevent="saveTask()" class="card card-body">
      <h1 class="text-center my-2">Create Task</h1>
      <input
        class="form-control m-1"
        v-model="task.title"
        type="text"
        placeholder="Title of task"
        autofocus
      />
      <textarea
        class="form-control m-1"
        v-model="task.description"
        rows="3"
        placeholder="Description of task"
      ></textarea>
      <button 
        class="btn btn-primary m-1 mx-auto"
        :disabled="!task.title || !task.description"
      >Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";

export default defineComponent({
  name: "TaskForm",
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    saveTask: async function () {
      const newTask = await createTask(this.task);
      console.log(newTask);
      this.$router.push({ name: "tasks" }); //redirecciona a la ruta /tasks (TaskList)
    },
  },
});
</script>