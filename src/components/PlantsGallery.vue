<template>
    <div class="plants-gallery">
      <h3>Plants Gallery</h3>
      <div class="gallery">
        <img v-for="(plant, index) in plants" :key="index" src="/gallery-icon.png" alt="Plant" />
      </div>
      <a href="#" class="view-more">View more</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "PlantsGallery",
    props: {
      plants: Array,
    },
  };
  </script>
  
  <style scoped>
  .plants-gallery {
    text-align: center;
    padding: 20px;
  }
  .gallery {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .view-more {
    display: block;
    margin-top: 10px;
    color: #2e7d32;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  