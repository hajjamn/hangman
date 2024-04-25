<script>

import { store } from '../store.js'

export default {
  data() {
    return {
      store,
    }
  },
  props: {
    item: String,
  },
  computed: {
    thisLetterIndex() {
      return store.alphabet.map((x) => x.letter).indexOf(this.item)
    }
  }
}
</script>

<template>
  <div v-if="store.alphabet[thisLetterIndex].status === 'found'">
    {{ item.toUpperCase() }}
  </div>
  <div v-else>
    _
  </div>

</template>