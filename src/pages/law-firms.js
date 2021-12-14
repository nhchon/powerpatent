import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby';


const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3MTc4") {
      uri
      title
      slug
      lawfirms {
        forlawyerstext
        forlawyerssubheading
        forlawyersbigtext
        forlawyersvideo {
          id
          link
        }
        banner {
          altText
          link
          uri
        }
      }
    }
  }
}
  `
const Lawfirms = () => {
    const data = useStaticQuery(getdata);
    const common = data.wpgraphql.page.lawfirms;
    return (
        <>
            <Layout>
                <SEO title="Law-Firm" />
                <section className="mainSection">
                    <figure className="banner-main">
                        <img src={common.banner.link} alt="banner" />
                    </figure>
                </section>
                <section className="mainSpacing">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-md-12 mb-5 text-center">
                                <h2>{common.forlawyerstext}</h2>
                                <h3>{common.forlawyerssubheading}</h3>
                            </div>
                            <div className="col-md-9 text-center mb-5">
                                <div class="ratio ratio-16x9"><iframe src="https://player.vimeo.com/video/646478178?h=fe6e877622" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mainSpacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 align-self-center mb-4">
                                <div dangerouslySetInnerHTML={{ __html: common.forlawyersbigtext }} />
                            </div>
                            <div className="col-md-6 align-self-center mb-4">
                                <figure>
                                    <img src={common.forlawyersvideo.link} className="w-100" alt="law" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mainSpacing">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <article>
                                        <h3>JOIN POWERPATENT</h3>
                                        <p>Get in touch to discuss plans and pricing</p>
                                    </article>
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <Button variant="primary" className="m-2 videobtn"><Link to="https://calendly.com/patentpc/30min" target="_blank">Request a Demo</Link></Button>
                                        <Button variant="primary" className="m-2 videobtn"><Link to="/videos">Take a video tour</Link></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
export default Lawfirms
