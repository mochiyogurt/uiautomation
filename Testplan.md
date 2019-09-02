Test Plan
===================

Objective 

    To validate and ensure an e-commerce website is fully functional, Automated test cases should ensure key user flows are performing as expected. 
    
Test Cases for E-Commerce Website - www.artsyjewels.com
SKIPPED 1) Home Page Should open and validate all the images and buttons are functional.
    - Steps 
        - Open Homepage
        - Click on Homepage Headers.

DONE 2) Search Functionality is working.
    - Steps
        - Click on Search Box. 
        - Search for a specific term.
        - Assert a valid page result based on the search term.
    
DONE 3) Existing User Should be able to Login.
    - Steps
        - Go to Login Page
        - Enter Username / Password
        - Click Login
        - Validate correct User.
DONE 4) Forgot Password
    - Steps 
        - Go to Login Page
        - Enter Username
        - Click on Forgot Password.
        - Complete the Step and validate Message. 
DONE 5) Product Page Functionality
     - Steps 
        - Go to a Product Page
        - Validate Options 
        - Assert Price 
        - Add to Cart
        - Go to Cart Page Validate the Product is added to Cart.
6) Cart Page 
    - Steps
        - Add a product to cart
        - Go Cart page
        - Fill out the forms.
        - Place an Order. 
7) Coupon Validation. 
    - Steps 
        - Add a product to cart
        - Go to Cart Page.
        - Enter Invalid Coupon.
        - Enter a Valid Coupon. 
8) Click on Alert or Popups
    - Steps 
        - Ensure Alerts or popups
        - Click on popup box. 
9) Category Pages
    - Steps 
        - Go to subcategory page.
        - Make sure the Filter of products are working.
10) Footer Links 
    - Steps
        - Click on each individual Footer links
        - Validate it leads proper page.

Deliverables
=================

- Create Test Cases
- Automate User Flow
- Build a Test Framework
- Print a Report with Test Cases Pass / Fail
- Setup Alerting
- Push Code to Github.