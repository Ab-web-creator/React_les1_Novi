Job description
Introduction

You just started out as a developer at a company called Tech It Easy, which sells TVs. Recently they fired Fred from finances because he was always online on Teams, but was actually taking naps and doing nothing. This means that employees need a financial dashboard to keep records themselves.

Because Fred has not done anything for a long time, the finances are not very good. You can therefore assume that the stock of televisions is currently static, but will become dynamic in the future.



TEC;H
IT EASY




In constants/inventory.js you will find 2 datasets. One object with the data of the best-selling TV at Tech It Easy and one array with 8 objects (all the TVs they sell). Each TV object contains the following information:

* type - the TV type
* brand - the brand
* name - the designation
* price - the price (in whole euros)
* availableSizes - an array of available screen sizes for this model (in inches)
* refreshRate - the image refresh rate (in Hz)
* screenType - the screen type (LED - QLED - LCD)
* screenQuality - the resolution of the screen (Ultra HD/4K - Full HD - HD Ready)
* smartTv - boolean value indicating whether it is a Smart TV
* options - an array of objects that indicate with booleans which options are present and which are not (Wi-Fi, voice control, HDR, Bluetooth and AmiLight)
* originalStock - the quantity of copies of this type purchased during this inventory batch
* sold - the amount of copies of this type sold

Part 1

By completing the assignments you slowly build up the first part of the Tech It Easy Dashboard. You are free to adopt the styling of the example or come up with your own house style. Just make sure you get started with the technical assignments before you spend your time on styling.

PICTURE (DASHBOARD)

Assignment 1 - Helper Functions
In this assignment you will write several helper functions that we will use to display the correct information on the dashboard. You use the data from the inventory array for this. You can find it in the constants folder. Tip: create a separate file for each helper function and don't forget to call it in App.jsx, otherwise the console will remain empty!

* Assignment 1a: How many TVs have already been sold? Write a helper function that calculates this. Log the outcome in the console.
* Assignment 1b: Make sure that this number is shown in green on the page.
* Assignment 1c: How many TVs has Tech It Easy purchased in total? Write a helper function that calculates this. Log the outcome in the console.
* Assignment 1d: Make sure that this number is shown in blue on the page.
* Assignment 1e: Write a helper function that calculates how many TVs still need to be sold. Show the result in red on the page. Tip: You can use a helper function in another helper function.


Assignment 2 - Product Display

You are going to write several helper functions to correctly display the information about one TV on the page. Use the bestSellingTv object as input, but keep in mind that we should be able to use any TV object we want for this. We are going to display this TV in the following format:

Samsung UHD 55AU7040 - Crystal
€549,-
43 inch (109 cm) | 50 inch (127 cm) | 55 inch (140 cm) | 65 inch (165 cm)


* Assignment 2a: Create a helper function that generates a string for the name of one TV and returns it in the format [brand] [type] - [name] such as Philips 43PUS6504/12 - 4K TV or NIKKEI NH3216SMART - HD smart TV.

* Assignment 2b: Create a helper function that returns the price of one TV as a parameter (such as 379 or 159) in the format $379 or $159.

* Assignment 2c: Create a helper function that generates a string for all available screen sizes of one TV. The function returns this in the format:


[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.


If a TV has only one screen size ([32]), the output will be 32 inches (81 cm). When a TV has four screen sizes ([43, 50, 55, 58]), the output becomes 43 inches (109 cm) | 50 inches (127 cm) | 58 inches (147 cm). Always round to whole centimetres. Please test whether this works with different TVs!

*  Assignment 2d: Use your helper functions to display the information of the best-selling TV, including image, on the 
page:

PICTURE SAMSUNG 549 eur

Assignment 2e: use the icons from the assets folder to display which applications are present on this TV. Do this for now by manually typing out the information yourself (hardcoded).

[check-icon] wifi [not-icon] speech [check-icon] hdr [check-icon] bluetooth [not-icon] ambilight

* Assignment 2f: Create three buttons at the bottom of the page with: 'Most sold first', 'Cheapest first' and 'Most 
suitable for sports first'. When a button is clicked, the button text must be logged in the console. Tip: functions that are executed based on an event are always declared in the component itself: these are not helpers.


Part 2

You will use different methods to display the information about all TVs in the most efficient way possible. Use the inventory array as input and keep in mind that it shouldn't matter if the array is 8 or 800 TVs long.

PICTURE: TECH IT EASY DASHBOARD





Assignment 1 - Practice with array methods
Before we start using array methods in React, it's important to practice using these methods in plain JavaScript. Therefore, make the following commands in the inventory.js file, or create your own practice file in the same folder. You can then just import the inventory array. You don't need to create functions for this. Always log the results directly into the console.

*  Assignment 1a: Use an array method to create an array containing all TV type names. Log the outcome in the console.
*  Assignment 1b: Use an array method to collect all information from the TVs that are completely sold out. Log the outcome in the console.
*  Assignment 1c: Use an array method to retrieve the TV type 'NH3216SMART' information.
*  Assignment 1d: Use an array method to list the brand and TV names indicating whether they are suitable for sports viewing (a refresh rate of 100Hz or higher). Do this in the format { name: 'Toshiba HD TV', suitable: false }. Log the outcome in the console.
*  Assignment 1e (Challenge): Use array methods to collect all the information from the TVs available in screen sizes of 65 inches and larger.
*  Assignment 1f (Challenge): Use array methods to collect all the information from the TVs that have ambilight. Log the outcome in the console.



Assignment 2 - Array methods in the UI

*  Assignment 2a: Use an array method to display all TV brands (such as Philips, NIKKEI, etc.) in a list on the page. This gives the staff a clear overview of what they are selling. It is not a problem that there are duplicate brand names.

*  Assignment 2b: Use an array method to display all Tech It Easy TVs in the same format as the best-selling TV. Also use the helper functions you created during part 1, but skip the options (such as bluetooth, wifi, etc.) for now.

*  Assignment 2c: Again use an array method to list all option names (without icons) for each TV.

*  Assignment 2d: Now add the icons using a decision tree within the method. When the value of the option is true, we want to display the check icon, and when the value of the option is false, the minus icon.

Assignment 3 - Sort it!

Unfortunately, we cannot sort the TVs on the page by clicking the buttons, because we need State for that. That's why you log the sorted TVs in the console.

*  Assignment 3a: Ensure that when a user clicks the 'Most sold first' button, the inventory array is sorted by number of items sold from highest to lowest. Log the outcome in the console.
*  Task 3b: Ensure that when a user clicks the 'cheapest first' button, the inventory array is sorted by price from lowest to highest. Log the outcome in the console.
*  Assignment 3c: Ensure that when a user clicks the 'Best for sports first' button, the inventory array is sorted by refresh rate from highest to lowest. Log the outcome in the console.


Bonus


*  Assignment 1: Create an extra button with 'Largest screen sizes first' on it. When the user clicks this button, the TVs are sorted by their largest screen size.
*  Assignment 2: Some TVs are already sold out. To prevent the employees of Tech It Easy from trying to sell these products, we want to provide those TVs with a 'sold out' picture. To show the image only if the condition is true, you will need to use the && logic operator:

condition && <element to be displayed as TRUE>


For the ? post the condition that is being tested (is the TV sold out?). If the condition is true, you display the image by placing this element after the && (without '').












