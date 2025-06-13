import { z } from "zod";

const plans = ["free", "basic", "medium", "premium"] as const;
export type Plans = (typeof plans)[number];
export const mappedPlans: { [key in Plans]: string } = {
  free: "Free",
  basic: "Basic",
  medium: "Medium",
  premium: "Pro",
};

export const userSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 6 char long")
    .max(10, "Name must be less than 10 char long"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Name must be at least 6 char long"),
  confirmPassword: z.string().min(6, "Name must be at least 6 char long"),
  weight: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), "Weight must be a number"),
  plan: z.enum(plans, {
    errorMap: () => ({ message: "Please select a plan" }),
  }),
});
