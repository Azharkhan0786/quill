// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
// import { publicProcedure, router } from '/trpc';
// import { TRPCError } from '@trpc/server';

// export const appRouter = router({
//     authcallback:publicProcedure.query(()=>{
//         const{getUser} = getKindeServerSession();
//         const user = getUser();

//         if(!user.id || !user.email)
//             throw new TRPCError({code:'UNAUTHORIZED', message:'User is not authenticated'})
        
//     })
 
// });

// export type AppRouter = typeof appRouter;

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { publicProcedure, router } from './trpc'
import { TRPCError } from '@trpc/server'

export const appRouter = router({
  auth: router({
    callback: publicProcedure.query(async () => {
      const { getUser } = getKindeServerSession()
      const user = await getUser()

      if (!user?.id || !user?.email) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'User is not authenticated',
        })
      }

      return { success: true }
    }),
  }),
})

export type AppRouter = typeof appRouter
