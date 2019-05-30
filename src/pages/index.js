import { graphql } from 'gatsby'
import React from 'react'
import TextBlock from '../core/blocks/TextBlock'
// import SponsorsBlock from '../core/blocks/SponsorsBlock'
import Logo from 'core/components/Logo'

const Introduction = ({ data }) => (
    <>
        <Logo size="l" />
        <TextBlock text={data.introduction.html} />
        {/* <SponsorsBlock /> */}
    </>
)

export default Introduction

export const query = graphql`
    query introByLocale($locale: String!) {
        introduction: markdownRemark(
            frontmatter: {
                type: { eq: "introduction" }
                page: { eq: "introduction" }
                locale: { eq: $locale }
            }
        ) {
            html
        }
    }
`
