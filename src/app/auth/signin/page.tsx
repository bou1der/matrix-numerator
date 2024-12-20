"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { OnError } from "~/lib/client/on_error";

export default function SignInPage() {
  const loginSchema = z.object({
    email: z
      .string({
        message: "Email обязателен для ввода",
      })
      .email({
        message: "Неверный формат Email",
      }),
    password: z
      .string({
        message: "Пароль обязателен для ввода",
      })
      .min(8, "Пароль должен содержать не менее 8 символов"),
  });

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {} as z.infer<typeof loginSchema>,
  });

  async function OnSubmit<
    P extends "credentials" | "email" | "google" | "github" | "yandex",
  >({
    provider,
    data,
  }: {
    provider: P;
    data: P extends "email"
      ? Omit<z.infer<typeof loginSchema>, "password">
      : P extends "credentials"
        ? z.infer<typeof loginSchema>
        : undefined;
  }) {
    try {
      const res = await signIn(provider, {
        redirect: false,
        ...data,
      });
      if (res?.error) {
        throw new Error(res.error);
      }

      router.push("/admin");
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  return (
    <div className="mx-auto h-screen container flex items-center justify-center">
      <div className="rounded-xl shadow-xl border-2 border-input p-6 space-y-6 flex flex-col min-w-[min(80vw,400px)]">
        <h1 className="text-2xl font-medium">Вход</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              OnSubmit({ provider: "credentials", data });
            }, OnError)}
            className="space-y-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Пароль"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
            >
              Войти
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

