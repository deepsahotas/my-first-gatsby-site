import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h5>{data.mdx.frontmatter.Date}</h5>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        Date(formatString: "dddd, MMMM D, YYYY")
      }
      body
    }
  }
`;
