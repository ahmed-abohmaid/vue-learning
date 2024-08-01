<template>
  <RouterView v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <Component :is="Component" />
    </transition>
  </RouterView>

  <!-- <div class="container">
    <UsersList />
  </div>
  <div class="container">
    <div class="block"></div>
    <button>Animate</button>
  </div>
  <base-modal @close="hideDialog" :isVisible="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <transition name="para">
      <p v-if="togglePara">Paragraph toggled...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div> -->
</template>

<script>
import { RouterView } from 'vue-router';
// import UsersList from './components/UsersList.vue';

export default {
  components: {
    // UsersList,
    RouterView,
  },
  data() {
    return { dialogIsVisible: false, togglePara: false };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.togglePara = !this.togglePara;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.para-enter-from,
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active,
.route-enter-active {
  transition: all 0.3s ease-out;
}

.para-enter-to,
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active,
.route-leave-active {
  transition: all 0.2s ease-in;
}

.para-leave-to,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
