import * as React from 'react'
import Layout from "../components/layout";

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>Welcome to my blog!</p>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage