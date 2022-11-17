import type { Method } from 'axios'
import { done, start } from 'nprogress'
import { serverErrorHandler } from '~/utils/server-error-handler'
import http from '~/http'

export async function useAxios(
  url: string,
  params?: any,
  method: Method = 'GET',
) {
  start()

  try {
    const { data } = await http({ url, params, method })

    return data
  }
  catch (error: any) {
    console.error('useAxios ~ catch', error)
    serverErrorHandler(error.code)
  }
  finally {
    done()
  }
}
