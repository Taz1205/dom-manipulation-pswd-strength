# dom-manipulation-pswd-strength

## Intro

Create a HTML/CSS/JS project which allows users to enter a password and check its strength using DOM manipulation.
The page should contain a heading (How good is your password?), an input field, and a progress bar.
Below are a set of User Requirements for your project to meet.

### 📝 User Requirements

Given the page is rendered with the correct input field
When the user changes a single character in the input field
Then the progress bar should update its value

Given the page is rendered with a progress bar that has a value range of 0-100
When the user inputs a password
Then the progress bar value should be the number of characters multiplied by 5

Given the user inputs a password
When the password contains fewer than 8 characters
Then the progress bar should be red

Given the user inputs a password
When the password contains fewer than 8 characters
Then the page should display the feedback “Should be longer”

Given the user inputs a password
When the password contains 8 characters or more, but less than 12 characters
Then the progress bar should be orange

Given the user inputs a password
When the password contains 8 characters or more, but less than 12 characters
Then the page should display the feedback “Pretty good”

Given the user inputs a password
When the password contains 12 characters or more
Then the progress bar should be green

Given the user inputs a password
When the password contains 12 characters or more
Then the page should display the feedback “Grrrreat!”

#### Implementation

After creating a basic HTML and CSS file to implement this requirement, I created a JS file to add the strength bar functionality using DOM manipulation. In the JavaScript file, we have a function calculateStrength that determines the strength of the password by checking if it meets certain usual conditions like having a length greater than or equal to 8, containing uppercase and lowercase letters, and containing numbers or special characters.

The updateStrengthBar function is triggered whenever the user types in the password field. It calculates the strength of the current password and updates the value of the progress bar accordingly.

- 1st requirement: This is how it works:

The user enters a password in the input field. Even if it's just a single character, the 'input' event will be fired.
The updateStrengthBar function is called. It uses the calculateStrength function to calculate the strength of the password, which is a number between 0 and 100.
The value of the progress bar is updated with the calculated strength.
If the user changes a single character in the input field, this entire process will run again, updating the progress bar value to reflect the new strength of the password.

I also implemented a gradient progress bar depending on the strength score it goes from red(weak password) to orange to green(strong password).

- 2nd requirement: let strength = password.length * 5;
- 3rd requirement:if (passwordInput.value.length < 8) progressFill.style.backgroundColor = "red";
- 4th requirement:
    A new div with the id feedback is added to the HTML. This is where feedback messages will be displayed. Some styling is added for the feedback div in the CSS, and the JavaScript is updated to change the text content of the feedback div based on the length of the password. If the password is less than 8 characters long, the feedback message "Should be longer" is displayed. Otherwise, the feedback message is cleared.
- 5th & 6th requirement:the pswd.length being >8 & <12 is checked, and the bar is orange and it displays feedback = "Pretty good!"
- 7th and 8th requirement: the pswd.length being >12 is default and the bar is green and it displays feedback = "Grrrreat!"
