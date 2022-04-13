import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      <ul>
        {data.allFile.nodes.map((node, index) => {
          return <li key={index}>{node.name}</li>;
        })}
      </ul>
      <p>Hi, I am on the blog page</p>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query PostList {
    allFile {
      nodes {
        name
      }
    }
  }
`;
