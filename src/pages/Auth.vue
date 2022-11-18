<template>
  <div class="flex justify-between lg:flex-col lg:items-center">
    <picture>
      <source
        srcset="../assets/images/auth-image.webp"
        type="image/webp"
      >
      <img
        alt="Authorization"
        class="object-cover"
        height="584"
        src="../assets/images/auth-image.png"
        width="486"
      >
    </picture>
    <div class="w-full max-w-[486px]">
      <LoginForm @submit="handleSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Pages } from '~/enums'
import { auth } from '~/firebase'
import { serverErrorHandler } from '~/utils'
import { useNotification } from '~/composables'

interface FormFields {
  email: string
  password: string
}

const { push } = useRouter()
const { setMessage } = useNotification()

async function handleSubmit({ email, password }: FormFields) {
  try {
    await signInWithEmailAndPassword(auth, email, password)

    push({ name: Pages.Home })
    setMessage('Authorization was successful')
  }
  catch (error: any) {
    console.error('handleSubmit ~ catch', error)
    serverErrorHandler(error.code)
  }
}
</script>
