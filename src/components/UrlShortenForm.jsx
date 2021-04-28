import React from "react";
import Button from "./Button";

const UrlShortenForm = () => {
  return (
    <form>
      <input
        name="url"
        type="text"
        placeholder="Make your links shorter"
        required
      />
      <input name="slug" type="text" placeholder="Customize your link" />
      <Button type="submit">Shorten URL</Button>
    </form>
  );
};

export default UrlShortenForm;
