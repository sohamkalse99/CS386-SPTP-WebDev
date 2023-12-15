
# Homework 6

## Part 1 : Setting Up Web Server and Error Routes

In this part, I have created a basic Express web server with the following components:

Created constants host and port and populated them with appropriate values.

Routing for the "/" URL, displaying "Homework 6" in an h1 header followed by a horizontal ruler (the HTML markup will be stored in a variable called strHTML).

Implementing a 404 error middleware.

Implementing a 500 error middleware.

Creating the server using the constants host and port.

## Part 2: Setting up the initial html page

In this part, I have set up the initial HTML page using a string, and will use template strings for multiline strings.

Created a string variable called html_top starting from the doctype to the opening body tag, including charset utf-8 and the title tag "HW6" (beginning of HTML markup).

Created another string variable called html_bottom containing the closing body and html tags (the end of HTML markup).

In the route "/" created an HTML string using the variable strHTML to create the HTML page as shown (concatenate html_top, strHTML, and html_bottom to create the complete HTML markup). 

All anchor links will open in a new tab.

The anchor links are set up as follows:
View JSON: href="/view-json"
Download JSON: href="/json"
View CSV: href="/view-csv"
Download CSV: href="/csv"

Since the routes the anchor links are redirecting to are not implemented yet, clicking on them will produce a 404 error.

## Part 3: Setting up the Individual Routes for Viewing and Downloading Data Files

In this part, I have set up the individual routes for viewing and downloading the data files.

Download the zip file "data.zip" from Canvas, containing two files: "dataCSV.csv" and "dataJSON.json." Placed them in the same folder as the server.

Loaded both files into variables dataJSON and dataCSV.

Created four routes matching the href attributes of the anchor links:
/view-json: I have set the HTTP status code to 200, sent the file content of dataJSON using the res.json method.

/view-csv: Replaced line breaks with HTML break elements, then set the content type to HTML, HTTP status code to 200, and sent the file content of dataCSV.

/json: I have set the HTTP header Content-Disposition to "attachment; filename=dataJSON.json", the content type to "application/json", HTTP status code to 200, and sent the file content of dataJSON.

/csv: I have set the HTTP header Content-Disposition to "attachment; filename=dataCSV.csv", the content type to "application/csv", HTTP status code to 200, and sent the file content of dataCSV.