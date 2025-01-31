// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https:/www.github.com/rafiqul-bashar/", // Always put "/" at the end of the URL
    author: "rafiqul-bashar",
    desc: "An interactive language learning app for improving your language skills.",
    title: "Verblang Language Learning",
    ogImage: "images/astro-language-learning.png",
    keywords:
        "Language learning app, language skills, interactive learning, vocabulary, grammar",
    postPerPage: 3 // Adjust the number of posts per page as needed
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "#",
        icon: "ph:github-logo-duotone",
        title: `Follow ${SITE.author} on Github`,
        active: true
    },
    {
        name: "Facebook",
        href: "#",
        icon: "ph:facebook-logo-duotone",
        title: `Follow ${SITE.title} on Facebook`,
        active: false
    },
    {
        name: "Instagram",
        href: "#",
        icon: "ph:instagram-logo-duotone",
        title: `Follow ${SITE.author} on Instagram`,
        active: true
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: "ph:linkedin-logo-duotone",
        title: `Follow ${SITE.title} on LinkedIn`,
        active: true
    },
    {
        name: "Mail",
        href: "mailto:yourmail@gmail.com",
        title: `Send an email to ${SITE.title}`,
        icon: "",
        active: false
    },
    {
        name: "Twitter",
        href: "#",
        icon: "ph:twitter-logo-duotone",
        title: `Follow ${SITE.author} on Twitter`,
        active: true
    },
    {
        name: "YouTube",
        href: "#",
        icon: "",
        title: `${SITE.title} on YouTube`,
        active: false
    },
    {
        name: "WhatsApp",
        href: "#",
        icon: "",
        title: `${SITE.title} on WhatsApp`,
        active: false
    },
    {
        name: "Snapchat",
        href: "#",
        icon: "",
        title: `${SITE.title} on Snapchat`,
        active: false
    },
    {
        name: "CodePen",
        href: "#",
        icon: "",
        title: `${SITE.title} on CodePen`,
        active: false
    },
    {
        name: "Discord",
        href: "#",
        icon: "",
        title: `${SITE.title} on Discord`,
        active: false
    }
];
