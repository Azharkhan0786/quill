

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { publicProcedure, router } from './trpc'
import { TRPCError } from '@trpc/server'
import { db } from '@/db/index'

export const appRouter = router({
  auth: router({
    callback: publicProcedure.query(async () => {
      const { getUser } = getKindeServerSession()
      const user = await getUser()

      if (!user?.id || !user?.email) 
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'User is not authenticated',
        })

        //check if the user is in the database
       
      

      return { success: true }
    }),
  }),
})

export type AppRouter = typeof appRouter
