import React from 'react';
import Layout from '../components/layout/Layout';

export default ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    </Layout>
  );
};
