$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animation]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.25 } // Trigger when 10% of the element is visible
  );

  animatedElements.forEach((el) => observer.observe(el));
});

function copyCA() {
    // The contract address to copy
    const contractAddress = "DoEhjCRVsDwEcTw3UQPGXRJTTMHGaGT7fhMxtrpKpump";

    // Create a temporary textarea element to copy the address
    const tempInput = document.createElement("textarea");
    tempInput.value = contractAddress;
    document.body.appendChild(tempInput);

    // Select the text and copy it to the clipboard
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element from the DOM
    document.body.removeChild(tempInput);

    // Show feedback that the address has been copied
    const feedback = document.getElementById("copy-feedback");
    feedback.style.display = "inline"; // Display "Copied!" message
    setTimeout(() => {
        feedback.style.display = "none"; // Hide it after 2 seconds
    }, 2000);
}
