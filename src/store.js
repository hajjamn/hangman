import { reactive } from 'vue'

export const store = reactive({
  secretWord: [],
  maxWordLength: Number,
  correct: 0,
  mistakes: 0,
  maxMistakes: 10,
  alphabet: [
    {
      letter: 'a',
      clicked: false,
      status: ''
    },
    {
      letter: 'b',
      clicked: false,
      status: ''
    },
    {
      letter: 'c',
      clicked: false,
      status: ''
    },
    {
      letter: 'd',
      clicked: false,
      status: ''
    },
    {
      letter: 'e',
      clicked: false,
      status: ''
    },
    {
      letter: 'f',
      clicked: false,
      status: ''
    },
    {
      letter: 'g',
      clicked: false,
      status: ''
    },
    {
      letter: 'h',
      clicked: false,
      status: ''
    },
    {
      letter: 'i',
      clicked: false,
      status: ''
    },
    {
      letter: 'l',
      clicked: false,
      status: ''
    },
    {
      letter: 'm',
      clicked: false,
      status: ''
    },
    {
      letter: 'n',
      clicked: false,
      status: ''
    },
    {
      letter: 'o',
      clicked: false,
      status: ''
    },
    {
      letter: 'p',
      clicked: false,
      status: ''
    },
    {
      letter: 'q',
      clicked: false,
      status: ''
    },
    {
      letter: 'r',
      clicked: false,
      status: ''
    },
    {
      letter: 's',
      clicked: false,
      status: ''
    },
    {
      letter: 't',
      clicked: false,
      status: ''
    },
    {
      letter: 'u',
      clicked: false,
      status: ''
    },
    {
      letter: 'v',
      clicked: false,
      status: ''
    },
    {
      letter: 'z',
      clicked: false,
      status: ''
    },

  ]
})