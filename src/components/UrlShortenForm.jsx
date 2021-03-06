import React from "react";
import { useForm } from "react-hook-form";
import { isValidUrl, isValidSlug } from "../util/url";
import Button from "./Button";
import ErrorMsg from "./ErrorMsg";
import FormItem from "./FormItem";
import TextInput from "./TextInput";

const UrlShortenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "all" });

  const doSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      <FormItem>
        <TextInput
          placeholder="Make your links shorter"
          required
          hasError={errors?.url}
          aria-label="URL to shorten"
          {...register("url", { required: true, validate: isValidUrl })}
        />
        {errors?.url?.type === "required" && (
          <ErrorMsg>Don't forget to enter a URL to shorten.</ErrorMsg>
        )}
        {errors?.url?.type === "validate" && (
          <ErrorMsg>Please enter a valid URL.</ErrorMsg>
        )}
      </FormItem>
      <FormItem>
        <TextInput
          className="text-black"
          // type="text"
          placeholder="Customize your link"
          aria-label="Custom text for your shortened link"
          {...register("slug", {
            validate: (value) => {
              return !value || isValidSlug(value);
            }
          })}
          // TODO: disallow entering non-alphanumeric characters instead of giving error after the fact?
        />
        {errors?.slug?.type === "validate" && (
          <ErrorMsg>
            Please enter only letters and numbers (no spaces or other
            characters).
          </ErrorMsg>
        )}
      </FormItem>
      <Button type="submit" theme="primary">
        Shorten URL
      </Button>
    </form>
  );
};

export default UrlShortenForm;
