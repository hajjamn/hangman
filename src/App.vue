<script>
import { store } from './store.js'
import axios from 'axios'
import UserButton from './components/UserButton.vue'

export default {
  components: {
    UserButton,
  },
  data() {
    return {
      store,
      isGame: false
    }
  },
  methods: {
    getRandomWord() {
      axios.get('https://random-word-api.herokuapp.com/word?lang=it')
        .then((res) => {
          console.log(res.data[0])
          store.secretWord = res.data[0].split('')
        })
    }
  },
  created() {
  }
}
</script>

<template>

  <div class="row flex-column w-100 h-100 justify-content-start align-items-center">
    <div class="col-auto">
      <button @click="getRandomWord()">Start</button>
    </div>
    <div class="col-auto" v-if="store.secretWord.length">
      <ul class="list-group flex-row">
        <li class="list-group-item" v-for="item in store.secretWord">_</li>
      </ul>
    </div>
    <div class="col-auto" v-if="store.secretWord.length">
      <ul class="list-group flex-row flex-wrap">
        <li v-for="(letter, i) in store.alphabet" class="list-group-item">
          <UserButton :item="letter" :key="i"></UserButton>
        </li>
      </ul>
    </div>
  </div>

</template>

<style lang="sass">
@use 'bootstrap'
</style>
