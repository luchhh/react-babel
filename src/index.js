class HelloMessage extends React.Component {
    render() {
        return (
        <h1>
            Hola {this.props.name}
        </h1>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Uneatlántico" />,
    document.getElementById('root')
);
