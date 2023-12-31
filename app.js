
// Header
let hamburger = document.querySelector("#hamburger");
let headerDown = document.querySelector(".header-down");
let cross = document.querySelector("#cross");
let header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    headerDown.style.display = "flex";
    hamburger.style.display = "none";
    cross.style.display = "flex";
    header.style.borderBottom = "1px solid #0EBFCC";

});

cross.addEventListener("click", () => {
    headerDown.style.display = "none";
    hamburger.style.display = "flex";
    cross.style.display = "none";
    header.style.borderBottom = "none";
});

function scrollToServices() {
    const servicesSection = document.getElementById('servicesSection');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills() {
    const skillsSection = document.getElementById('skillsSection');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    const con = document.getElementById('con');
    con.scrollIntoView({ behavior: 'smooth' });
}

let nextimg = document.querySelector(".projectIconnext");
let projectImg1 = document.querySelector(".projectImg1");
let projectIconprev = document.querySelector(".projectIconprev");
let projectTitle = document.querySelector(".projectTitle");
let projectDescription = document.querySelector(".projectDescriptionText");
let projectLinkWeb = document.querySelector(".projectLinkWeb");
let projectLinkRepo = document.querySelector(".projectLinkRepo");

const projectDetails = [
    {
        projectTitle: "Amazon Clone",
        projectDescription: "I created an Amazon website clone using HTML5, CSS, and Bootstrap, replicating the platform's interface and functionalities. Leveraging HTML5 and CSS, I focused on delivering a seamless user experience. Bootstrap aided in building a responsive layout, ensuring compatibility across devices. This project showcases my front-end development skills and attention to detail.",
        projectLinkWeb : "https://vishesh-verma-work.github.io/Amazon-Frontend-Clone/",
        projectLinkRepo : "https://github.com/Vishesh-Verma-Work/Amazon-Frontend-Clone"
    },

    {
        projectTitle: "Spotify Clone",
        projectDescription: "I developed a Spotify clone, meticulously recreating the acclaimed music streaming service's interface and feature set. This undertaking showcases my adeptness in front-end development, encompassing intricate UI design and functional implementation to mirror Spotify's user experience.",
        projectLinkWeb : "https://vishesh-verma-work.github.io/Spotify-Clone/",
        projectLinkRepo : "https://github.com/Vishesh-Verma-Work/Spotify-Clone"
    },

    {
        projectTitle: "SIH Train Announcement",
        projectDescription: "The Train Information and Announcement System, an ongoing Smart India Hackathon project, aims to deliver real-time train data and dynamic announcement creation, enhancing the railway experience. While the project is currently incomplete, I'm diligently working on its development and improvement.",
        projectLinkWeb : "https://vishesh-verma-work.github.io/SIH-Project-Real-Time-Train-Announcement-Creator-by-API/",
        projectLinkRepo : "https://github.com/Vishesh-Verma-Work/SIH-Project-Real-Time-Train-Announcement-Creator-by-API"
    },
    {
        projectTitle: "Healthcare-A-Web-Based-Solution",
        projectDescription: "This project revolutionizes healthcare by solving the issues of long hospital queues, cumbersome appointment booking, and ensuring data security. It empowers patients to book appointments conveniently, reduces waiting times, and provides doctors with real-time appointment information. Join us in simplifying healthcare for a better experience.",
        projectLinkWeb : "https://vishesh-verma-work.github.io/Minor_Project-Revolutionizing-Healthcare-A-Web-Based-Solution/",
        projectLinkRepo : "https://github.com/Vishesh-Verma-Work/Minor_Project-Revolutionizing-Healthcare-A-Web-Based-Solution"
    }
]

const defaultDescription = {
    projectTitle: "Simoin Says Game",
    projectDescription: "I've independently crafted a responsive Simon Says game using HTML, CSS, and advanced JavaScript. Managing user input intricacies to create and replicate dynamic, challenging patterns, this project stands as a testament to my coding proficiency, innovation, and commitment to crafting engaging user experiences.",
    projectLinkWeb : "https://vishesh-verma-work.github.io/Simon-Says-Game/",
    projectLinkRepo : "https://github.com/Vishesh-Verma-Work/Simon-Says-Game"
}

let picFlag = 1;

nextimg.addEventListener("click", () => {
    if (picFlag >= 1 && picFlag < 5) {
        picFlag++;
        let name = `./img/project/projectImg${picFlag}.jpg`;
        projectTitle.textContent = projectDetails[picFlag - 2].projectTitle;
        projectDescription.textContent = projectDetails[picFlag - 2].projectDescription;
        projectLinkWeb.href = projectDetails[picFlag - 2].projectLinkWeb;
        projectLinkRepo.href = projectDetails[picFlag - 2].projectLinkRepo;


        projectImg1.src = name;
    }
})

projectIconprev.addEventListener("click", () => {
    if (picFlag > 1 && picFlag <= 5) {
        picFlag--;
        let name = `./img/project/projectImg${picFlag}.jpg`;
        try {
            projectTitle.textContent = projectDetails[picFlag - 2].projectTitle;
            projectDescription.textContent = projectDetails[picFlag - 2].projectDescription;
            projectLinkWeb.href = projectDetails[picFlag - 2].projectLinkWeb;
            projectLinkRepo.href = projectDetails[picFlag - 2].projectLinkRepo;
        }
        catch {
            projectTitle.textContent = defaultDescription.projectTitle;
            projectDescription.textContent = defaultDescription.projectDescription;
            projectLinkWeb.href = defaultDescription.projectLinkWeb;
            projectLinkRepo.href = defaultDescription.projectLinkRepo;
        }
        projectImg1.src = name;
    }
})
