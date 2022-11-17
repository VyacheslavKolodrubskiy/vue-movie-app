const messages = ref<string[]>([])

export function useNotification() {
  function setMessage(message: string) {
    messages.value.push(message)

    if (messages.value.length) {
      setTimeout(() => {
        messages.value.shift()
      }, 3500)
    }
  }

  return { setMessage, messages }
}
