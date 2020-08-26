import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Logo = ({ className }) => {
  const logo = useStaticQuery(graphql`
    {
      allWordpressPage(limit: 1) {
        edges {
          node {
            page_logo_src {
              source_url
              alt_text
            }
          }
        }
      }
    }
  `);

  // styling example
  const LogoWrap = styled.img`
    order: 2;
  `;

  return (
    <LogoWrap
      className={className}
      src={
        process.env.GATSBY_SOURCE_URL +
        logo.allWordpressPage.edges[0].node.page_logo_src.source_url
      }
      alt={logo.allWordpressPage.edges[0].node.page_logo_src.alt_text}
    />
  );
};

export default Logo;
