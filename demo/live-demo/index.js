var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var bandList = [{
  id: 'a',
  name: 'company   A',
  value: 0
}, {
  id: 'b',
  name: 'company    B',
  value: 0
}, {
  id: 'c',
  name: 'company    C',
  value: 0
}];
var INTERVAL = 5000;

var Example = React.createClass({
  getInitialState() {
    return {
      list: bandList
    };
  },

  componentDidMount() {
    this.timerId = setTimeout(this.updateData, INTERVAL);
  },

  updateData () {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    var newList = [];

    for (var i = 0, len = bandList.length; i < len; i++) {
      newList.push({
        id: bandList[i].id,
        name: bandList[i].name,
        value: bandList[i].value + Math.floor(Math.random() * 20)
      });
    }

    newList.sort(function () {
      return Math.random() - 0.5;
    });

    this.setState({
      list: newList
    });

    this.timerId = setTimeout(this.updateData, INTERVAL);
  },


  render() {
    var list = this.state.list;
    var items = list.map(function(entry) {
      return (
        <li key={'band-' + entry.id + '-' + entry.value}>
          <p>{entry.name}</p>
        </li>
      );
    });

    return (
      <div>
        <p className='title'>场景：这是一个实时榜单，每个10s排行榜会发生变化，需求是希望变化的时候添加动画</p>
        <ReactCSSTransitionGroup component="ul" transitionName="demo" className="list">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

ReactDOM.render(<Example />, document.getElementById('root'));
