import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInSchemaType } from "@iam-hussain/qd-copilot";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import fetcher from "@/lib/fetcher";
import Typography from "../atoms/typography";

const defaultValues: Partial<SignInSchemaType> = {
  email: "",
  password: "",
};

function LoginForm({ onSuccess }: { onSuccess?: (token: string) => void }) {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues,
    mode: "onSubmit",
  });
  const { control, handleSubmit, setError, formState } = form;
  const { isDirty, isSubmitting, errors } = formState;

  const mutation = useMutation({
    mutationFn: (body) =>
      fetcher.post("/authentication/sign-in", { body, setError }),
    onSuccess: async (data: any) => {
      if (data?.access_token && onSuccess) {
        onSuccess(data.access_token);
      }
    },
  });

  async function onSubmit(variables: SignInSchemaType) {
    return await mutation.mutateAsync(variables as any);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  autoComplete="new-password"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-4">
          <Button
            className="w-full"
            type="submit"
            disabled={!isDirty || isSubmitting || mutation.isPending}
          >
            Sign In
          </Button>
          {errors.root && (
            <Typography variant={"error"}>{errors.root.message}</Typography>
          )}
        </div>
      </form>
    </Form>
  );
}

export default LoginForm;
