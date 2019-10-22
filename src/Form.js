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
            firstnamealertBox: '',
            lastnamealertBox: '',
            birthdatealertBox: '',
            positionalertBox: '',
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
      let firstnamealertBox = "";
      let lastnamealertBox = "";
      let birthdatealertBox = "";
      let positionalertBox = "";

      if (!this.state.firstname) {
        firstnameError = "first name cannot be blank";
        firstnamealertBox = "alert alert-danger";
      }

      if (!this.state.lastname) {
        lastnameError = "last name cannot be blank";
        lastnamealertBox = "alert alert-danger";
      }

      if (!this.state.birthdate) {
        birthdateError = "please enter a date of birth";
        birthdatealertBox = "alert alert-danger";
      }

      if (!this.state.position) {
        positionError = "please enter a position";
        positionalertBox = "alert alert-danger";
      }

      if (firstnameError || lastnameError || birthdateError || positionError) {
      this.setState({ firstnameError, lastnameError, birthdateError, positionError, firstnamealertBox, lastnamealertBox, birthdatealertBox, positionalertBox });
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
                    placeholder="e.g. Daneel"
                    value={firstname}
                    onChange={this.handleChange} />
                <div className={this.state.firstnamealertBox}>{this.state.firstnameError}</div>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input className="form-control"
                    type="text"
                    name="lastname"
                    placeholder="e.g. Olivaw"
                    value={lastname}
                    onChange={this.handleChange} />
                <div className={this.state.lastnamealertBox}>{this.state.lastnameError}</div>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input className="form-control"
                    type="text"
                    name="birthdate"
                    placeholder="e.g. 5020/01/01"
                    value={birthdate}
                    onChange={this.handleChange} />
                <div className={this.state.birthdatealertBox}>{this.state.birthdateError}</div>
              </div>
              <div className="form-group">
                <label>Position</label>
                <input className="form-control"
                    type="text"
                    name="position"
                    placeholder="e.g. Detective"
                    value={position}
                    onChange={this.handleChange} />
                <div className={this.state.positionalertBox}>{this.state.positionError}</div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <input className="form-control"
                    type="text"
                    name="description"
                    placeholder="e.g. Undercover snooping."
                    value={description}
                    onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>Do they work part-time?</label>
                <input className="form-control"
                    type="text"
                    name="parttime"
                    placeholder="Yes or No?"
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
