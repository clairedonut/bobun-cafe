/* ----------------------------------------
 *  Waypoints : activate animations on scroll
 * ----------------------------------------
*/

$(function() {

    $('#banner').waypoint(function() {
        $('div').children().toggleClass('tracking-in-expand-fwd');
    }, { offset: '50%' });

    $('#menu').waypoint(function() {
        $('.scroll div').toggleClass('bounce-top');
    }, { offset: '50%' });


    $('#menu').waypoint(function() {
        $('.scroll h2').toggleClass('text-focus-in');

        $('.scroll-right').toggleClass('slide-in-right');
        $('.scroll-left').toggleClass('slide-in-left');


        // only animate once
        this.destroy();
    }, { offset: '50%' });


    $('#about').waypoint(function() {

        $('.row').removeAttr("style");

        $('.scroll1 div').toggleClass('fade-in-fwd');
        $('.scroll1 img').toggleClass('slide-in-right');

        $('.scroll2 h2').toggleClass('text-focus-in');
        $('.scroll2 .border-title').toggleClass('slide-in-right');
        $('.scroll2 p').toggleClass('text-focus-in');


        // only animate once
        this.destroy();
    }, { offset: '50%' });


    $('#contact').waypoint(function() {
        $('table').toggleClass('slide-in-fwd-bottom');

        // only animate once
        this.destroy();
    }, { offset: '50%' });

});

/* ----------------------------------------
 *  Vue JS
 * ----------------------------------------
 * 
 *
 *
*/

// custom variables ------------------------------------------

var $brand = 'Bobún Café';
$alt = 'Bobún Café';

// content body ------------------------------------------

var header = new Vue({
    el: 'header',
    data: {
        brand: $brand,
        navs: [
            // { name: 'Home', link:'#home' },
            { name: 'About', link:'#about' },
            { name: 'Menu', link:'#menu' },
            { name: 'Contact', link:'#contact' }
        ]
    }
});

var banner = new Vue({
    el: '#banner',
    data: {
        // banner image src in css sheet
        brand: $brand,
        welcome_message: 'since 1995!'
    }
});

var about = new Vue({
    el: '#about',
    data: {
        title: 'About Us',
        image: 'img/about.jpg',
        alt: $alt,
        description: 'Egestas parturient mauris sagittis a ut adipiscing parturient nibh in cum eget parturient metus inceptos tellus massa elementum. Ullamco ipsum nisi nostrud ullamco qui occaecat consequat magna sunt incididunt aliquip.',
        texts: [
            {
                name: 'Cuisine',
                description: 'Gather your loved ones for food and quality time at our cozy Junction restaurant that serves wholesome plant-based asian fusion dishes. ',
                image: 'img/about.jpg'
            }
        ]
    }
});

var menu = new Vue({
    el: '#menu',
    data: {
        title: 'menu',
        dietary_restrictions: [
            { name: 'Gluten-free', symbol: 'circle', marker: 'GF' },
            { name: 'Vegan', symbol: 'circle', marker: 'V' },
            { name: 'Spicy', icon: 'fas fa-fire' }
        ],
        menus: [
            {
                meal: 'starters & sides',
                dishes: [
                    { name: 'Pork & Cilanro dumplings', price: '10' },
                    { name: 'Chicken Red Curry dumplings', price: '10', spicy: 1 },
                    { name: 'Tograshi Fries', price: '10' },
                    { name: 'Thai Fried Chicken', price: '10', gluten_free: 1 },
                    { name: 'Crab Rangoon dumplings', price: '10' }
                ]
            },
            {
                meal: 'specialities',
                dishes: [
                    { name: 'Ramen', text:'ramen noodle soup w/ braised pork belly, mushrooms & soft boiled egg', price: '20', gluten_free: 1 },
                    { name: 'Chicken Katsu', text:'chicken cutlet served with rice and japanese curry sauce', price: '15' },
                    { name: 'Coconut Curry Pho', text:'rice noodles, ground lemongrass chicken, bean sprouts & young coconut broth', price: '18' },
                    { name: 'Mushroom Pho', text:'rice noodle soup w/ tofu, mushrooms, bean sprouts, jalapeño & thai basil', price: '20', gluten_free: 1, vegan: 1  },
                    { name: 'BBQ Pork Belly', text:'Smoked Pork Belly served with rice', price: '22' }
                ]
            },
            {
                meal: 'dessert',
                dishes: [
                    { name: 'Soy Caramel Soft Serve', price: '5', gluten_free: 1  },
                    { name: 'Vanilla ice cream w/ peanut butter crunch', price: '5' },
                    { name: 'Pistachio & Matcha cheesecake', price: '5', vegan: 1 },
                    { name: 'Slice of chocolate Nirvana cake w/ coconut ice cream', price: '5' }
                ]
            }
        ],
        drinks: [
            { name: 'Mint Matcha', text: 'tea', price:'8'},
            { name: 'Hidden Dragon', text: 'ginger infused vodka, ginger beer, lime, bubbles', price:'8', alcohol: 1 },
            { name: 'Spiked Lemonade', text: 'you call the shot!', price:'8', alcohol: 1 },
            { name: 'Coconut Water', text: 'cold beverage', price:'8'},
            { name: 'Lemonade Bubbles', text: 'soda', price:'8'},
            { name: 'Vietnamese Ice Coffee', text: 'cold beverage', price:'8'},
            { name: 'Kill Bill', text: 'passion fruit, coconut cream, pineapple juice', price:'8' },
            { name: 'General Tso\'s Whiskey Sour', text: 'bourbon, lemon juice, tamarind', price:'8', alcohol: 1 },
            { name: 'frozen Kirin', text: 'beer', price:'8', alcohol: 1 },
            { name: 'Tiger Lager', text: 'beer', price:'8', alcohol: 1 },
            { name: 'Miller High Life beer', text: 'alcohol free beer', price:'8' }
        ]
    }
});

