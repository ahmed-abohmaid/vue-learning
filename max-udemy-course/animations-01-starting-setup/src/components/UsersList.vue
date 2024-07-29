<template>
  <transition-group tag="ul" name="users">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
      this.$refs.userNameInput.value = '';
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.users-enter-from {
  opacity: 0;
  transform: translateX(-35px);
}

.users-enter-active {
  transition: all 1s ease-out;
}

.users-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.users-enter-to,
.users-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.users-leave-to {
  opacity: 0;
  transform: translateX(35px);
}

.users-move {
  transition: transform 1s ease;
}
</style>
