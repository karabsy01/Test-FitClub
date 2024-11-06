document.querySelector('.get-started-btn').addEventListener('click', () => {
    alert("Getting started with your fitness journey!");
});

document.querySelectorAll('.join-program-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Joining the program!");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Função de inscrição ou agendamento será implementada em breve!");
        });
    });
});

const reviews = [
    {
        text: "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
        rating: "★★★★★",
        author: {
            name: "Jane Cooper",
            job: "Software Developer",
            photo: "profile.jpg"
        }
    },
    {
        text: "I’ve never felt more motivated and supported in my fitness journey. The trainers at this gym are simply the best! I am so grateful for their dedication and passion.",
        rating: "★★★★★",
        author: {
            name: "John Doe",
            job: "Web Designer",
            photo: "profile2.jpg"
        }
    },
    {
        text: "Amazing atmosphere and excellent trainers. The facility is top-notch and the workout plans are personalized to each individual's needs.",
        rating: "★★★★☆",
        author: {
            name: "Sarah Lee",
            job: "Product Manager",
            photo: "profile3.jpg"
        }
    }
];

let currentReview = 0;

function updateReview() {
    const reviewText = document.getElementById("review-text");
    const reviewRating = document.getElementById("review-rating");
    const reviewAuthor = document.getElementById("review-author");

    const review = reviews[currentReview];

    reviewText.textContent = `"${review.text}"`;
    reviewRating.innerHTML = review.rating;
    reviewAuthor.innerHTML = `
        <img src="${review.author.photo}" alt="Profile Picture">
        <div>
            <h3>${review.author.name}</h3>
            <p>${review.author.job}</p>
        </div>
    `;
}

document.getElementById("prev").addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReview();
});

document.getElementById("next").addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview();
});

// Inicializa com o primeiro review
updateReview();