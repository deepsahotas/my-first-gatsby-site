import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <h5>Posted on: {node.frontmatter.Date}</h5>
            <p>
              Author:- <i>{node.frontmatter.author}</i>
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
          author
        }
        id
        slug
      }
    }
  }
`;
