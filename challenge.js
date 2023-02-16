const riverSizes = (arr) => {
  const sizes = [];
  const visited = Array.from(Array(arr.length), () => Array.from(Array(arr[0].length), () => false));
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      const size = traverse(arr, visited, i, j)
      if (size > 0) sizes.push(size)
    }
  }
  return sizes;
}

const traverse = (arr, visited, i, j) => {
  if (i >= arr.length || i < 0) return 0
  if (j >= arr[0].length || j < 0) return 0

  if (arr[i][j] === 1 && !visited[i][j]) {
    let size = 1
    visited[i][j] = true
    size += traverse(arr, visited, i + 1, j)
    size += traverse(arr, visited, i - 1, j)
    size += traverse(arr, visited, i, j + 1)
    size += traverse(arr, visited, i, j - 1)
    return size
  }
  return 0
}

module.exports = riverSizes;