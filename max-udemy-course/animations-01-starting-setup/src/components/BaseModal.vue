<template>
  <div class="backdrop" @click="$emit('close')" v-if="isVisible"></div>
  <transition
    name="modal"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    @enter-cancelled="onEnterCancelled"
    @leave-cancelled="onLeaveCancelled"
  >
    <dialog open v-if="isVisible">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['isVisible'],
  emits: ['close'],
  data() {
    return {
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        if (round < 10) {
          el.style.opacity = round * 0.1;
          round++;
        } else {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 10;
      this.leaveInterval = setInterval(() => {
        if (round > 1) {
          el.style.opacity = round * 0.1;
          round--;
        } else {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    onEnterCancelled() {
      clearInterval(this.enterInterval);
    },
    onLeaveCancelled() {
      clearInterval(this.leaveInterval);
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}

/* .modal-enter-active {
  animation: fade-scale 0.3s ease-out;
}

.modal-leave-active {
  animation: fade-scale 0.2s ease-in reverse;
} */

@keyframes fade-scale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
