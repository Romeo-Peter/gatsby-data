import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function myFiles({ data }) {
  return (
    <Layout>
      <div>
        <h1>My site files</h1>
        <table>
          <thead>
            <tr>
              <td>Relative Path</td>
              <td>Size</td>
              <td>Extension</td>
              <td>birthTime</td>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
