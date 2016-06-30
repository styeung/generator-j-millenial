var React = require('react');

var Child = React.createClass({
  render: function() {
    return (
      <div>
        {'Hello, please give me your ' + this.props.heirlooms.jewelry.gold.type}
      </div>
    );
  }
});

module.exports = Child;
