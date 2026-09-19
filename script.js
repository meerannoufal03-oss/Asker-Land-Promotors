/* =========================================================
   ASKER LAND PROMOTORS
   MAIN WEBSITE CSS
========================================================= */


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Montserrat", sans-serif;
    background: #ffffff;
    color: #202830;
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    display: block;
    max-width: 100%;
}

button {
    font-family: inherit;
}


/* =========================================================
   COMMON
========================================================= */

.container {
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
}

.section {
    padding: 95px 0;
}

.content-loading {
    text-align: center;
    color: #888888;
    font-size: 14px;
}


/* =========================================================
   HEADER
========================================================= */

.header {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;
}

.navbar {
    width: 90%;
    max-width: 1250px;

    min-height: 90px;

    margin: 0 auto;

    display: flex;
    align-items: center;

    gap: 30px;
}


/* =========================================================
   LOGO
========================================================= */

.logo {
    display: flex;
    align-items: center;

    flex-shrink: 0;
}

.logo img {
    width: 145px;
    height: auto;

    object-fit: contain;
}


/* =========================================================
   NAVIGATION
========================================================= */

.nav-menu {
    list-style: none;

    margin-left: auto;

    display: flex;
    align-items: center;

    gap: 32px;
}

.nav-menu a {
    position: relative;

    color: #ffffff;

    font-size: 13px;
    font-weight: 600;

    transition: 0.3s ease;
}

.nav-menu a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 2px;

    background: #ffffff;

    transition: 0.3s ease;
}

.nav-menu a:hover::after {
    width: 100%;
}


/* =========================================================
   NAVBAR WHATSAPP
========================================================= */

.nav-whatsapp {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 120px;

    padding: 11px 20px;

    border-radius: 30px;

    background: #ffffff;
    color: #202830;

    font-size: 12px;
    font-weight: 700;

    transition: 0.3s ease;
}

.nav-whatsapp:hover {
    transform: translateY(-2px);
}


/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

.menu-toggle {
    display: none;

    border: none;
    background: transparent;

    color: #ffffff;

    font-size: 29px;

    cursor: pointer;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    position: relative;

    min-height: 720px;

    display: flex;
    align-items: center;

    background-image: url("images/hero.png.jpeg");

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    overflow: hidden;
}


/* Hero Overlay */

.hero-overlay {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(15, 25, 34, 0.90) 0%,
            rgba(15, 25, 34, 0.72) 45%,
            rgba(15, 25, 34, 0.30) 100%
        );
}


/* Hero Content */

.hero-content {
    position: relative;

    z-index: 2;

    width: 90%;
    max-width: 1180px;

    margin: 0 auto;

    padding-top: 65px;
}


/* =========================================================
   COMMON MARKDOWN CONTENT SPACING
========================================================= */

.about,
.services,
.why-us,
.contact {
    padding-top: 90px;
    padding-bottom: 90px;
}


/* Main Section Heading */

.about h1,
.services h1,
.why-us h1,
.contact h1 {
    margin-top: 0;
    margin-bottom: 32px;

    color: #202830;

    font-size: clamp(30px, 4vw, 45px);

    line-height: 1.25;
    font-weight: 800;
}


/* Sub Headings */

.about h2,
.services h2,
.why-us h2,
.contact h2 {
    margin-top: 38px;
    margin-bottom: 14px;

    color: #202830;

    font-size: 24px;
    line-height: 1.35;
}


/* Paragraph */

.about p,
.services p,
.why-us p,
.contact p {
    margin-top: 0;
    margin-bottom: 22px;

    color: #626b73;

    font-size: 16px;

    line-height: 1.9;
}


/* =========================================================
   ABOUT
========================================================= */

.about {
    background: #ffffff;
}

.about-content {
    max-width: 900px;
    margin: 0 auto;
}


/* =========================================================
   SERVICES
========================================================= */

.services {
    background: #f6f7f8;
}

.services-content {
    max-width: 1180px;
    margin: 0 auto;
}


/* Service List */

.services ul {
    list-style: none;

    margin: 35px 0 0;
    padding: 0;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 24px;
}

