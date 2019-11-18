var rlydia = {
  // Array （59）
  chunk: function(arr, size=1) {
    let len = arr.length
    let res = new Array(Math.ceil(len/size))
    console.log(res)
    let resIdx = 0
    for (let i = 0; i < len; i+=size) {
      res[resIdx++] = arr.slice(i, i+size)
    }
    return res
  },


  compact: function() {},
  difference: function() {},
  differenceBy: function() {},
  differenceWith: function() {},
  drop: function() {},
  dropRight: function() {},
  dropRightWith: function() {},
  dropWhile: function() {},
  fill: function() {},
  findIndex: function() {},
  findLastIndex: function() {},
  flatten: function() {},
  flattenDeep: function() {},
  flattenDepth: function() {},
  fromPairs: function() {},
  head: function() {},
  indexOf: function() {},
  initial: function() {},
  intersection: function() {},
  intersectionBy: function() {},
  intersectionWith: function() {},
  join: function() {},
  last: function() {},
  lastIndexOf: function() {},
  nth: function() {},
  pull: function() {},
  pullAll: function() {},
  pullAllBy: function() {},
  pullAllWith: function() {},
  reverse: function() {},
  sortedIndex: function() {},
  sortedIndexBy: function() {},
  sortedIndexOf: function() {},
  sortedLastIndex: function() {},
  sortedLastIndexBy: function() {},
  sortedLastIndexOf: function() {},
  sortedUniq: function() {},
  sortedUniqBy: function() {},
  tail: function() {},
  take: function() {},
  takeRight: function() {},
  takeRightWhile: function() {},
  takeWhile: function() {},
  union: function() {},
  unionBy: function() {},
  unionWith: function() {},
  uniq: function() {},
  uniqBy: function() {},
  uniqWith: function() {},
  unzip: function() {},
  unzipWith: function() {},
  withOut: function() {},
  xor: function() {},
  xorBy: function() {},
  xorWith: function() {},
  zip: function() {},
  zipObject: function() {},
  zipObjectDeep: function() {},
  zipWith: function() {},

}