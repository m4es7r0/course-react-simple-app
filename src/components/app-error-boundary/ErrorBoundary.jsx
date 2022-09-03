import { Component } from "react";
import ErrorMessage from "./ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        { this.state.error ? <ErrorMessage /> : this.props.children }
    }
}

export default ErrorBoundary