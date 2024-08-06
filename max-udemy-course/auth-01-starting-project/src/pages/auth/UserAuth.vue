<template>
  <div>
    <BaseDialog
      :show="!!store.getters.authError"
      title="An error occurred"
      @close="resetAuthError"
    >
      <p>{{ store.getters.authError }}</p>
    </BaseDialog>
    <BaseDialog
      :show="store.getters.isAuthLoading"
      title="Authenticating..."
      fixed
    >
      <BaseSpinner />
    </BaseDialog>
    <base-card>
      <form @submit.prevent="handleSubmit">
        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model.trim="formData.email"
            @focus="resetValidation"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="formData.password"
            @focus="resetValidation"
          />
        </div>
        <div class="buttons">
          <base-button>{{ buttonCaption }}</base-button>
          <base-button type="button" mode="flat" @click="switchMode">{{
            SwitchButtonCaption
          }}</base-button>
        </div>

        <p v-if="!formData.isFormValid" style="color: red">
          Please enter a valid email and a password with at least 6 characters.
        </p>
      </form>
    </base-card>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const formData = reactive({
  email: '',
  password: '',
  mode: 'login',
  isFormValid: true,
});

const handleSubmit = () => {
  formData.isFormValid = true;
  if (
    formData.email === '' ||
    !formData.email.includes('@') ||
    formData.password.length < 6
  ) {
    formData.isFormValid = false;
    return;
  }

  if (formData.mode === 'login') {
    store.dispatch('login', {
      email: formData.email,
      password: formData.password,
    });
  } else {
    store.dispatch('signup', {
      email: formData.email,
      password: formData.password,
    });
  }
};

const resetValidation = () => (formData.isFormValid = true);

const switchMode = () =>
  (formData.mode = formData.mode === 'login' ? 'signup' : 'login');

const buttonCaption = computed(() =>
  store.getters.isAuthLoading
    ? 'Submitting...'
    : formData.mode === 'login'
    ? 'Login'
    : 'Signup'
);

const SwitchButtonCaption = computed(
  () => `${formData.mode === 'login' ? 'Signup' : 'Login'} Instead`
);

const resetAuthError = () => store.commit('resetAuthError');
</script>

<style scoped>
form {
  border: none;
  padding: 0;
}

.buttons {
  margin-top: 20px;
}
</style>
