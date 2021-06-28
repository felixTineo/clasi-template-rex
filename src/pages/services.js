import React, { Fragment } from 'react';
import Layout from '../_layout';

import Hero from '../_sections/services/hero';
import Services from '../_sections/services/services';

export default ({ data })=> (
  <Layout data={JSON.parse(data.initial.data)}>
    <Fragment>
      <Hero />
      <Services />
    </Fragment>
  </Layout>
);

export const query = graphql`
query{
  initial{
    data
  }
}
`