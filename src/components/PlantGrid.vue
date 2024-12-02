<template>
  <div class="plant-grid">
    <h2>Plants Information</h2>
    <div class="grid-container">
      <div class="plant-card" v-for="plant in plants" :key="plant.id">
        <img src="require(`@/assets/`)" alt="Plant" />
        <h3>{{ plant.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlantGrid",
  props: {
    plants: Array,
  },
};
</script>

<style scoped>
.plant-grid {
  padding: 20px;
}
h2 {
  color: #2e7d32;
  text-align: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}
.plant-card {
  text-align: center;
}
img {
  width: 50px;
  height: 50px;
}
</style>
