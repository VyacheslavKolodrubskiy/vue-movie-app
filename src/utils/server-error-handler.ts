import { useNotification } from '~/composables/useNotification'

const { setMessage } = useNotification()

const errors: Record<string, string> = {
  'auth/invalid-email': 'Invalid Email',
  'auth/user-not-found': 'No account with that email was found',
  'auth/wrong-password': 'Incorrect password',
  'ERR_BAD_REQUEST': 'Page not found',
}

export function serverErrorHandler(error: string) {
  setMessage(errors[error] || 'Unhandled server error')
}
