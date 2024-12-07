<template>
  <div id="app">
    <header>
      <!-- Close button for handling window close or modal -->
      <button @click="closeWindow">Close</button>
      
      <!-- Header Title -->
      <h1>WELCOME TO GROWELL GARDEN</h1>
      
      <!-- Navigation Buttons -->
      <button @click="goToSection('plants-section')">List of Plants</button>
      <button @click="goToSection('contact-section')">Contact</button>
    </header>

    <!-- Plants Section -->
    <div id="plants-section">
      <GrowellGarden />
    </div>

    <!-- Contact Section -->
    <footer id="contact-section">
      <p>CONTACT US</p>
      <p>Mail to: growellgarden@newhaven.com</p>
      <p>Cell: +1 (123)-456-7890</p>
    </footer>
  </div>
</template>

<script>
import GrowellGarden from "./components/GrowellGarden.vue";

export default {
  name: "App",
  components: {
    GrowellGarden,
  },
  methods: {
    // Close function for alert or modal
    closeWindow() {
      alert("Window close functionality is restricted by browsers for security reasons.");
    },
    // Smoothly scroll to a section by ID
    goToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        alert("Section not found.");
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: white; /* Set the background color to white */
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: green;
  color: white;
}

header h1 {
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
}

header button {
  background-color: white;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

header button:hover {
  background-color: #f0f0f0;
}

footer {
  margin-top: 20px;
  background-color: green;
  color: white;
  padding: 10px;
}

/* Remove light blue background and set the section to have a white background */
#plants-section {
  min-height: 500px; /* or set a specific height */
  padding: 20px;
  background-color: white; /* Ensure background is white */
}
</style>
