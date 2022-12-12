# Phase-1-week-3-project
- This website app functions in a manner through which can see the films list and its detailed description. It also enables one to book a movie and shows the number of tickets remaining.

# Development requirements
- Visual studio code
- Live server  extension
- npm
- json-sever


# Development
To get the code,
```bash
 click on this link: https://github.com/kericho/code-challenge3-flatdango.git
 ```
- fork and git clone the code to you local machine.
- Navigate to this folder by running this command:
```bash
 cd code-challenge3-flatdango/
 ```
- open the code using this command, 
```bash
   code .
```

- run this command on your terminal:
```bash
 json-server --watch db.json.
 ```
- Below at the bottom of your vs code click on the Go live to display the animals on the browser.


# Technology used
- HTML
- CSS
- Javascript
- Bootstrap

# Deliverables

As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data:

2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   film data:

3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available).



## License: 

ISC License.

## Author
- Elvis Rono