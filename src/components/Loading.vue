<script>
export default {
  name: "Loading",
};
</script>

<template>
    <div class="loading loading-hidden">
      <img src="images/loader.gif" alt="Loader">
    </div>
</template>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(161, 210, 255, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100px;
  }
}
.loading-hidden{
  display: none;
}
</style>
