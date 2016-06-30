var React = require('react');
var Child = require('./child.jsx');

var Ancestor = React.createClass({
  render: function() {
    return (
      <div>
        <Child heirlooms={this.props.heirlooms}/>
      </div>
    );
  }
});

module.exports = Ancestor;
