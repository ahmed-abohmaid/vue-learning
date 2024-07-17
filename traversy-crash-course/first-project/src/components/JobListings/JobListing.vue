<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";

const props = defineProps({
  job: Object,
});
const { type, title, location, salary, description, id } = props.job;

const showFullDesc = ref(false);

const toggleDesc = () => {
  showFullDesc.value = !showFullDesc.value;
};

const truncatedDesc = computed(() => {
  let desc = description;
  if (!showFullDesc.value) {
    desc = desc.slice(0, 90) + "...";
  }

  return desc;
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ type }}</div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>

      <div class="mb-5">
        <span>
          {{ truncatedDesc }}
        </span>
        <button
          @click="toggleDesc"
          class="text-green-500 hover:text-green-600 mb-3 ml-1"
        >
          {{ showFullDesc ? "Less" : "More" }}
        </button>
      </div>

      <div class="self-end">
        <h3 class="text-green-500 mb-2">{{ salary }} / Year</h3>

        <div class="border border-gray-100 mb-5"></div>

        <div class="flex flex-col lg:flex-row justify-between mb-4">
          <div class="text-orange-700 mb-3">
            <i class="pi pi-map-marker"></i>
            {{ location }}
          </div>
          <RouterLink
            :to="'/job/' + id"
            class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
