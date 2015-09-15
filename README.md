## Website Performance Optimization portfolio project

This is a portfolio optimized for performance for the Udacity Front-End Web Developer Nanodegree project on Website Performance Optimization.

The source provided has been modified in the areas where optimization opportunities were found and a final "dist" (distribution) folder has been produced which contains the pages to be utilized to measure the performance improvements. All necessary files have been included in the dist folder and no broken links should be found. To start, open the file:

dist/index.html

### Optimization steps

####Part 1: Optimize PageSpeed Insights score for index.html
Optimizations to this file were made to achieve a PageSpeed score of 90 or more on index.html.

The optimizations performed: 

-Inline of css and js files
-Modify the analytics script to run asynchronously
-Use the WebFont loader


####Part 2: Optimize Frames per Second in pizza.html
-Identified a DOM query that was being done repeatedly in a for loop. The value was cached instead and used everywhere it was needed.
-Replaced the fixed number of pizzas being created at page load with a while loop that created pizzas until there were enough pizzas to fill the window.


####Part 3: Optimize the time to resize pizzas to less than 5 ms in pizza.html
Removed the repeated use of DOM queries. Initially, the query was being made inside a for-loop and used to calculate the new size of the pizzas.
Identified that the value obtained was constant on every iteration inside the loop, cached the value, reused the value.


####Tools Used
To produce a final distribution folder Grunt was used to minify and inline styles and scripts. Also, other needed files were copied to the dist folder. Included in the source project are the related files:
1. Gruntfile.js
3. package.json