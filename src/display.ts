import { Color } from './types'

const timer = document.querySelector('#timer-text') as HTMLDivElement
const screen = document.querySelector('#screen') as HTMLDivElement
const square = document.querySelector('#square') as HTMLDivElement
const patches = {
  red: document.querySelector('#red') as HTMLDivElement,
  green: document.querySelector('#green') as HTMLDivElement,
  blue: document.querySelector('#blue') as HTMLDivElement,
  yellow: document.querySelector('#yellow') as HTMLDivElement
}

export const updateTimer = (text: string) => {
  timer.textContent = text
}

export const showWhiteField = () => {
  screen.style.backgroundColor = '#fff'
  square.style.backgroundColor = '#fff'
}

export const setColor = (color: Color) => {
  screen.style.backgroundColor = color
  square.style.backgroundColor = '#ccc'
}

export const markSelection = (color: Color) => {
  Object.keys(patches).forEach(key => {
    patches[key as Color].classList.remove('selected')
  })
  patches[color].classList.add('selected')
}
