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

      <BaseIcon
        class="absolute top-4 left-5"
        name="email"
      />
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

      <BaseIcon
        class="absolute top-4 left-5"
        name="password"
      />

      <BaseIcon
        class="absolute top-4 right-4 cursor-pointer"
        :name="currentPasswordIcon"
        @click="isPasswordShown = !isPasswordShown"
      />
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
import { object, string } from 'yup'
import { useField, useForm } from 'vee-validate'
import { PASSWORD_MIN_LENGTH } from '~/shared'

const emit = defineEmits(['submit'])

const validationSchema = object({
  email: string()
    .trim()
    .required('This field must not be empty')
    .email('Email is incorrect'),
  password: string()
    .trim()
    .required('This field must not be empty')
    .min(
      PASSWORD_MIN_LENGTH,
      `Length cannot be less than ${PASSWORD_MIN_LENGTH} characters`,
    ),
})

const { handleSubmit } = useForm({
  validationSchema,
})

const isPasswordShown = ref(false)
const inputType = computed(() => (isPasswordShown.value ? 'text' : 'password'))
const currentPasswordIcon = computed(() => {
  return !isPasswordShown.value
    ? 'eye-off'
    : 'eye-on'
})

const onSubmit = handleSubmit((values) => {
  emit('submit', values)
})

const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField('email')

const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField('password')
</script>
