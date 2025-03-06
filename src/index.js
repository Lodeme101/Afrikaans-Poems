function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "b470c9ata4051fc05b61a5bd8d4od2f3";
  let prompt = `User input: Generate an Afrikaans poem about ${userInput.value}`;
  let context =
    "You are the Afrikaans Shakespeare of this era, an expert is short 4 line poems. Make sure to use the user input as a theme and add a <br> element between each line. Sign the poem with 'Afrikaanse Shakespeare' in a <strong></strong> element at the end.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
