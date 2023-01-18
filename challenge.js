const traverse = (arr, visited, i, j) => {
  if (i >= arr.length || i < 0) return 0;
  if (j >= arr[i].length || j < 0) return 0;
  let size = 0

  if (arr[i][j] === 1 && !visited[i][j]) {
    size++
    visited[i][j] = true
    size += traverse(arr, visited, i + 1, j)
    size += traverse(arr, visited, i - 1, j)
    size += traverse(arr, visited, i, j + 1)
    size += traverse(arr, visited, i, j - 1)
    return size
  }

  return 0;
}

const riverSizes = (arr) => {
  const sizes = [];
  const visited = Array.from(Array(arr.length), () => Array.from(Array(arr[0].length), () => false))

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const size = traverse(arr, visited, i, j);
      if (size > 0) sizes.push(size);
    }
  }

  return sizes;
}



// const river1 = [
//   [0, 0, 0, 1],
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
//   [1, 0, 0, 1],
// ];

// console.log(riverSizes(river1))

// const river2 = [
//   [0, 0, 0, 1, 1],
//   [1, 1, 0, 0, 1],
//   [0, 0, 0, 1, 1],
//   [0, 0, 0, 1, 0],
// ];

// riverSizes(river1)
// Output: [1, 4, 2]

// riverSizes(river2)
// Output: [6, 2]

module.exports = riverSizes;