<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <div class="container">
      <h1>Quote from a bot</h1>
      <h2>Seleziona un personaggio e vedi <br />cosa ha da dirti!</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  text-align: center;
  padding: 2rem 0;
}
</style>
