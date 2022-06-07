export const debounce = (func, timeout, immediate) => {
  let timer

  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let context = this
    let args = arguments

    if (timer) clearTimeout(timer)
    if (immediate) {
      var callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, timeout)
      if (callNow) func.apply(context, args)
    } else {
      timer = setTimeout(function () {
        func.apply(context, args)
      }, timeout)
    }
  }
}
