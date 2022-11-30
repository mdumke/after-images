import { Color } from './types'

const timer = document.querySelector('#timer-text') as HTMLDivElement
const screen = document.querySelector('#screen') as HTMLDivElement
const square = document.querySelector('#square') as HTMLDivElement

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
