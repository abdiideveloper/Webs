// Function to display response based on user input
function showResponse(answer) {
  const responseElement = document.getElementById("response");
  if (answer === "yes") {
    responseElement.textContent = "Keren!";
    responseElement.style.color = "#28a745";
  } else {
    responseElement.textContent = "yah kamu AI";
    responseElement.style.color = "#dc3545";
  }
}