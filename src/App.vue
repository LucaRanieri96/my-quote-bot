<script>
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Answer from './components/Answer.vue';

export default {
    components: {
    Header,
    Main,
    Loading,
    Footer,
    Answer,
},
data() {
    return {
      answerCharacter: null,
    };
  },
  methods: {
    showAnswer(character) {
      this.answerCharacter = character;
    },
    hideAnswer() {
      this.answerCharacter = null;
    },
  },
};
</script>

<template>
    <section class="vue-home">
        <Header/>
        <Main @open-modal="showAnswer"/>
        <Loading/>
        <Footer/>
        <Answer v-if="answerCharacter" :character="answerCharacter" @close-answer="hideAnswer"/>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';

.vue-home {
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    header, footer{
        background-color: rgb(255, 217, 0);
        color: rgb(72, 72, 245);
    }
    main{
        padding: 1rem 0;
        background-color: rgb(0, 136, 240);
        height: 100vw;
    }
}
</style>
