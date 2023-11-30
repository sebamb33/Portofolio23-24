<template>
  <div class="Navbar">
    <ul>
      <li>Technologie</li>
      <li>Expérience</li>
      <li>Projets</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<style>
ul {
  margin: auto;
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 2em;
  transition: background-color 0.3s, border-color 0.3s; 
}

ul:first-child {
  margin-top: 2em;
}

.Navbar {
  position: relative;
  border: 1px solid #ccc;
  width: 12em;
  margin-top: 7em;
  border-radius: 1em;
  background: #f5f5f5;
  padding: 1em;
}

/* Style au survol */
li:hover {
  background-color: #ccc;
  border-color: #888;
  cursor: pointer;
}


</style>
