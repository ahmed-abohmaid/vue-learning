<script setup>
import { onMounted, ref } from "vue";

const name = ref("Hello World");
const tasks = ref([
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: true,
  },
  {
    id: 3,
    title: "Task 3",
    completed: false,
  },
]);

const addTask = () => {
  tasks.value.push({ id: 4, title: "Task 4", completed: false });
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <h1>{{ name }}</h1>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
  </ul>
  <button @click="addTask">Add Task</button>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>
