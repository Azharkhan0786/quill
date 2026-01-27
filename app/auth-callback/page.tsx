'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '@/app/_trpc/client'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AppRouter } from '@/server/api/root'

const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

  trpc.auth.callback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `/${origin}` : '/dashboard')
      }
    },

    onError: (err: TRPCClientErrorLike<AppRouter>) => {
      if (err.data?.code === 'UNAUTHORIZED') {
        router.push('/sign-in')
      }
    },

    retry: true,
    retryDelay: 500,
  })

  return <div>page</div>
}

export default Page
