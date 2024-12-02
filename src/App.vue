<template>
  <div id="app">
    <HeaderSection />
    <div class="content">
      <div class="left">
        <h3><strong>About</strong></h3>
        <p>Learn how to care for your plants and keep them healthy!
          A plant care tracker is essential for ensuring the health and growth of indoor and outdoor plants. 
          It helps individuals monitor watering schedules, sunlight exposure, and temperature requirements, preventing neglect or overcare. 
          By tracking plant needs, it promotes better overall care, leading to vibrant, thriving plants. Additionally, it encourages responsibility and enhances one's connection to nature, making plant care more enjoyable and effective.
        </p>
        <CareSchedule :careSchedule="careScheduleData" />
      </div>
      <div class="right">
        <PlantGrid :plants="plantsData" />
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "./components/HelloWorld.vue";
import FooterSection from "./components/FooterMainPage.vue";
import CareSchedule from "./components/CareSchedule.vue";
import PlantGrid from "./components/PlantGrid.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    FooterSection,
    CareSchedule,
    PlantGrid,
  },
  data() {
    return {
      plantsData: [
        { id: 1, name: "Strawberry", image: require("./assets/1.jpg") },
        { id: 2, name: "Cactus", image: require("./assets/2.jpg") },
        { id: 3, name: "Sunflower", image: require("./assets/3.jpg") },
        { id: 4, name: "Mint", image: require("./assets/4.jpg") },
        { id: 5, name: "Grapes", image: require("./assets/5.jpg") },
        { id: 6, name: "Pineapple", image: require("./assets/6.jpg") },
        { id: 7, name: "Marigold", image: require("./assets/7.jpg") },
        { id: 8, name: "Lilly", image: require("./assets/8.jpg") },
      ],
      careScheduleData: [
        { id: 1, name: "Spider Plant", watering: "Weekly", sunlight: "Indirect" },
        { id: 2, name: "Peace Lily", watering: "Bi-weekly", sunlight: "Low" },
        { id: 3, name: "Snake Plant", watering: "Monthly", sunlight: "Indirect" },
      ],
    };
  },
};
</script>

<style>

h3 {
  color: #2e7d32;
  text-align: center;
  font-size: 20px;
}

#app {
  font-family: Arial, sans-serif;
}
.content {
  display: flex;
  gap: 20px;
  padding: 20px;
  text-align: justify;
}
.left {
  flex: 1;
}
.right {
  flex: 2;
}
</style>
