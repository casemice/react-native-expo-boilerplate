import React from 'react';
import renderer from 'react-test-renderer';

import Loading from './Loading';

describe('Loading', () => {
  it('Renders as expected', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
