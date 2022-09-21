<template>
  <h1>Task List</h1>
  <ul>
    <li
      style="border: 1px solid"
      v-for="(task, index) in tasks"
      :key="index"
      @click="this.$router.push(`/tasks/${task._id}`)"
    >
      {{task.title}}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getTasks } from '@/services/TaskService'
import { Task } from '@/interfaces/Task'

export default defineComponent({
  name: "TaskList",
  data() {
    return {
      tasks: [] as Task[]
    }
  },
  methods: {
    async loadTasks() {
      const res = await getTasks()
      this.tasks = res.data.data //Tener en cuenta el tipo de datos asignados a this.task
      console.log(this.tasks)
    }
  },
  mounted() {
    this.loadTasks()
  }
})
</script>
