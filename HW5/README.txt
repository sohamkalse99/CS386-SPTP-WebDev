
# Homework 5

## Part 1: Create HW5.html page

1. Load the following files in the head section:

i. HW5.css

ii. jQuery

iii. HW5.js

2. Use the following elements in the HTML:

i. h1 header

ii. hr element

iii. Two HTML5 color input elements with even and odd as id values, along with labels for these inputs

iv. Create a table with the following structure:
Use table, thead, and tbody
Use th and td elements

3. The delete button should be an <input> element with type button and a class of "delete"

4. Maintain proper indentation in the HTML page to show parent-child elements.

## Part 2: Create HW5.css file

Apply the following styles to elements in the CSS file:

1. Style the body element with a chosen font-family and font-size (14px)

2. Style the table element with border-collapse property set to "collapse" to show a single border line instead of double lines, and width set to 100%
3. Style the <th> and <td> elements with border set to 1px solid with a chosen color, padding set to 8px, and text-align set to left
4. Style the <th> element only with a background color of some shade of gray

## Part 3: Create HW5.js file

1. Use only jQuery properties and methods unless otherwise specified.

2. In the load event, register the following event handlers:

i. Select all elements with the class "delete" and respond to the click event with the function fDeleteRow

ii. Select all elements with the class "delete" and respond to the mouseover event with the function fMousePointer

iii. Select the elements with the IDs "even" and "odd" and respond to the change event with the function fAlternateRow

3. Create the three event handler functions and include a console.log statement inside each for testing.

## Part 4: Modify function fAlternateRow

1. Select all even rows and use the css method to set the background color to the value of the input with the id of "even".

2. Select all odd rows and use the css method to set the background color to the value of the input with the id of "odd".

3. Call the function fAlternateRow in the load event.

## Part 5: Modify function fMousePointer

1. Select the current delete button using the JavaScript this object and wrap it with a jQuery function.

2. Use the css method to set the cursor property to "pointer".

3. Save the changes and test the HTML page. When moving the mouse over the delete button, the mouse pointer should change to a hand.

## Part 6: Modify function fDeleteRow

1. Create a variable named tr and assign the following jQuery selection to it:

i. Select the current delete button using the JavaScript this object and wrap it with a jQuery function.

ii. Use the closest method and pass the tr element into it.

2. Use the tr variable and chain it with the fadeOut method, setting the duration to 2 seconds.

3. Within the callback function, use the tr variable again and call the remove method, passing the tr element.

4. Call the function fAlternateRow to refresh the alternate color scheme since one row has been deleted.

5. Save the changes and test the HTML page. When a row is deleted, the alternate coloring should be refreshed.

## Resources

https://www.w3schools.com/