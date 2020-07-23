const islands = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0],
];

const dfs = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
    return 0;
  }
  grid[i][j] = 0;
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  return 1;
}

const numIslands = (grid) => {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        total += dfs(grid, i, j);
      }
    }
  }
  return total;
};

console.log(numIslands(islands))
