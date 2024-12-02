<template>
  <header class="header">
    <h1>Welcome to My Garden</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Care-Schedule</a></li>
        <li><a href="#">Information</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
.header {
  background-color: #d7f7e5;
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid #a1d0c1;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
}
nav ul li a {
  text-decoration: none;
  color: #2e7d32;
  font-weight: bold;
}
</style>
