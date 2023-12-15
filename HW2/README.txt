
# Homework 2

This assignment contains multiple htmls and css pages

## Part 1: hw2_content.html

This HTML page, named hw2_content.html, displays a simple welcome message and instructions for navigating the website.

## Part 2: hw2.html and hw2.css

### HTML file (hw2.html)
The hw2.html file contains the HTML structure of the page. It utilizes various sectioning tags such as <header>, <footer>, <aside>, <nav>, and <article>.

The content cell within the grid contains an <iframe> element that loads different content based on the anchor links in the menu:

Clicking on "Home" loads the content from the hw2_content.html page (created in Part 1).
Clicking on "Local News" loads a local news web page https://www.sfchronicle.com/.
Clicking on "National News" loads a national news site https://www.today.com/.
Clicking on the "Registration" link loads the registration form from HW2_register.html (Part 3).

### CSS stylesheet (hw2.css)
The hw2.css file contains the CSS styles for the hw2.html page, utilizing CSS grid technology. The stylesheet includes the following instructions:

Creates a 3 column and 3 row configuration using CSS grid.
Applies row and column gaps and wraps the grid into a <div> element with an ID of divMain, with a height of 95vh.
Sets all margins to 0 using shorthand property.
Uses grid-template-rows to set fixed heights for the top and bottom rows in pixels, and the middle row uses 1fr.
Uses grid-template-columns to set relative widths for the left and right columns in percent, and the middle column uses 1fr.

## Part 3: HW2_register.html and HW2_register.css
The HW2_register.html file represents a registration form. It includes an associated CSS file named HW2_register.css for styling. The form adheres to the following guidelines:

All text inputs are marked as required.
Password inputs are of type "password".
Labels are included and correctly linked to their respective input controls.
Anchor links have their href attribute set to "#" and have a cursor style of "pointer".
The form is styled using CSS, following the provided example (flexibility is allowed).

## Resources

https://www.w3schools.com/

## Problems faced

https://www.wsj.com/ does not load in the webpage.