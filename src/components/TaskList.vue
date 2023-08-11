<template>
  <h1>Task List</h1>
  <ul class="list-group">
    <li
      style="cursor: pointer"
      class="list-group-item list-group-item-action my-1 bg-dark text-white"
      v-for="(task, index) in tasks"
      :key="index"
      @click="this.$router.push(`/tasks/${task._id}`)"
    >
      <div>
        <p class="my-2">
          <strong> {{ index + 1 }}.</strong>
          <span> {{ task.title }} </span>
        </p>
        <p>Fecha Creación: {{ task.createdAt }}</p>
        <p>Fecha Actualización :{{ task.updatedAt }}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTasks } from "@/services/TaskService";
import { Task } from "@/interfaces/Task";

export default defineComponent({
  name: "TaskList",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      console.log(res);
      this.tasks = res.data.data; //Tener en cuenta el tipo de datos asignados a this.task
      console.log(this.tasks);
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>