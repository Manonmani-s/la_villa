# La villa

## Final Project for UI Basics

### Team Members:

1. Arif
2. Glauber
3. Ljilljana
4. Manon

The La villa Website consists of two Pages: _Home_ Page and _Luxury Solutions_ Page.

### HTML Semantics Used:

The Basic elements of HTML is used to design the Page and the following semantics are used appropriately:
nav
section
aside
main
form
footer

### SASS Styles

The Webpage is designed using sass. we included the following sass files to style our page

1. variables.scss
2. style.scss
3. style-luxury.scss
4. mobile.scss
5. tablet.scss

### Learnings:

- Linear Gradient for the images
- Flipping the images using Transform:scale Property.
- Organizing the Files for the proper workflow
- Applying the pseudo-elements ::before & ::after
- How Inheritance plays role in styling the elements

### Errors and overcoming them

- Flipping of Images does not satisfy the requirement of the Web page and scaling the proper x-axis with the following property resulted in the required solution.

  **transform: scaleX(-1)**

- The gradient effect for the image was not perfect and we achieved it by specifying the following property:

  **background: linear-gradient(to right, white 35%, rgba(255, 255, 255, 0) 45%), no-repeat right/cover url("../image/fashion-1.jpg");**

### Resources

[https://cssgradient.io/](https://cssgradient.io/)
https://www.w3schools.com/cssref/css3_pr_transform.asp
