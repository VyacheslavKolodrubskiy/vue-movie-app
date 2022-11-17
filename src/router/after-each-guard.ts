import { done } from 'nprogress'
import type { Router } from 'vue-router'

export function afterEachGuard(router: Router) {
  router.afterEach(() => {
    done()
  })
}
