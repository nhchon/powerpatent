import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";

const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3MjYz") {
      about {
        content
        fieldGroupName
        banner {
          title
          guid
        }
      }
    }
  }
}
`
const About = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.about
  return (
    <>
      <Layout>
        <SEO title="About" />
        <figure className="banner-main">
          <img src={common.banner.guid} alt="banner" />
        </figure>
        <div className="card-text" dangerouslySetInnerHTML={{ __html: common.content }} />
      </Layout>
    </>
  )
}
export default About