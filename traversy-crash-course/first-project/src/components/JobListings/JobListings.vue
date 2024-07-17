<script setup>
import { RouterLink } from "vue-router";
import { onMounted, reactive } from "vue";
import JobListing from "./JobListing.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

const props = defineProps({
  limit: Number,
  showBtn: {
    type: Boolean,
    default: false,
  },
});
const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/jobs", {
      params: {
        _limit: props.limit,
      },
    });
    state.jobs = response.data;
  } catch (error) {
    console.error("Error fetching jobs");
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <Spinner v-if="state.isLoading" />
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in state.jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showBtn" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
