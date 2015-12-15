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
    var items = list.map(function(entry, i) {
      return (
        <ReactCSSTransitionGroup
          key={'band-' + i}
          component='li'
          transitionName='demo'
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={false}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}>
          <p className='item' key={'band-' + entry.id}>{entry.name}</p>
        </ReactCSSTransitionGroup>
      );
    });

    return (
      <div>
        <p className='title'>场景：这是一个实时榜单，每间隔 10s 会从服务端拿一次排行榜的数据，需求当内容的顺序发生变化的时候能够有动画。</p>
        <p className='title'>说明：切换到浏览器其他标签页 2 min</p>
        <ul className='list'>
          {items}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<Example />, document.getElementById('root'));
