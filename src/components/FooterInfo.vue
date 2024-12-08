<template>
  <footer id="contact-section">
    <p>CONTACT US</p>
    <p>Mail to: {{ contactInfo.email }}</p>
    <p>Cell: {{ contactInfo.phone }}</p>
  </footer>
</template>

<script>
export default {
  name: "FooterInfo",
  props: {
    contactInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
footer {
  margin-top: 20px;
  background-color: green;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>