.services li {
    padding: 30px;

    background: #ffffff;

    border: 1px solid #e8eaec;

    border-radius: 10px;

    color: #555f67;

    line-height: 1.8;

    transition: 0.3s ease;
}

.services li:hover {
    transform: translateY(-5px);

    box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.07);
}


/* =========================================================
   WHY US
========================================================= */

.why-us {
    background: #ffffff;
}

.why-us ul {
    list-style: none;

    margin: 35px 0 0;
    padding: 0;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 24px;
}

.why-us li {
    padding: 30px;

    border-top: 3px solid #202830;

    background: #f8f8f8;

    color: #626b73;

    line-height: 1.8;
}


/* =========================================================
   CONTACT
========================================================= */

.contact {
    background: #f8f9fa;
}

.contact h3 {
    margin-top: 32px;
    margin-bottom: 10px;

    color: #202830;

    font-size: 22px;
}

.contact a {
    color: #202830;

    text-decoration: none;

    transition: 0.3s ease;
}

.contact a:hover {
    text-decoration: underline;
}



/* =========================================================
   CTA
========================================================= */

.cta {
    padding: 85px 0;

    background: #202830;

    text-align: center;
}

.cta h1,
.cta h2 {
    margin-bottom: 15px;

    color: #ffffff;

    font-size: clamp(30px, 4vw, 45px);

    line-height: 1.2;
}

.cta p {
    margin-bottom: 25px;

    color: rgba(255, 255, 255, 0.72);

    font-size: 14px;
}


/* =========================================================
   CONTACT
========================================================= */

.contact {
    background: #f6f7f8;
}

.contact > .container > div {
    max-width: 1180px;

    margin: 0 auto;
}


/* Contact paragraphs */

.contact p {
    margin-bottom: 10px;
}


/* Contact links */

.contact a {
    color: #202830;

    font-weight: 600;

    transition: 0.3s ease;
}

.contact a:hover {
    opacity: 0.65;
}


/* =========================================================
   FOOTER
========================================================= */

.footer {
    position: relative;

    overflow: hidden;

    background: #17212b;

    color: #ffffff;
}


/* Footer Background */

.footer-image {
    position: absolute;

    inset: 0;

    background-image:
        linear-gradient(
            rgba(23, 33, 43, 0.92),
            rgba(23, 33, 43, 0.96)
        ),
        url("images/footer.jpg");

    background-size: cover;

    background-position: center;

    background-repeat: no-repeat;
}


/* Footer Content */

.footer-content {
    position: relative;

    z-index: 2;
}

.footer-container {
    width: 90%;
    max-width: 1180px;

    margin: 0 auto;

    padding: 70px 0 50px;

    display: grid;

    grid-template-columns: 2fr 1fr 1fr;

    gap: 60px;
}


/* =========================================================
   FOOTER ABOUT
========================================================= */

.footer-logo {
    display: inline-block;

    margin-bottom: 18px;
}

.footer-logo img {
    width: 150px;
}

.footer-about p {
    max-width: 380px;

    color: rgba(255, 255, 255, 0.65);

    font-size: 13px;

    line-height: 1.8;
}


/* =========================================================
   FOOTER LINKS
========================================================= */

.footer-links,
.footer-social {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 10px;
}

.footer-links h3,
.footer-social h3 {
    margin-bottom: 12px;

    color: #ffffff;

    font-size: 15px;
}

.footer-links a,
.footer-social a {
    color: rgba(255, 255, 255, 0.65);

    font-size: 13px;

    transition: 0.3s ease;
}

.footer-links a:hover,
.footer-social a:hover {
    color: #ffffff;

    transform: translateX(3px);
}


/* =========================================================
   FOOTER BOTTOM
========================================================= */

