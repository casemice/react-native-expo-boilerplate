import React from 'react';
import renderer from 'react-test-renderer';

import Feed from './Feed';

describe('Feed Screen', () => {
  it('Renders as expected', () => {
    const tree = renderer.create(<Feed />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
