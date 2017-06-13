// var element = <h1>Hello, world!</h1>;
var element = React.createElement('h1', null, 'Hello world!');
var container = document.getElementById('test');
ReactDOM.render(element, container);
