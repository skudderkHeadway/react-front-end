import React from "react";
import { gql, useQuery } from "@apollo/client";
import LinkListLink from "./LinkListLink";

const LinkList = () => {
  const ALL_LINKS_QUERY = gql`
    query {
      allLinks {
        id
        url
        slug
      }
    }
  `;

  const { loading, error, data } = useQuery(ALL_LINKS_QUERY);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Oops! There was an error. Please try again later.</div>}
      {/* TODO: more detailed error handling/messaging */}
      {data?.allLinks &&
        data.allLinks.map((link) => <LinkListLink link={link} key={link.id} />)}
    </div>
  );
};

export default LinkList;
