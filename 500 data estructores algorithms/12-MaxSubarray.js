const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
  let sub_max = [];
  let global_max = [Number.NEGATIVE_INFINITY];

  const total = (arr) => {
    return arr.reduce((acc, val) => acc + val, 0);
  };

  for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > nums[i] + total(sub_max)) {
      sub_max = [nums[i]];
    } else {
      sub_max.push(nums[i]);
    }
    if (total(sub_max) > total(global_max)) {
      global_max = [ ...sub_max ];
    }
  }

  return global_max;
};

console.log(maxSubArray(array))
