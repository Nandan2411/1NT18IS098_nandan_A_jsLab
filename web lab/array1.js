let colors = ["Yellow", "Red", "Blue", "Green"]
colors.forEach((item, index, ar) => { ar[index] = 'at index ${index} is the color is ${item}' })
console.log(colors)