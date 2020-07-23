const majorityElement = (nums) => {
  let count = 0;
  let candidate = -1;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += (nums[i] === candidate ? 1 : -1);
  }
  return candidate;
};

console.log(majorityElement([2,2,1,0,3,3,1,1,2,2,]));