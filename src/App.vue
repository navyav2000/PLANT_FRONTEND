<template>
  <div id="app">
    <HeaderInfo :title="headerTitle" />
    <div id="plants-section">
      <GrowellGarden />
    </div>
    <FooterInfo :contactInfo="contactInfo" />
  </div>
</template>

<script>
import HeaderInfo from "./components/HeaderInfo.vue";
import GrowellGarden from "./components/GrowellGarden.vue";
import FooterInfo from "./components/FooterInfo.vue";

export default {
  name: "App",
  components: {
    HeaderInfo,
    GrowellGarden,
    FooterInfo,
  },
  data() {
    return {
      headerTitle: "WELCOME TO GROWELL GARDEN",
      contactInfo: {
        email: "growellgarden@newhaven.com",
        phone: "+1 (123)-456-7890",
      },
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: white;
}

#plants-section {
  min-height: 500px;
  padding: 20px;
  background-color: white;
}
</style>
