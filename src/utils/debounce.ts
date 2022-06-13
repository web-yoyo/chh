// export const debounce = (func, timeout, immediate, context) => {
//   let timer
//   return function () {
//     let args = arguments

//     if (timer) clearTimeout(timer)
//     if (immediate) {
//       let callNow = !timer
//       timer = setTimeout(() => {
//         timer = null
//       }, timeout)
//       if (callNow) func.apply(context, args)
//     } else {
//       timer = setTimeout(function () {
//         func.apply(context, args)
//       }, timeout)
//     }
//   }
// }
