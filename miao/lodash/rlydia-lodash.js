var rlydia = {
  // Array （59）
  chunk1: function(arr, size=1) {
    var len = arr.length
    var res = new Array(Math.ceil(len/size))
    var resIdx = 0
    for (var i = 0; i < len; i+=size) {
      res[resIdx++] = arr.slice(i, i+size)
    }
    return res
  },
  chunk: function(arr, size=1) {
    return arr.map((_, i) => (i % size === 0 ? arr.slice(i, i+size): null ))
              .filter(Boolean)
  },

  compact1: function(arr) {
    let res = []
    for (let x of arr) {
      if (x) {
        res.push(x)
      }
    }
    return res
  },
  compact2: function(arr) {
    return arr.filter(it => it)
  },
  compact: function(arr) {
    return arr.filter(Boolean)
  },

  difference: function(arr, ...args) {
    return arr.filter(it => args.every(arg => !arg.includes(it)))
  },


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