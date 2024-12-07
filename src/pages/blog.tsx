import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {graphql, PageProps} from "gatsby";

type DataProps = {
    allMdx: {
        nodes: {
            id: string
            frontmatter: {
                title: string
                date: string
            }
            excerpt: string
        }[]
    }
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage