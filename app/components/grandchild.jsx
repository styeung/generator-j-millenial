var React = require('react');

var Grandchild = React.createClass({
  render: function() {
    return (
      <div>I am the grandchild</div>
    );
  }
});

module.exports = Grandchild;
