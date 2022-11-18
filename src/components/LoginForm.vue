<template>
  <h2 class="mb-5 text-[64px] font-semibold text-secondary">
    Login
  </h2>
  <div class="mb-4 space-y-1 text-xl text-primary">
    <p>Use email : demo@test.com</p>
    <p>password : c6a^2#zAE49B</p>
  </div>
  <form
    class="mb-10 space-y-4"
    @submit.prevent="onSubmit"
  >
    <div class="relative">
      <BaseInput
        v-model="email"
        autocomplete="on"
        :class="{ 'border-red-500 focus:ring-0': emailError }"
        placeholder="Email"
        type="email"
        @blur="emailBlur"
      />
      <small
        v-if="emailError"
        class="text-red-500"
      >{{ emailError }}</small>

      <img
        alt="Email"
        class="absolute top-4 left-5"
        height="24"
        src="../assets/images/icons/email.svg"
        width="24"
      >
    </div>

    <div class="relative">
      <BaseInput
        v-model="password"
        autocomplete="on"
        class="pr-14"
        :class="{ 'border-red-500 focus:ring-0': passwordError }"
        placeholder="Password"
        :type="inputType"
        @blur="passwordBlur"
      />

      <small
        v-if="passwordError"
        class="text-red-500"
      >{{ passwordError }}</small>

      <img
        alt="Password key"
        class="absolute top-4 left-5"
        height="24"
        src="../assets/images/icons/password.svg"
        width="24"
      >

      <img
        class="absolute top-4 right-4 cursor-pointer"
        height="24"
        width="24"
        v-bind="currentIcon"
        @click="isPasswordShown = !isPasswordShown"
      >
    </div>

    <BaseButton
      class="w-full"
      type="submit"
    >
      Login
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { string } from 'yup'
import { useField, useForm } from 'vee-validate'
import eyeOff from '../assets/images/icons/eye-off.svg'
import eyeOn from '../assets/images/icons/eye-on.svg'
import { PASSWORD_MIN_LENGTH } from '~/constants'

const emit = defineEmits(['submit'])

const { handleSubmit } = useForm()

const isPasswordShown = ref(false)
const inputType = computed(() => (isPasswordShown.value ? 'text' : 'password'))
const currentIcon = computed(() => {
  const iconAttrs = !isPasswordShown.value
    ? { alt: 'Eye password off', src: eyeOff }
    : { alt: 'Eye password on', src: eyeOn }

  return iconAttrs
})

const onSubmit = handleSubmit((values) => {
  emit('submit', values)
})

const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField(
  'email',
  string()
    .trim()
    .required('This field must not be empty')
    .email('Email is incorrect'),
)

const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField(
  'password',
  string()
    .trim()
    .required('This field must not be empty')
    .min(
      PASSWORD_MIN_LENGTH,
      `Length cannot be less than ${PASSWORD_MIN_LENGTH} characters`,
    ),
)
</script>