var contact = new Vue({
    el: '#contact',
    data: {
        title: 'Location & Hours',
        description: "Elementum consectetur ullamcorper suspendisse a porta nisl turpis fermentum. Mus vestibulum nibh a inceptos a suspendisse odio.",
        detail_infos: [
            {
                title: 'location & contact', details: [
                    {
                        icon: 'fas fa-map-marker',
                        info: '222 East 53rd St. New York, NY — 10022'
                    },
                    {
                        icon: 'fas fa-phone',
                        info: '21 2344 4588'
                    },
                    {
                        icon: 'fas fa-at',
                        info: 'hello@bobun.cafe'
                    }
                ]
            },
            {
                title: 'hours', details: [
                    {
                        icon: 'far fa-clock',
                        info: 'Tuesday – Thursday 12:30 – 14:30, 18:00 – 20:30'
                    },
                    {
                        icon: '',
                        info: 'Friday: 12:30 – 14:30, 16:00 - 22:30'
                    },
                    {
                        icon: '',
                        info: 'Saturday: 12:00 - 22:30'
                    },
                    {
                        icon: '',
                        info: 'Closed Sunday & Monday'
                    }
                ]
            },
            {
                title: 'follow us!', details: [
                    {
                        icon: 'fab fa-facebook-f',
                        info: 'facebook',
                        link: 'facebook.com'
                    },
                    {
                        icon: 'fab fa-twitter',
                        info: 'twitter',
                        link: 'twitter.com'
                    },
                    {
                        icon: 'fab fa-instagram',
                        info: 'instagram',
                        link: 'instagram.com'
                    }
                ]
            }
        ]
    }
});

var footer = new Vue({
    el: 'footer',
    data: {
        brand: [
            { name: $brand, link:'#home', class:"brand" }
        ],
        navs: [
            { name: 'About', link:'#about' },
            { name: 'Menu', link:'#menu' },
            { name: 'Contact', link:'#contact' }
        ],
        social: [
            { name: 'facebook', link: 'https://www.facebook.com', icon:'fab fa-facebook-f' },
            { name: 'twitter', link: 'https://www.twitter.com', icon:'fab fa-twitter' },
            { name: 'instagram', link: 'https://www.instagram.com', icon:'fab fa-instagram' }
        ]
    }
});


var gallery = new Vue({
    el: '#gallery',
    data: {
        images: [
            'img/gallery/gallery1.png',
            'img/gallery/gallery2.jpg',
            'img/gallery/gallery3.jpeg',
            'img/gallery/gallery4.jpg',
            'img/gallery/gallery5.jpeg',
            'img/gallery/gallery6.jpeg'
        ]
    }
});


var carousel = new Vue({
    el: 'carousel',
    data: {
        data: [
            '<img class="img-fluid carousel" src="img/slider/banner1.jpg">',
            '<img class="img-fluid carousel" src="img/slider/banner2.jpg">',
            '<img class="img-fluid carousel" src="img/slider/banner3.jpg">',
            '<img class="img-fluid carousel" src="img/slider/banner4.jpg">'
        ],
    }
});


// register modal component

Vue.component('modal', {
    template: '#modal-template',
    data: function(){
        return {
            navs: [
                // { name: 'Home', link:'#home' },
                { name: 'About', link:'#about' },
                { name: 'Menu', link:'#menu' },
                { name: 'Contact', link:'#contact' }
            ]
        }
    }
})

// nav menu only visible in mobile
var nav_mobile = new Vue({
    el: '#app',
    data: {
        showModal: false,
        brand: $brand
    }
})