.footer-bottom {
    width: 90%;
    max-width: 1180px;

    margin: 0 auto;

    padding: 20px 0;

    border-top: 1px solid rgba(255, 255, 255, 0.12);

    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.5);

    font-size: 11px;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1000px) {

    .nav-menu {
        gap: 20px;
    }

    .nav-menu a {
        font-size: 12px;
    }

    .services ul,
    .why-us ul {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-container {
        grid-template-columns: 1.5fr 1fr 1fr;

        gap: 35px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 768px) {

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 20px;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 120px;
        height: auto;
        display: block;
    }

    /* MENU TOGGLE - TOP RIGHT */
    .menu-toggle {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: auto;

        width: 48px;
        height: 48px;

        background: transparent;
        border: none;

        color: #ffffff;
        font-size: 34px;
        line-height: 1;

        cursor: pointer;

        padding: 0;
    }

    .nav-whatsapp {
        display: none;
    }

    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;

        width: 100%;

        display: none;
        flex-direction: column;

        background: rgba(20, 35, 45, 0.98);

        padding: 15px 20px;
    }

    .nav-menu.active {
        display: flex;
    }

    .nav-menu li {
        width: 100%;
        text-align: center;
    }

    .nav-menu a {
        display: block;
        padding: 14px;
        color: #ffffff;
    }

    /* -----------------------------------------
       Hero
    ----------------------------------------- */

    .hero {
        min-height: 620px;

        background-position: center center;
    }

    .hero-overlay {
        background:
            linear-gradient(
                180deg,
                rgba(15, 25, 34, 0.62),
                rgba(15, 25, 34, 0.91)
            );
    }

    .hero-content {
        width: 90%;

        padding-top: 65px;
    }

    .hero-content h1 {
        font-size: clamp(34px, 10vw, 48px);

        line-height: 1.12;
    }

    .hero-content p {
        font-size: 13px;
    }

    .hero-content p:first-of-type {
        font-size: 10px;

        letter-spacing: 2px;
    }

    .hero-content a {
        width: 100%;

        max-width: 250px;

        margin-top: 18px;
        margin-right: 0;
    }


    /* -----------------------------------------
       Sections
    ----------------------------------------- */

    .section {
        padding: 65px 0;
    }

    .container {
        width: 90%;
    }

    .about h1,
    .services h1,
    .why-us h1,
    .contact h1 {
        font-size: 29px;
    }


    /* -----------------------------------------
       About
    ----------------------------------------- */

    .about,
    .services,
    .why-us,
    .contact {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .about h1,
    .services h1,
    .why-us h1,
    .contact h1 {
        margin-bottom: 28px;

        font-size: 30px;

        line-height: 1.3;
    }

    .about h2,
    .services h2,
    .why-us h2,
    .contact h2 {
        margin-top: 32px;
        margin-bottom: 12px;

        font-size: 22px;
    }

    .about p,
    .services p,
    .why-us p,
    .contact p {
        margin-bottom: 20px;

        font-size: 15px;

        line-height: 1.85;
    }

    .services ul,
    .why-us ul {
        grid-template-columns: 1fr;

        gap: 18px;

        margin-top: 30px;
    }

    .services li,
    .why-us li {
        padding: 24px;
    }

    .contact h3 {
        margin-top: 28px;
        margin-bottom: 8px;

        font-size: 21px;
    }

    /* -----------------------------------------
       CTA
    ----------------------------------------- */

    .cta {
        padding: 65px 20px;
    }

    .cta h1,
    .cta h2 {
        font-size: 29px;
    }


    /* -----------------------------------------
       Contact
    ----------------------------------------- */

    .contact p {
        font-size: 13px;
    }


    /* -----------------------------------------
       Footer
    ----------------------------------------- */

    .footer-container {
        width: 90%;

        padding: 55px 0 40px;

        grid-template-columns: 1fr;

        gap: 35px;
    }

    .footer-logo img {
        width: 135px;
    }

    .footer-about p {
        max-width: 100%;
    }

    .footer-bottom {
        width: 90%;
    }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 420px) {

    .navbar {
        width: 90%;
    }

    .logo img {
        width: 110px;
    }

    .menu-toggle {
        font-size: 27px;
    }

    .hero {
        min-height: 590px;
    }

    .hero-content h1 {
        font-size: 32px;
    }

    .hero-content p {
        font-size: 12px;
    }

    .section {
        padding: 55px 0;
    }

    .about h1,
    .services h1,
    .why-us h1,
    .contact h1 {
        font-size: 27px;
    }

    .services li,
    .why-us li {
        padding: 20px 17px;
    }

}
