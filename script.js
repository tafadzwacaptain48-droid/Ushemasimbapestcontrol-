/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navigation = document.getElementById("navigation");

    if (navigation) {
        navigation.classList.toggle("show");
    }

}


/* ================= WHATSAPP SERVICE REQUEST ================= */

function requestService(service) {

    const phoneNumber = "263773978319";

    const message =
        "Hello Ushemasimba Pest Control.%0A%0A" +
        "I would like to request your service.%0A%0A" +
        "Service: " + service;

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");

}


/* ================= CONTACT FORM ================= */

function sendContactForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value;

    const service =
        document.getElementById("customerService").value;

    const message =
        document.getElementById("customerMessage").value;


    const whatsappMessage =
        "Hello Ushemasimba Pest Control.%0A%0A" +
        "I would like to request a service.%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +

        "%0AService: " +
        encodeURIComponent(service) +

        "%0AProblem: " +
        encodeURIComponent(message);


    const url =
        "https://wa.me/263773978319?text=" +
        whatsappMessage;


    window.open(url, "_blank");

}


/* ================= POSTS ================= */

function readPost(post) {

    const title =
        document.getElementById("postTitle");

    const text =
        document.getElementById("postText");

    const modal =
        document.getElementById("postModal");


    const posts = {

        "Termite Warning Signs": {
            title: "Termite Warning Signs",
            text:
                "Look out for signs such as damaged wood, " +
                "mud tubes, discarded wings and other signs " +
                "of termite activity. Early attention can help " +
                "prevent a pest problem from becoming more serious."
        },

        "Why Pest Control Matters": {
            title: "Why Pest Control Matters",
            text:
                "Pest control helps manage unwanted insects " +
                "and rodents around homes and businesses. " +
                "Good pest management can contribute to a " +
                "cleaner and more comfortable environment."
        },

        "Welcome to Ushemasimba": {
            title: "Welcome to Ushemasimba",
            text:
                "Welcome to Ushemasimba Pest Control. " +
                "Our goal is to provide professional, reliable " +
                "and customer-focused pest management solutions."
        }

    };


    if (posts[post]) {

        title.textContent =
            posts[post].title;

        text.textContent =
            posts[post].text;

        modal.classList.add("show");

    }

}


/* ================= CLOSE POST ================= */

function closePost() {

    const modal =
        document.getElementById("postModal");

    if (modal) {
        modal.classList.remove("show");
    }

}


/* ================= CLOSE MODAL ================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("postModal");

    if (event.target === modal) {
        closePost();
    }

});


/* ================= SCROLL ANIMATION ================= */

function revealElements() {

    const elements =
        document.querySelectorAll(".reveal");


    elements.forEach(function(element) {

        const position =
            element.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 80;


        if (position < screenPosition) {

            element.classList.add("visible");

        }

    });

}


window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);