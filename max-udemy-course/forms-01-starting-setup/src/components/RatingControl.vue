<script setup>
import { defineEmits, defineProps } from 'vue';

defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const handleClick = (value) => {
  emit('update:modelValue', value);
};
</script>

<template>
  <ul class="rating-control">
    <li :class="{ active: modelValue === 'poor' }">
      <button @click="handleClick('poor')" type="button">poor</button>
    </li>
    <li :class="{ active: modelValue === 'fair' }">
      <button @click="handleClick('fair')" type="button">fair</button>
    </li>
    <li :class="{ active: modelValue === 'good' }">
      <button @click="handleClick('good')" type="button">good</button>
    </li>
  </ul>
</template>

<style scoped>
.rating-control {
  display: flex;
  list-style: none;
  padding: 0;
}

.rating-control li {
  margin-right: 0.5rem;
}

.rating-control button {
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.rating-control button:hover {
  background-color: #f0f0f0;
}

.rating-control .active {
  background-color: #0076bb;
  color: white;
}

.rating-control .active:hover {
  background-color: #005c8b;
}

.rating-control .active button {
  background-color: #0076bb;
  color: white;
}

.rating-control .active button:hover {
  background-color: #005c8b;
}
</style>
