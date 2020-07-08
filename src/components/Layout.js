import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link
        to={`/my-files/`}
        css={css`
          float: right;
        `}
      >
        My files
      </Link>
      <Link to="/">
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          margin-right: 10px;
        `}
      >
        About
      </Link>

      {children}
    </div>
  )
}
