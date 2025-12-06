// زرار فتح الفورم
const btn = document.getElementById("contactBtn");
const form = document.getElementById("contactForm");

btn.addEventListener("click", () => {
    form.classList.toggle("show");
});

// عند إرسال الفورم
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("Please fill in all required fields!");
        return;
    }

    alert("Message Sent Successfully!");
    form.reset();
    form.classList.remove("show");
});
