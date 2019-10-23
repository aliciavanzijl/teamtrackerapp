# A Simple React Web App
View the app [here](https://aliciavanzijl.github.io/teamtrackerapp/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Scope

The set task was to create a web application with which a company can list all their employees. It had to be React-based and only front-end. The solution had to be developed using `create-react-app`. Other than that, any libraries are allowed.  I made the decision to use Bootstrap.css to provide the basic formatting, due to the time constraints.

The application consists of three features:

1. ### List of employees
A table containing 6 columns:
- Full name
- Birthdate
- Position
- Description
- Works part-time
- Delete user (details below)

2. ### Add employee
The form to add an employee has the fields below. The fields marked as "required" are mandatory to create a user.
- First name (required)
- Last name (required)
- Birthdate (required)
- Position (required)
- Description
- Works part-time

3. ### Delete employee
The last column of each row has a button that allows for removing the employee.

### Optional Extras

- Added validation messages to the form fields
- Created a toggle button to show/hide the form

## Documentation

### The Table
The table is made up of a class component (Table), with the TableHeader and TableBody as two simple components. 
The table data is passed through using state and props.  Data is stored as an array within props. There is also a key/index prop to facilitate changing the data.

I then added a method for deleting an employee.  I created a removeTeam() method with a defined index.  In the TableBody component, the key/index is passed through as a parameter, so the filter function knows which item to remove. 

In the project instructions, the table had to have once column for "full name" but the form had to collect "first name" and "last name" separately.  To achieve this, I used concatenation in the TableBody to combine these two values.

### Form Design
The form updates the state of Form every time a field is changed in the form, and when it is submitted, all that data is passed to the App state, which then updates the Table.

The handleChange function runs every time a change is made to an input. The event is passed through, and it sets the state of Form to have the value of the inputs.

In the render, it gets the properties from state, and assigns them as the values that correspond to the proper form keys. It runs the handleChange() method as the onChange of the input.

To create the submit button and actually submit the data to the table, I created a function called handleSubmit() on App.js that updates the state by taking the existing this.state.team and adds the new team parameter, using the ES6 spread operator.

This is passed through as a parameter on Form.

In Form, I created a method called submitForm() that will call the handleSubmit() function, and pass the Form state through as the team parameter defined earlier. It also resets the state to the initial state, to clear the form after submit.

Finally, I added a submit button using onClick instead of an onSubmit since it was not using the standard submit functionality. The click calls the submitForm() function.

### Validation Messages

After getting the basic form and table set up with submit and delete functionality, I needed to add some form of validation to the form inputs.  

I did this by adding more props to the intial.state - all of which were initially empty strings so that nothing is shown until submit is pressed without having filled in all the required inputs.

I created a validate() function which checks that the four required inputs have some data inserted.  If they are blank, it will then change the state to include an error string (customised for each input) and sets the class of the alert div rendered to show the bootstrap alert formatting (https://getbootstrap.com/docs/4.0/components/alerts/).

If all the required inputs have something entered, the function will then return true. If any are missing, it will return false.

I then changed the submit button to be a more standard "submit" with the function onFormSubmit().  This still calls the handleSubmit, clears the form, and is called when the button is clicked. However, I added const isValid which if validate is returning true before calling handleSubmit() and clearing the form to the initial state. 

This prevents users from uploading partial information and shows them which boxes have an error.

I later added a simple HTML pattern to the birthdate input to restrict the data entered to a particular format. I'm not entirely happy with this fix, and would like to replace it with something less intrusive and more precise at a later date.

### Toggle Button

At this point, I added the toggle functionality to show or hide the form by clicking a button.  The button is currently very simple and I would like to add changes to color and design on click.

I added "shown: false" to the state in App.js.

I then created a button with an onClick funtion to change "shown" as follows:

```<button className="btn btn-primary" onClick={() => this.setState({ shown: !this.state.shown})}>Add a team member (toggle)</button>
          {this.state.shown && <Form handleSubmit={this.handleSubmit} />}
```
 This then shows or hides the Form component on click.

## Next Steps
I would like to do the following:

- Change the date input from a string to a date format using [React Date Picker](https://reactdatepicker.com/) and improve validation.
- Break up the form into smaller components (in individual files) to improve readability.
- Make the text and color of the toggle button change depending on state (i.e. change to "No more to add" or "Close") and add an icon.
- Move the error alerts into components to reduce repetition in my code and improve readability.
- Add tests.
- Improve styling.
- Add Accessibility.
- Improve responsiveness.  
