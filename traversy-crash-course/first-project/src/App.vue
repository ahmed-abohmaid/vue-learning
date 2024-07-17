<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards/HomeCards.vue";
import JobListings from "@/components/JobListings/JobListings.vue";
</script>

<template>
  <Navbar />
  <Hero subtitle="Find the Vue job that fits your skills and needs" />
  <HomeCards />
  <JobListings :limit="3" :show-btn="true" />
</template>
