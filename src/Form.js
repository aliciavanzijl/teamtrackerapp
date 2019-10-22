import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = { //makes the form blank
            firstname: '', //required
            lastname: '', //required
            birthdate: '', //required
            position: '', //required
            description: '',
            parttime: '',
            firstnameError: '',
            lastnameError: '',
            birthdateError: '',
            positionError: '',

        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    validate = () => {
      let firstnameError = "";
      let lastnameError = "";
      let birthdateError = "";
      let positionError = "";

      if (!this.state.firstname) {
        firstnameError = "first name cannot be blank";
      }

      if (!this.state.lastname) {
        lastnameError = "last name cannot be blank";
      }

      if (!this.state.birthdate) {
        birthdateError = "please enter a date of birth";
      }

      if (!this.state.position) {
        positionError = "please enter a position";
      }

      if (firstnameError || lastnameError || birthdateError || positionError) {
      this.setState({ firstnameError, lastnameError, birthdateError, positionError });
      return false;
      }

    return true;

    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState); //clears form
      }
    };

    render() {
      const { firstname, lastname, birthdate, position, description, parttime } = this.state;

      return (
            <form onSubmit={this.onFormSubmit}>

              <div className="form-group">
                <label>First Name</label>
                <input className="form-control"
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={this.handleChange} />
                <div className="alert alert-danger" role="alert">{this.state.firstnameError}</div>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input className="form-control"
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={this.handleChange} />
                <div className="alert alert-danger" role="alert">{this.state.lastnameError}</div>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input className="form-control"
                    type="text"
                    name="birthdate"
                    value={birthdate}
                    onChange={this.handleChange} />
                <div className="alert alert-danger" role="alert">{this.state.birthdateError}</div>
              </div>
              <div className="form-group">
                <label>Position</label>
                <input className="form-control"
                    type="text"
                    name="position"
                    value={position}
                    onChange={this.handleChange} />
                <div className="alert alert-danger" role="alert">{this.state.positionError}</div>
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
    };
}

export default Form;
