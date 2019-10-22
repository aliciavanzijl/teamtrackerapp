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

              <div className="form-group">
                <label>Full Name</label>
                <input className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input className="form-control"
                    type="text"
                    name="birthdate"
                    value={birthdate}
                    onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input className="form-control"
                    type="text"
                    name="position"
                    value={position}
                    onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input className="form-control"
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>Do they work part-time?</label>
                <input className="form-control"
                    type="text"
                    name="parttime"
                    value={parttime}
                    onChange={this.handleChange} />
              </div>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
