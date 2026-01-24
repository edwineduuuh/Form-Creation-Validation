async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create unordered list
    const userList = document.createElement("ul");

    // Loop through users and create list items
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // Append the completed list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Clear previous content and show error message
    dataContainer.innerHTML = "Failed to load user data.";
  }
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
