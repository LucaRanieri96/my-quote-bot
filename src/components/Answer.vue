<script>
export default {
  name: "Answer",
};
</script>

<template>
  <div class="answer answer-hidden">
    <div class="container">
      <div class="my_modal">
        <div class="my_modal-box">
          <div class="modal-content">
            <div class="d-flex justify-content-between">
              <h2>Homer Simpson</h2>
              <div class="modal-close">
                <img src="images/close.svg" alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
              exercitationem omnis quasi fugit, maxime recusandae consequuntur
              facere possimus eos natus distinctio, minus ipsum quisquam error
              debitis aliquam ex quia nam!
            </p>
            <code
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              qui.</code
            >
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
.answer-hidden {
  display: none;
}
</style>
