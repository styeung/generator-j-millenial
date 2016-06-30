var TestUtils = require('react-addons-test-utils');
var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('../../../app/components/child.jsx');

describe('Child', function() {
  var component,
      domElement,
      heirlooms;

  beforeEach(function() {
    heirlooms = {
      jewelry: {
        gold: {
          type: 'bracelet'
        }
      }
    }
  });

  it('renders a statement about the gold jewelry in the heirlooms prop', function() {
    component = TestUtils.renderIntoDocument(<Child heirlooms={heirlooms}/>);
    domElement = ReactDOM.findDOMNode(component);

    expect(domElement.innerHTML).toEqual('Hello, please give me your bracelet');
  });
});
