import { Timer } from './timer'
import { Color } from './types'
import { updateTimer, setColor, showWhiteField } from './display'

const timer = new Timer()

const runExperiment = async () => {
  await timer.start(30, n => {
    updateTimer(n.toString())
  })
  updateTimer('Start Timer')
  showWhiteField()
}

const reset = (color: Color) => () => {
  setColor(color)
}

const registerListeners = () => {
  document.querySelector('#timer')?.addEventListener('click', runExperiment)
  document.querySelector('#red')?.addEventListener('click', reset('red'))
  document.querySelector('#green')?.addEventListener('click', reset('green'))
  document.querySelector('#blue')?.addEventListener('click', reset('blue'))
  document.querySelector('#yellow')?.addEventListener('click', reset('yellow'))
}

const main = () => {
  registerListeners()
}

document.addEventListener('DOMContentLoaded', main, { once: true })
