"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, mappedPlans } from "@/schema/userSchema";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
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

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />

        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" {...register("weight")} />

        <label htmlFor="plan">Plan</label>
        <select {...register("plan")} id="plan">
          {planOptions}
        </select>

        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(watch(), null, 2)}</div>
    </div>
  );
}
