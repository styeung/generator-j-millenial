var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');
var Ancestor = require('../../../app/components/ancestor.jsx');
var Child = require('../../../app/components/child.jsx');

describe('Ancestor', function() {
  var renderer,
      component,
      heirlooms;

  beforeEach(function() {
    heirlooms = {
      foo: 'bar'
    }
    shallowRenderer = TestUtils.createRenderer();
  });

  it('has a Child component', function() {
    component = shallowRenderer.render(<Ancestor heirlooms={heirlooms}/>);
    var childComponents = TestUtils.scryRenderedComponentsWithType(component, Child);

    expect(childComponents.length).toEqual(1);
  });

  it('passes down the heirlooms prop to the Child', function() {
    component = TestUtils.renderIntoDocument(<Ancestor heirlooms={heirlooms}/>);
    var childComponent = TestUtils.findRenderedComponentWithType(component, Child);
    expect(childComponent.props.heirlooms).toEqual(heirlooms);
  });
});
