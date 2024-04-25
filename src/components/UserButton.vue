<script>
import { store } from '../store.js'
export default {
  data() {
    return {
      store,
      /* clicked: false, */
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
      this.item.clicked = true
      if (this.isCorrect === true) {
        this.item.status = 'found'
        this.class = 'btn-success'
        this.$emit('correct')
      } else {
        store.mistakes++
        this.class = 'btn-danger'
        this.$emit('mistake')
      }
    }
  }
}
</script>

<template>
  <div :class="item.clicked === true ? 'my-clicked' : ''">
    <button class="btn p-3" @click="isCorrectCheck(item.letter)" :class="class">{{
      item.letter.toUpperCase() }}</button>
  </div>
</template>

<style scoped>
.my-clicked {
  pointer-events: none;
}
</style>