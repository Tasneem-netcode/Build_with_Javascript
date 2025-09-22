// Array of user objects
let users = [
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "Dreamer 🌌 | Explorer 🌍 | Coffee Enthusiast ☕",
  },
  {
    name: "Meera Kapoor",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Lost in books 📚 | Lover of sunsets 🌇",
  },
  {
    name: "Meme Verma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Silent thinker 🤫 | Music = Therapy 🎶",
  },
  {
    name: "Riya Sen",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "Main character vibes ✨ | Traveler at heart ✈️",
  },
  {
    name: "Aditya Nair",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio: "Night owl 🌙 | Coding my way through life 💻",
  },
  {
    name: "Zara Khan",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio: "Too glam to give a damn 💅 | Chaos with style 💃",
  },
  {
    name: "Arjun Malhotra",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bio: "Adventure seeker 🏔️ | Food lover 🍜",
  },
];

// Function to create and display user cards 
function displayUsers(userList) { //userList = users array
  userList.forEach((user) => { 
    // Create main card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");
    img.alt = user.name;

    // Create blurred layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    
    // Create content cont ainer
    const content = document.createElement("div");
    content.classList.add("content");

    // Create heading
    const h3 = document.createElement("h3");
    h3.textContent = user.name;
    
    // Create paragraph
    const p = document.createElement("p");
    p.textContent = user.bio;
    
    // Append image to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    // Append heading & paragraph to content
    content.appendChild(h3);
    content.appendChild(p);

    // Append content to card
    card.appendChild(content);

    // Finally append card to body (or any container)
    document.querySelector(".cards").appendChild(card);
  });
}

// Initial display of all users
displayUsers(users);

let inp = document.querySelector(".inp");
const cardsContainer = document.querySelector(".cards");

if (inp && cardsContainer) {
  inp.addEventListener("keyup", (e) => {
    const query = e.target.value.trim().toLowerCase();
    console.log(query);
    const searchedValue = users.filter((user) =>
      user.name.toLowerCase().startsWith(query)
    );
    cardsContainer.innerHTML = ""; // clear previous cards
    // if no user found show "No users found"
    if (searchedValue.length === 0) {
      const message = document.createElement("h1");
      message.textContent = "No users found";
      cardsContainer.appendChild(message);
    } else {
      displayUsers(searchedValue);
    }
  });
} else {
  console.warn("Required DOM elements '.inp' or '.cards' not found.");
}

