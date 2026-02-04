onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const envelope = document.querySelector(".envelope"); // select the envelope
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    envelope.style.display = "none"; // hide the envelope
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    envelope.style.display = "block"; // show the envelope again
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
});
