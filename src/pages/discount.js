import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import SEO from "../components/seo";

const getdata = graphql`
{
  wpgraphql {
    page(id: "cG9zdDo3MzQy") {
      title
      content
      discountProgram {
        main {
          heading
          paragraph
          image {
            guid
            title
          }
        }
        banner {
          guid
          title
        }
      }
    }
  }
}
`
const Discount = () => {
    const data = useStaticQuery(getdata);
    const common = data.wpgraphql.page;
    const disProgram = common.discountProgram;
    const dpMain = common.discountProgram.main;
    return (
        <>
            <Layout>
                <SEO title="Law-Firm" />
                <figure className="banner-main">
                    <img src={disProgram.banner.guid} alt={disProgram.banner.title} />
                </figure>
                <section className="mainSpacing">
                    <div className="container">
                        <div className="row">
                            {dpMain.map(e => {
                                return (
                                    <div className="col-md-4 text-center mb-4">
                                        <div className="border p-3 h-100">
                                            <figure className="discount-logo">
                                                <img src={e.image.guid} alt={e.image.title} />
                                            </figure>
                                            <h5 style={{ minHeight: "50px" }}>{e.heading}</h5>
                                            <p>{e.paragraph}</p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
export default Discount