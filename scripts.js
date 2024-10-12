document.getElementById("recipeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the ingredients from the input field
    const ingredients = document.getElementById("ingredients").value;

    // Make an AJAX request to the backend (Java Servlet)
    fetch("RecipeServlet", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `ingredients=${encodeURIComponent(ingredients)}`
    })
    .then(response => response.text())
    .then(data => {
        // Display the generated recipes in the recipeResult div
        document.getElementById("recipeResult").innerHTML = data;
    })
    .catch(error => {
        console.error("Error fetching recipes:", error);
        document.getElementById("recipeResult").innerHTML = "<p>Error generating recipes. Please try again later.</p>";
    });
});
