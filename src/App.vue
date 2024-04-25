<script>
import { store } from './store.js'
import axios from 'axios'
import UserButton from './components/UserButton.vue'
import WordSquare from './components/WordSquare.vue'

export default {
  components: {
    UserButton,
    WordSquare,
  },
  data() {
    return {
      store,
      isGame: false
    }
  },
  methods: {
    start() {
      axios.get('https://random-word-api.herokuapp.com/word?lang=it')
        .then((res) => {
          console.log(res.data[0])
          store.secretWord = res.data[0].split('')
          this.isGame = true
        })
    },
    reset() {
      store.secretWord = []
      store.mistakes = 0
      for (let i = 0; i < store.alphabet.length; i++) {
        store.alphabet[i].clicked = false
        store.alphabet[i].status = ''
      }
      console.log(store)
      this.start()
    },
    mistake() {
      console.log(store.mistakes)
    },
    correct() {
      console.log('Correct')
    }
  },
  created() {
  }
}
</script>

<template>

  <div class="row flex-column w-100 h-100 justify-content-start align-items-center">
    <div class="col-auto">
      <button v-if="isGame === false" @click="start()">Start</button>
      <button v-else @click="reset()">Reset</button>
    </div>
    <div class="col-auto" v-if="store.secretWord.length">
      <ul class="list-group flex-row">
        <li class="list-group-item" v-for="letter in store.secretWord">
          <WordSquare :item="letter"></WordSquare>
        </li>
      </ul>
    </div>
    <div class="col-auto" v-if="store.secretWord.length">
      <ul class="list-group flex-row flex-wrap">
        <li v-for="(letter, i) in store.alphabet" class="list-group-item p-0">
          <UserButton :item="letter" :key="i" @correct="correct()" @mistake="mistake()">
          </UserButton>
        </li>
      </ul>
    </div>
  </div>

</template>

<style lang="sass">
@use 'bootstrap'
</style>
