<template>
  <header>
    <h1>{{ title }}</h1>
    <p>Nurture Nature, Track with Care – Grow Greener Every Day!</p>
  </header>
</template>

<script>
export default {
  name: "HeaderInfo",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background-color: green;
  color: white;
}

header h1 {
  font-size: 24px;
  margin: 10px 0;
  text-transform: uppercase;
}
</style>
