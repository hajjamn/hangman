<script>
import { store } from '../store.js'
export default {
  data() {
    return {
      store,
      clicked: false,
      class: 'btn-light'
    }
  },
  props: {
    item: Object,
    i: Number
  },
  computed: {
    isCorrect() {
      if (store.secretWord.includes(this.item.letter)) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    isCorrectCheck() {
      this.clicked = true
      console.log(this.isCorrect)
      if (this.isCorrect === true) {
        console.log(`The ${this.item.letter} is correct`)
        this.class = 'btn-success'
        this.$emit('correct')
      } else {
        console.log(`The ${this.item.letter} is not correct`)
        this.class = 'btn-danger'
        this.$emit('wrong')
      }
    }
  }
}
</script>

<template>
  <div :class="clicked === true ? 'my-clicked' : ''">
    <button class="btn" @click="isCorrectCheck(item.letter)" :class="class">{{
      item.letter }}</button>
  </div>
</template>

<style scoped>
.my-clicked {
  pointer-events: none;
}
</style>