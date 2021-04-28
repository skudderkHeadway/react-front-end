import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const UrlShortenForm = () => {
  const { register, watch } = useForm({ mode: "all" });
  console.log(watch());

  return (
    <form>
      <input
        className="text-black"
        type="text"
        placeholder="Make your links shorter"
        required
        {...register("url", { required: true })}
      />
      <input name="slug" type="text" placeholder="Customize your link" />
      <Button type="submit" theme="primary">
        Shorten URL
      </Button>
    </form>
  );
};

export default UrlShortenForm;
