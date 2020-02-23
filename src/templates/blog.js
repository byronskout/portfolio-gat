import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Date from "../components/date";

export default function({ data }) {
    return (
        <Layout>
            <div className="container">
                <article className="blog-post">
                    {data.markdownRemark.frontmatter.banner != null && (
                        <div className="banner">
                            <Img
                                fluid={
                                    data.markdownRemark.frontmatter.banner
                                        .childImageSharp.fluid
                                }
                            />
                        </div>
                    )}
                    <div className="head text-primary">
                        <h1>{data.markdownRemark.frontmatter.title}</h1>
                        <p className="post-date">
                            <Date data={data.markdownRemark.frontmatter.date} />
                        </p>
                    </div>
                    <div className="content row flex">
                        <div
                            className="col s12 m11 l10"
                            dangerouslySetInnerHTML={{
                                __html: data.markdownRemark.html
                            }}
                        ></div>
                    </div>
                </article>
            </div>
        </Layout>
    );
}