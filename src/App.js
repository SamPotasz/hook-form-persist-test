import { useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import useFormPersist from "react-hook-form-persist";

export default function App() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
  useFormPersist(
    "form2",
    { watch, setValue },
    {
      storage: window.localStorage // default window.sessionStorage
      //exclude: ['foo']
    }
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers />
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
