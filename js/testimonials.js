//GENERATED TESTIMONIALS WITH RANDOM TEXT////////////////

function getRandomTextFromApi(numberOfWords) {
  const options = {
    headers: {
      "X-API-KEY": "3ce95a5ac19241c1bb4a863113ac7356",
    },
  };

  return fetch(
    `https://randommer.io/api/Text/LoremIpsum?LoremType=business&type=words&number=${numberOfWords}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data: ", error));
}

const testimonials = document.querySelectorAll(".testimonial-text");

function generateTestimonialText(testimonial, textForReplaceMent) {
  testimonial.textContent = textForReplaceMent;
}

testimonials.forEach(function (testimonial) {
  async function executeTestimonialGeneration() {
    let newText = await getRandomTextFromApi(
      Math.floor(Math.random() * 40) + 1
    );
    generateTestimonialText(testimonial, newText);
  }
  executeTestimonialGeneration();
});
