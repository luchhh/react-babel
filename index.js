class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "h1",
            null,
            "Hola ",
            this.props.name
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Uneatl\xE1ntico" }), document.getElementById('root'));