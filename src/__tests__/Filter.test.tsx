import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../change-results/Filter';

test('renders filter buttons', () => {
    const component = renderer.create(
        <Filter/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
