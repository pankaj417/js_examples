function spiral(array) {
  var rows = array.length;
  var columns = array[0].length;
  var topIndex = 0;
  var bottomIndex = rows - 1;
  var leftIndex = 0;
  var rightIndex = columns - 1;

  var result = [];

  var side = 'top';
  var i;

  while(topIndex <= bottomIndex && leftIndex <= rightIndex) {
    
    if (side === 'top') {
      for(i = leftIndex; i <= rightIndex; i++) {
        result.push(array[topIndex][i]);
      }
      topIndex++;
      side = 'right';
      continue;
    }
    if (side === 'right') {
      for(i = topIndex; i <= bottomIndex; i++) {
        result.push(array[i][rightIndex]);
      }
      rightIndex--;
      side = 'bottom';
      continue;
    }
    if (side === 'bottom') {
      for(i = rightIndex; i >= leftIndex; i--) {
        result.push(array[bottomIndex][i]);
      }
      bottomIndex--;
      side = 'left';
      continue;
    }
    if (side === 'left') {
      for(i = bottomIndex; i >= topIndex; i--) {
        result.push(array[i][leftIndex]);
      }
      leftIndex++;
      side = 'top';
      continue;
    }
  }

  return result.join(',');

}