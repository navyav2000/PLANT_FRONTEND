<template>
    <div class="care-schedule">
      <h2>Care Schedule</h2>
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Watering</th>
            <th>Sunlight</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="plant in careSchedule" :key="plant.id">
            <td>{{ plant.name }}</td>
            <td>{{ plant.watering }}</td>
            <td>{{ plant.sunlight }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "CareSchedule",
    props: {
      careSchedule: Array, // Accepts care schedule data as a prop
    },
  };
  </script>
  
  <style scoped>
  .care-schedule {
    padding: 20px;
  }
  h2 {
    color: #2e7d32;
    text-align: center;
  }
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
  }
  .schedule-table th,
  .schedule-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  .schedule-table th {
    background-color: #2e7d32;
    color: white;
  }
  </style>
  