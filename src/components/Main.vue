<script>
export default {
  name: "Main",
  data() {
    return {
      characters: [
        { id: 1, name: "Homer Simpson", image: "images/homer-simpson.png" },
        { id: 2, name: "Ash Ketchum", image: "images/ash-ketchum.png" },
        { id: 3, name: "Batman", image: "images/batman.png" },
        { id: 4, name: "Gandalf", image: "images/gandalf.png" },
        { id: 5, name: "Harley-quinn", image: "images/harley-quinn.png" },
        { id: 6, name: "Hermione-granger", image: "images/hermione-granger.png" },
        { id: 7, name: "Barbie", image: "images/barbie.png" },
        { id: 8, name: "Minion", image: "images/minion.png" },
        { id: 9, name: "Shrek", image: "images/shrek.png" },
      ],
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row row-cols-4 g-2">
        <div class="col" v-for="character in characters" :key="character.id">
          <div class="character">
            <img :src="character.image" :alt="character.name">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.character{
  background-color: rgb(127, 217, 255);
  border: 2px solid blue;
  border-radius: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
  :hover{
    cursor: pointer;
  }
}
</style>