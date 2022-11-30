class Timer {
  counter = 0
  timer = 0

  start (secs: number, cb: (i: number) => void): Promise<void> {
    this.stop()
    this.counter = secs
    cb(secs)

    return new Promise(resolve => {
      this.timer = setInterval(() => {
        this.counter--
        if (this.counter === 0) {
          this.stop()
          resolve()
        }
        cb(this.counter)
      }, 1000)
    })
  }

  stop () {
    clearInterval(this.timer)
  }
}

export { Timer }
