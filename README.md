# A Simple React Web App
View the app [here](https://aliciavanzijl.github.io/teamtrackerapp/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Scope

The set task was to create a web application with which a company can list all their employees. It had to be React-based and only front-end. The solution had to be developed using `create-react-app`. Other than that, any libraries are allowed.

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

### Libraries Used
I made the decision to use Bootstrap.css to provide the basic formatting, due to the time constraints.

### The Table

### Form Design

### Validation Messages
https://getbootstrap.com/docs/4.0/components/alerts/

### Toggle Button

## Next Steps
I would like to do the following:

- Change the date input from a string to a date format using [React Date Picker](https://reactdatepicker.com/).
- Make the text on the toggle button change depending on state (i.e. change to "No more to add" or "Close").
- Change the error alerts into a component to reduce repetition in my code and improve readability.
- Add tests.
- Improve styling.
- Accessibility.
- Improve responsiveness.  
