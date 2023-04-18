# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

- Main section: ![./screenshots/main-section.png](./screenshot.jpg)
- Projects section: ![./screenshots/projects-section.png](./screenshot.jpg)
- Main section: ![./screenshots/contacts-section-error-states.png](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

In terms of HTML & CSS, the more challenging aspect, or rather new things that I learnt, is under the projects section in the desktop mode where when one hover over the project thumbnail, the thumbnail opacity changes and the hidden text get shown at the same time.

In terms of Javascript, there were loads of debugging to do even though the function requirment does not seem complicated at first glance. I learnt about:

- emailRegex: On how to validate if an email input format is correct

- invalid email input response: Somehow when the email input is invalid, I can't seem to include the lines of code for the email error to appear as well as the exclamation mark sign under the same 'else if' block. I have to create a separate a new variable hasInvalidEmail to keep track of whether the email input is invalid. I moved the code that adds or removes the exclamation mark outside of the loop that checks each input field.

Now, if any of the input fields are invalid, we check if the email input is also invalid. If it is, we add the exclamation mark to the exclamation element using classList.add and innerHTML. If it's not, we remove the exclamation mark using classList.remove and set its innerHTML to an empty string.

- exporting data to csv: I am not familiar with node.js for now so exporting and updating data to a csv file now is not possible and even if I were to use the file api, there will be issues potentially. Thus, as as temporary solution, I created a download csv function and included a pop-up alert such that when all the inputs are valid and the user clicks on 'send message', the pop-up appears and a new csv file is created and downloaded with the the user input in it.

### Continued development

The continued development will be to be able to modify the code such that the javascript code is moved to the backend and run using node.js. The data can be stored and updated using MongoDB for example.
