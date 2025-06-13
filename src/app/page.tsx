"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, mappedPlans, Plans } from "@/schema/userSchema";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  weight: string;
  plan: Plans;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const planOptions = Object.entries(mappedPlans).map(([key, value]) => (
    <option value={key} key={`plan-${key}`}>
      {value}
    </option>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email?.message && <p>{errors.email?.message}</p>}

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password?.message && <p>{errors.password?.message}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}

        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" {...register("weight")} />
        {errors.weight?.message && <p>{errors.weight?.message}</p>}

        <label htmlFor="plan">Plan</label>
        <select {...register("plan")} id="plan">
          {planOptions}
        </select>
        {errors.plan?.message && <p>{errors.plan?.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
