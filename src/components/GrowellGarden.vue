<template>
  <div class="plant-grid">
    <!-- Display plant images -->
    <div class="plant" v-for="plant in plants" :key="plant.apiName">
      <p class="plant-name"><strong>{{ plant.name }}</strong></p>
      <img :src="require(`@/assets/${plant.image}`)" :alt="plant.name" @click="fetchPlantData(plant.name)" />
    </div>

    <!-- Display plant details as a centered popup -->
    <div v-if="plantData" class="plant-data-popup">
      <div class="plant-data">
        <button class="close-btn" @click="closePlantData">X</button>
        <h2>{{ plantData.name }}</h2>
        <p><strong>Scientific Name:</strong> {{ plantData.species }}</p>
        <p><strong>Watering Frequency:</strong> Every {{ plantData.wateringFrequency }} days</p>
        <p><strong>Care Instructions:</strong> {{ plantData.careInstructions }}</p>
        <p><strong>Last Watered:</strong> {{ new Date(plantData.lastWatered).toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrowellGarden",
  data() {
    return {
      plants: [
        { name: "Strawberry", image: "Strawberry.jpg", apiName: "Strawberry" },
        { name: "Cactus", image: "Cactus.jpg", apiName: "Cactus" },
        { name: "Grapes", image: "Grapes.jpg", apiName: "Grapes" },
        { name: "Lilly", image: "Lilly.jpg", apiName: "Lilly" },
        { name: "Marigold", image: "Marigold.jpg", apiName: "Marigold" },
        { name: "Mint", image: "Mint.jpg", apiName: "Mint" },
        { name: "Pineapple", image: "Pineapple.jpg", apiName: "Pineapple" },
        { name: "Sunflower", image: "Sunflower.jpg", apiName: "Sunflower" },
      ],
      plantData: null,
    };
  },
  methods: {
    async fetchPlantData(name) {
      try {
        console.log(name);
        const response = await fetch(`https://plant-backend-lk3m.onrender.com/api/plants/${name}`);
        if (!response.ok) throw new Error("Failed to fetch plant details.");

        const data = await response.json();
        console.log(data);
        if (data) {
          this.plantData = data;
        } else {
          throw new Error("Plant not found.");
        }
      } catch (error) {
        console.error("Error fetching plant data:", error);
        alert("Unable to fetch plant details. Please try again.");
      }
    },
    closePlantData() {
      this.plantData = null;
    },
  },
};
</script>

<style scoped>
.plant-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 20px;
  background-color: #f9f9f9;
}

.plant {
  cursor: pointer;
  text-align: center;
}

.plant img {
  width: 100%;
  max-width: 150px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.plant img:hover {
  transform: scale(1.1);
}

/* Centered popup styling */
.plant-data-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.plant-data {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: left;
}

.close-btn {
  background: green;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  float: right;
  border-radius: 5px;
}

.close-btn:hover {
  background: green;
}
</style>
