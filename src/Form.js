import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            birthdate: '',
            position: '',
            description: '',
            parttime: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, birthdate, position, description, parttime } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Date of Birth</label>
                <input
                    type="text"
                    name="birthdate"
                    value={birthdate}
                    onChange={this.handleChange} />
                <label>Position</label>
                <input
                    type="text"
                    name="position"
                    value={position}
                    onChange={this.handleChange} />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange} />
                <label>Do they work part-time?</label>
                <input
                    type="text"
                    name="parttime"
                    value={parttime}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
