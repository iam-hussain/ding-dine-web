import { z } from 'zod';

import { string } from './helpers';

export type SignInSchemaType = z.infer<typeof SignInSchema>;
export const SignInSchema = z.object({
  email: string({ type: 'email' }),
  password: string({ length: '6-20' }),
});

export const SignInReqSchema = z.object({
  body: SignInSchema,
});
