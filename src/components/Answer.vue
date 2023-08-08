<script>
export default {
  name: "Answer",
  props: {
    character: Object,
  },
  data() {
    return {
      showDescription: false,
    };
  },
  methods: {
    toggleDescription() {
      setTimeout(() => {
        this.showDescription = !this.showDescription;
      }, 100);
    },
  },
};
</script>

<template>
  <div class="answer answer-hidden">
    <div class="container">
      <div class="my_modal">
        <div class="my_modal-box">
          <div class="modal-content">
            <div class="d-flex justify-content-between align-items-center">
              <h2>
                {{ character.name }}
                <span @click="toggleDescription" class="arrow-icon">
                  <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </span>
              </h2>
              <div class="modal-close" @click="$emit('close-answer')">
                <img src="images/close.svg" alt="Close" />
              </div>
            </div>
            <p
              :class="['description', { 'show-description': showDescription }]"
            >
              {{ character.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.answer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(161, 210, 255, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
}
.my_modal-box {
  background-color: #fff;
  margin-top: 2rem;
  padding: 20px;
  border: 2px solid blue;
}
.modal-close {
  background-color: #ffaafb;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.arrow-icon {
  cursor: pointer;
  margin-left: 10px;
}
.answer p.show-description {
  display: block;
}

.description {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s, max-height 0.3s;
}

.answer p.show-description {
  opacity: 1;
  max-height: 1000px;
}
</style>
