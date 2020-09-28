import module1func1 from './module1.js'

let module2func2 = () => {
  alert ('Module2 function 2, calling imports form module 1')
  module1func1()
}