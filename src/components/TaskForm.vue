<template>
  <h1>Create Task</h1>
  <form @submit.prevent="saveTask()">
    <input
      v-model="task.title"
      type="text"
      placeholder="Title of task"
    />
    <textarea
      v-model="task.description"
      rows="3"
      placeholder="Description of task"
    ></textarea>
    <button>Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Task } from '@/interfaces/Task'
import { createTask } from '@/services/TaskService'

export default defineComponent({
  name: "TaskForm",
  data() {
    return {
      task: {} as Task
    };
  },
  methods: {
    saveTask: async function() {
      console.log(this.task)
      const newTask = await createTask(this.task)
      console.log(newTask)
    }
  }
})
</script>
