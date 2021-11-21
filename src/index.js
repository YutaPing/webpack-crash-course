import _ from 'lodash'
// import { NAME, Nijyou } from './utilities'
// import * as utilities from './utilities'
//import { NAME as NAME_OF_YUTAKA } from './utilities'
import Lion from './utilities' //defaultを設定 Lionのかわりに適当にTigerとしてもOK


// console.log(Nijyou(4))
// console.log(NAME)
// console.log(utilities.NAME)
// console.log(NAME_OF_YUTAKA)
console.log(Lion.say()) //defaultを設定している


function component() {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())