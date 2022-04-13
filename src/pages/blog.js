import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My blog posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <h5>{node.frontmatter.Date}</h5>
            <p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </p>
          </article>
        );
      })}
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___Date, order: DESC }) {
      nodes {
        frontmatter {
          Date(formatString: "dddd, MMMM Do, yyyy")
          title
        }
        id
        body
      }
    }
  }
`;
