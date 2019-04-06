# Showcase site for a fictive restaurant 'Bobún Café'

`vue` `sass` `jquery` `grid based system` `plugins`


This is a single page website for the fictive 'Bobún Café' . It contains an 'about us' section, 'menu' section, 'contact' section and images under various forms (such as a carousel).

The main focus of this project was to practice Vue.js  

👉 Check the final version of the project [here](http://cookiesandwifi.ovh/bobuncafe/).


------

# Key elements in project


## Vue.js

* **List Rendering** : The `v-for` directive to render list of items and nested data. Used on the whole site (such as listing all the menu items, all the contact information etc). Keeps the html structure as simple as possible as it prevents repeating code.

* **Conditional Rendering** : The `v-if` directive conditionally renders data if the directive’s expression returns a true value. Used in the 'menu' section which includes a list of dietary icons (such as gluten-free, spicy dishes, alcoholic beverages etc).

* **Vue Plugins** : Integration of a [carousel component](https://github.com/fengyuanchen/vue-carousel) and tweaking it's options (such as setting the amount of time to delay automatically cycling of an image). Integration of a [Scroll plugin](https://github.com/ocordeiro/vue-smooth-scroll) for a smooth animated "scroll effect" when clicking on links in the navigation menu.

* **Vue Template and Events** :  The mobile navigation bar is based on a Vue template for a modal. When the user clicks on the hamburger menu, it will trigger and display the modal with the navigation menu. Toggle on exit.

---

## Styles


#### CSS Grid Layout
This site relies on a grid-based layout system, with rows and columns. Essential for a responsive page.

For the scope of the project, I mainly wanted to keep the focus on practising Vue and therefore was looking into using a very basic and simple grid system for the layout. This was the opportunity to checkout alternatives to Bootstrap too. I played around with other  popular CSS frameworks such as Bulma, but in the end decided to go with [Simple Grid](https://simplegrid.io/) as it is responsive and light with the strict necessity for a layout structure. A future Vue.js project will include using a more complete development framework for Vue.js such as Vuetify.



#### Animations
Animations are used to bring the website to life and strongly enhance the page's look and feel. These are triggered when content scrolls into view.

I looked into different animation libraries such as AOS and Animate but preferred using here [Animista](http://animista.net/) because it doesn't rely on adding a bunch of attributes in the html tags and is easier to customise the delay and duration options. The second issue that had to be taken into consideration was triggering the animation when the content was scrolled into view and not on page load. To avoid this, I used a simple jquery based plugin.
