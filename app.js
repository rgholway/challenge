let info = require('./info.json')

function userSelected(info, input) {
  let selectedItems = []
  for (i in info) {
    if (typeof info[i] == 'object') {
      selectedItems = selectedItems.concat(userSelected(info[i], input))
    }
    if (info[i] == input) {
      selectedItems.push(info)
    }
  }
  return selectedItems
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What do you want to find? Type one of the following: Input, container, videoMode, StackView `, (input) => {
  console.log(userSelected(info, `${input}`))
  let length = userSelected(info, `${input}`).length
  console.log(`There are ${length} of what you selected`)
  readline.close()
})
