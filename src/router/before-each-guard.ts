import { onAuthStateChanged } from 'firebase/auth'
import { start } from 'nprogress'
import type { Router } from 'vue-router'
import { auth } from '~/firebase'
import { Pages } from '~/shared'

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}

export function beforeEachGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    const currentUser = await getCurrentUser()

    if (to.path !== from.path)
      start()

    if (to.name !== Pages.Auth) {
      if (!currentUser)
        return { name: Pages.Auth }
    }
    else if (to.name === Pages.Auth && currentUser) {
      return { name: Pages.Home }
    }
  })
}
