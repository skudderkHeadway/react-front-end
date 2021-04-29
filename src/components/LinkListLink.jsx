import React from "react";

const LinkListLink = ({ link }) => {
  return (
    <div>
      <div>URL: {link.url}</div>
      <div>Slug: {link.slug}</div>
    </div>
  );
};

export default LinkListLink;
