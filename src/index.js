function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Jou gedig",
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
