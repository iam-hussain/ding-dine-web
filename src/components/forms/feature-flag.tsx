import { getFeatureFlagForm } from "@iam-hussain/qd-copilot";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

import { Button } from "@/components/atoms/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/atoms/form";
import { Switch } from "@/components/atoms/switch";
import fetcher from "@/lib/fetcher";
import { RootState } from "@/store";
import Typography from "@/components/atoms/typography";

export function FeatureFlagForm() {
  const featureFlags = useSelector(
    (state: RootState) => state.base.featureFlags
  );

  console.log({ featureFlags });

  const featureFlagsFormData = getFeatureFlagForm(featureFlags);

  const form = useForm({
    defaultValues: featureFlags,
  });

  const { setError, formState } = form;
  const { isDirty, isSubmitting, errors } = formState;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (body) =>
      fetcher.patch(`/store/feature-flags`, { body, setError }),
    onSuccess: async (data: any) => {
      form.reset(data);
      await queryClient.invalidateQueries({ queryKey: ["store"] });
      toast.success(`Store feature flags are updated successfully! 🚀`);
    },
  });

  async function onSubmit(variables: any) {
    return await mutation.mutateAsync(variables);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Feature Flags</h3>
          <div className="space-y-4">
            {featureFlagsFormData.map((each) => (
              <FormField
                control={form.control}
                key={each.key}
                name={each.key}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between gap-2 p-3 border rounded-lg shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>{each.label}</FormLabel>
                      {each.info && (
                        <FormDescription
                          dangerouslySetInnerHTML={{
                            __html: each.info,
                          }}
                        />
                      )}
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
        <Button
          className="w-full md:w-auto"
          type="submit"
          disabled={!isDirty || isSubmitting || mutation.isPending}
        >
          Save
        </Button>
        {errors.root && (
          <Typography variant={"error"}>{errors.root.message}</Typography>
        )}
      </form>
    </Form>
  );
}
