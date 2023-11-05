document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const subsections = document.querySelectorAll(".domain-subsection");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            subsections.forEach(function (subsection) {
                subsection.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
            navLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });
            e.target.classList.add("active");
        });
    });

    // Show the "Background" subsection by default
    document.getElementById("background").style.display = "block";
});


document.addEventListener("DOMContentLoaded", function () {
    const milestones = document.querySelectorAll(".milestone");

    milestones.forEach(function (milestone) {
        milestone.addEventListener("mouseover", function () {
            milestone.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            milestone.style.transform = "translateY(-5px)";
        });

        milestone.addEventListener("mouseout", function () {
            milestone.style.boxShadow = "none";
            milestone.style.transform = "none";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    features.forEach(function (feature) {
        feature.addEventListener("mouseover", function () {
            feature.style.transform = "scale(1.02)";
            feature.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.2)";
        });

        feature.addEventListener("mouseout", function () {
            feature.style.transform = "scale(1)";
            feature.style.boxShadow = "none";
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const linkedInLinks = document.querySelectorAll('.member-links a:first-child');
    const emailLinks = document.querySelectorAll('.member-links a:last-child');

    linkedInLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(link.href, '_blank');
        });
    });

    emailLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = link.href;
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Get the feedback form container and buttons
    const feedbackFormContainer = document.getElementById('feedback-form-container');
    const openFeedbackButton = document.getElementById('contact');
    const closeFeedbackButton = document.getElementById('close-button');
    const cancelButton = document.getElementById('cancel-button');

    // Function to open the feedback form
    function openFeedbackForm() {
        feedbackFormContainer.style.display = 'flex';
    }

    // Function to close the feedback form
    function closeFeedbackForm() {
        feedbackFormContainer.style.display = 'none';
    }

    // Event listeners for opening and closing the feedback form
    openFeedbackButton.addEventListener('click', openFeedbackForm);
    closeFeedbackButton.addEventListener('click', closeFeedbackForm);
    cancelButton.addEventListener('click', closeFeedbackForm);

    // Prevent the form from being submitted (to be handled with a server script)
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // You can add code here to handle form submission (e.g., send the data to a server).
    });
});

