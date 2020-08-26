import React from 'react';
import Logo from './Logo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const Header = () => {
  const navItems = useStaticQuery(graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Main menu" } }) {
        edges {
          node {
            name
            items {
              object_id
              title
              url
            }
          }
        }
      }
    }
  `);

  // styling example
  const HeaderWrap = styled.header`
    display: flex;
  `;

  // extending styles example
  const LogoNarrow = styled(Logo)`
    width: 100px;
  `;

  return (
    <HeaderWrap>
      <LogoNarrow />
      <nav>
        {navItems.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          item => (
            <Link to={item.url} key={item.object_id}>
              {item.title}
            </Link>
          )
        )}
      </nav>
    </HeaderWrap>
  );
};

export default Header;
