import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Blogpost from "./../components/blogspot";
import { blog } from "../interface";
import Blogdetail from './../components/blogspot';


const blogs = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
    edges {
      node {
        title
        slug
        author
        createdAt(formatString: "")
        id
        featuredImage {
          fluid {
            src
          }
        }
        excerpt {
          excerpt
        }
      }
    }
  }
       }
     `
  );

  

  return (
    <div style={{display:"flex", justifyContent: "space-between", margin: "50px 50px"}} >
      {data.allContentfulBlogPost.edges.map((blog: blog) => {
        return (
          <div key = {blog.node.id} style={{display: "inline-block"}}>
              <Blogpost detail={blog.node} 
              />
          </div>
        );
      })}
    </div>
  );
};

export default blogs;