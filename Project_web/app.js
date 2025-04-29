document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    
    document.querySelector('nav a[href="#contact"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });

    if (localStorage.getItem("name")) {
        nameInput.value = localStorage.getItem("name");
    }
    if (localStorage.getItem("email")) {
        emailInput.value = localStorage.getItem("email");
    }
    if (localStorage.getItem("message")) {
        messageInput.value = localStorage.getItem("message");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("message", messageInput.value);
        alert("Your message has been saved!");
        form.reset();
    });

    
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear Saved Data";
    clearBtn.classList.add("clear-btn");

    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("clear-btn-wrapper");
    btnWrapper.appendChild(clearBtn);
    form.appendChild(btnWrapper);

    clearBtn.addEventListener("click", function () {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("message");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        alert("Saved form data cleared.");
    });

   
    const searchDropdown = document.createElement("ul");
    searchDropdown.classList.add("search-dropdown");
    searchDropdown.style.display = "none";

    const searchOptions = ["Best Premium Watch", "Fitness Watch", "Smart Watch"];

    searchOptions.forEach(option => {
        const listItem = document.createElement("li");
        listItem.textContent = option;
        listItem.addEventListener("click", function () {
            searchInput.value = option;
            searchDropdown.style.display = "none"; 
        });
        searchDropdown.appendChild(listItem);
    });


    const searchBar = document.querySelector(".search-bar");
    searchBar.appendChild(searchDropdown);

    searchInput.addEventListener("focus", function () {
        searchDropdown.style.display = "block";
    });

    
    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target)) {
            searchDropdown.style.display = "none";
        }
    });

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase().trim();
        const sections = document.querySelectorAll(".section1");

        let found = false;
        sections.forEach(section => {
            const sectionText = section.textContent.toLowerCase();
            if (sectionText.includes(query)) {
                section.scrollIntoView({ behavior: "smooth" });
                found = true;
            }
        });

        if (!found) {
            alert("Section not found! Try selecting 'Best Premium Watch', 'Fitness Watch', or 'Smart Watch'.");
        }
    });
});