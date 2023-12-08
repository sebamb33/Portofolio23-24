<template>
  <div class="header">
    <h1>Ambona Sébastien</h1>
    <p>Développeur web.</p>
  </div>
</template>
<style>
.header {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin : auto;
}
h1
{
  margin: auto;
  font-size: 3em;
  margin-top: 2.5em;
}
p{
  margin: auto;
  width: 10em;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>