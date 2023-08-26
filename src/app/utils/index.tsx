// src/utils.js
import { createClient } from "contentful";
import { Header, ReturnHeader } from "../models/header.model";

const client = createClient({
  space: "7hb2pz5v2o46",
  accessToken: "JX4vKYdoukE8tkxp5IyhfYbNBwvPdP1upXhd77ANEqM",
});

// Retrieve the list of blog posts from Contentful
export const getHeader = async (): Promise<Header> => {
  const response = (await client.getEntries({
    content_type: "header",
  })) as unknown as ReturnHeader;

  console.log(response);

  return {
    icon: response.items[0].fields.icon.fields,
    categories: response.items[0].fields.categories.fields,
  };
};
