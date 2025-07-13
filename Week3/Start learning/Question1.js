function cleanRoom(arr) {
  const groupedByType = {};

  arr.forEach((item) => {
    const type = typeof item;
    if (!groupedByType[type]) {
      groupedByType[type] = [];
    }
    groupedByType[type].push(item);
  });

  const result = [];

  for (const type in groupedByType) {
    const sorted = groupedByType[type].sort((a, b) => a - b);
    const organized = [];

    let currentGroup = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i - 1]) {
        currentGroup.push(sorted[i]);
      } else {
        if (currentGroup.length > 1) {
          organized.push(currentGroup);
        } else {
          organized.push(currentGroup[0]);
        }
        currentGroup = [sorted[i]];
      }
    }

    if (currentGroup.length > 1) {
      organized.push(currentGroup);
    } else {
      organized.push(currentGroup[0]);
    }

    result.push(organized);
  }

  return result.length === 1 ? result[0] : result;
}

console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));

console.log(cleanRoom([1, "2", "3", 2]));
