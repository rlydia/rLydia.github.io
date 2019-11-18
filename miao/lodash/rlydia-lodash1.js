// var rlydia = {
//   compact: function(ary) {
//     return ary.filter(it => it)
//   }
// }


var rlydia = function() {
  /**
   * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
   *
   * @param   {Array}  array   The array to process.
   * @param   {number}  size   The length of each chunk
   *
   * @return  {Array}         Returns the new array of chunks.
   * @example
   * 
   * chunk(['a', 'b', 'c', 'd'], 3)
   * // => [['a', 'b', 'c'], ['d']]
   */
  function chunk(array, size = 1) {
    // ['a', 'b', 'c', 'd'].slice(3, 3+3)  // slice()方法返回一个新数组
    // ["d"]

    // 当size为负、size = 0、array == []、array == null时 --> res = []
    let length = array == null ? 0 : array.length
    if (!length || size < 1) {
      return []
    }
    let resIdx = 0
    let res = new Array(Math.ceil(length / size))
    for (let idx = 0; idx < length; idx += size) {
      res[resIdx++] = array.slice(idx, (idx + size))
    }
    return res
  }

  function chunk2(array, size = 1) {
    let length = array == null ? 0 : array.length
    let res = []
    if (!length || size < 1) {
      return res
    }
    for (let idx = 0; idx < length; idx += size) {
      res.push(array.slice(idx, (idx + size)))
    }
    return res
  }


  /**
   * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
   *
   * @param   {Array}  ary  The array to compact.
   *
   * @return  {Array}       Returns the new array of filtered values.
   * @example
   * 
   * compact([0, 1, false, 2, '', 3, "hhh", null])
   * // => [1, 2, 3, "hhh"]
   */
  function compact(ary) {
    let res = []
    let resIdx = 0
    for (let value of ary) {
      if(value) {
        res[resIdx++] = value
      }
    }
    return res
  }

  function compact2(ary) {
    // filter方法返回一个新数组
    return ary.filter(it => it)
  }


  function difference(arr, ...args) {
    return arr.filter(item => args.every(val => !val.includes(item)))
  }

  function difference2(arr, ...args) {
    let arg = args.reduce((res, cur) => res.concat(cur))  // 这一步又将其合并为了数组- -
    return arr.filter(item => !arg.includes(item))
  }

  // 参数为 args
  // function difference(arr, args) {
  //   const res = []
  //   for (const v of arr) {
  //     if (!(args.includes(v))) {
  //       res.push(v)
  //     }
  //   }
  //   return res
  // }



  function differenceBy(arr, ...args) {
    let iteratee = null
    if (typeof args[args.length - 1] === "function" || typeof args[args.length - 1] === "string") {
      iteratee = args.pop()
    } else {
      return arr
    }

    let values = [].concat(...args)
    let newArgs = values.map(item => predicate(item))
    return arr.filter(item => !newArgs.includes(iteratee(item)))
  }


  function drop(array, n=1) {
    const length = array == null ? 0 : array.length
    return length ? slice(array, n < 0 ? 0 : n, length) : []
  }



  function dropRight(array, n=1) {
    const length = array == null ? 0 : array.length
    return slice(array, 0, length - n )
  }


  function dropRightWhile(array, predicate) {

  }


  function dropWhile(array, predicate) {

  }


  function fill(array, value, start=0, end=array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }


  function findIndex(array, predicate, fromIndex = 0) {

  }

  function findLastIndex(array, predicate, fromIndex = array.length-1){

  }

  // ------------------------------------------------
  function flatten(ary) {
    return [].concat(...ary)
  }

  function flatten2(ary) {
    let res = []
    for (let item of ary) {
      if (Array.isArray(item)) {
        for (let val of item) {
          res.push(val)
        }
      } else {
        res.push(item)
      }
    }
    return res
  }

  function flatten3(ary) {
    let res = []
    for (let item of ary) {
      if (Array.isArray(item)) {
        res.push(...item)
      } else {
        res.push(item)
      }
    }
    return res
  }

  function flatten4(ary) {
    return flattenDepth(ary)
  }

  // ------------------------------------------------
  function flattenDeep(ary) {
    let res = []
    for (let item of ary) {
      if (Array.isArray(item)) {
        let flattedItem = flattenDeep(item)
        res.push(...flattedItem)
      } else {
        res.push(item)
      }
    }
    return res
  }

  function flattenDeep2(ary) {
    return flattenDepth(ary, Infinity)
  }

  // ------------------------------------------------
  function flattenDepth(ary, depth=1) {
    // 特殊情况；depth=0时，返回一个新的数组 ary
    if (depth == 0) {
      return ary.slice()
    }
    let res = []
    for (let item of ary) {
      if (Array.isArray(item)) {
        let flattedItem = flattenDepth(item, depth - 1)
        res.push(...flattedItem)
      } else {
        res.push(item)
      }
    }
    return res
  }
  
  function flattenDepth2(ary, depth) {
    for (let i = 0; i < depth; i++) {
      ary = flatten(ary)
    }
    return ary
  }


  // ------------------------------------------------
  function fromPairs1(pairs) {
    let length = pairs == null ? 0 : pairs.length
    let res = {}
    for (let idx = 0; idx < length; idx++) {
      let pair = pairs[idx]
      res[pair[0]] = pair[1]
    }
    return res
  }

  function fromPairs2(pairs) {
    var res = {}
    for (let pair of pairs) {
      res[pair[0]] = pair[1]
    }
    return res
  }
  
  function fromPairs(pairs) {
    var res = {}
    pairs.forEach((item) => {
      res[item[0]] = item[1]
    })
    return res
  }
  // ------------------------------------------------

  function head(ary) {
    return ary.length == 0 ? undefined : ary[0]
  }

  // ------------------------------------------------
  
  function indexOf(ary, value, fromIndex=0) {
    let len = ary === null ? 0 : ary.length
    for (let i = (fromIndex < 0 ? fromIndex + len: fromIndex); i < len; i++) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  }

  // ------------------------------------------------
  function initial(ary) {
    let len = ary == null ? 0 : ary.length
    return len ? slice(ary, 0, len-1) : []
  }

  // ------------------------------------------------
  function intersection(...arys) {
    return arys[0].filter(item => arys.every(val => val.includes(item)))
  }

  // ------------------------------------------------
  function join(ary, sep=',') {
    let len = ary == null ? 0 : ary.length
    return ary.reduce((res, item, idx) => {
      idx != len - 1 ? res += String(item) + sep: res += String(item)
      return res
    }, "")
  }

  function join2(ary, sep=',') {
    let len = ary == null ? 0 : ary.length
    return ary.reduce((res, item, idx) => {
      idx != len - 1 ? res += item + sep: res += item
      return res
    }, "")
  }


  // ------------------------------------------------
  function last(ary) {
    let len = ary == null ? 0 : ary.length
    return ary[len - 1]
  }


  // ------------------------------------------------
  function lastIndexOf(ary, value, fromIdx = ary.length-1) {
    for (let i = fromIdx; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  }

  // ------------------------------------------------
  function pull(ary, ...values) {
    return ary.filter(item => !values.includes(item))
  }

  // ------------------------------------------------
  function reverse(ary) {
    ary = ary.reduce((res, item) => {
      res.unshift(item)
      return res
    }, [])
    return ary
  }


  // ------------------------------------------------
  function sortedIndex(ary, value) {
    let len = ary == null ? 0 : ary.length
    for (let i = 0; i < len; i++) {
      if (value < ary[0]) {
        return 0
      }
      if ((ary[i] <= value && ary[i+1] >= value) || (i = len-1) ) {
        return i+1
      }
    }
  }

  // ------------------------------------------------
  function union(...arys) {
    let ary = [].concat(...arys)
    return uniq(ary)
  }

  function union2(...arys) {
    let res = []
    let ary = [].concat(...arys)
    ary.forEach(item => {
      if (!res.includes(item)) {
        res.push(item)
      }
    })
    return res
  }

  // ------------------------------------------------
  function unionBy(...arys) {

  }

  // ------------------------------------------------

  function uniq(ary) {
    let res = []
    ary.forEach(item => {
      if(!res.includes(item)) {
        res.push(item)
      }
    })
    return res
  }

  // ------------------------------------------------
  function uniqBy(ary, [iteratee=_.identity]) {


  }

  // ------------------------------------------------
  function unzip1(ary) {
    let res = []
    for (let i = 0; i < ary[0].length; i++) {
      let item = []
      for(let j = 0; j < ary.length; j++) {
        item.push(ary[j][i])
      }
      res.push(item)
    }
    return res
  }

  function unzip2(ary) {
    let res = []
    for (let i = 0; i < ary[0].length; i++) {
      res[i] = []
      for(let j = 0; j < ary.length; j++) {
        res[i][j] = ary[j][i]
      }
    }
    return res
  }

  // function unzip(ary){
  //   return ary[0].map((_, idx) => {
  //     return ary.map(row => row[idx])
  //   })
  // }

  function unzip(ary) {
    return ary[0].map((_, idx) => ary.map(row => row[idx]))
  }

  // ------------------------------------------------
  function without(ary, ...values) {
    return ary.filter(item => !values.includes(item))
  }

  // ------------------------------------------------
  function xor(...ary) {
    let res = []
    let flat = [].concat(...ary)
    flat.forEach(item => {
      if (!res.includes(item)) {
        res.push(item)
      } else {
        let idx = res.indexOf(item)
        res.splice(idx, 1)
      }
    })
    return res
  }

  function xor2(...arys) {
    var ary = flatten(arys)
    var dic = {}
    for (var val of ary) {
      dic[val] = dic[val] + 1 || 1
    }
    return ary.filter(item => {
      return dic[item] == 1
    })
  }

  // ------------------------------------------------
  function zip(...arys) {
    let res = []
    for (let i = 0; i < arys[0].length; i++) {
      res[i] = []
      for (let j = 0; j < arys.length; j++) {
        res[i][j] = arys[j][i]
      }
    }
    return res
  }

  function zip1(...arys) {
    return arys[0].map((_, idx) => {
      return arys.map(row => row[idx])
    })
  }


  // function zip(...arys) {
  //   return arys[0].map(function(_, idx) {
  //     return arys.map(row => row[idx])
  //   })
  // }

  // ------------------------------------------------
  function slice(ary, start=0, end=ary.length) {
    let res = []
    for (let i = start; i < end; i++) {
      res.push(ary[i])
    }
    return res
  }

 // -------Collection-Section--------------------------
  function 


  // -------Function-Section--------------------------
  function flip(func) {
    return function(...args) {   // 接收参数
      return func(...args.reverse())
    }
  }

  function before(n, func) {
    var times = 0
    var lastResult
    return function(...args) {
      times++
      if(times < n) {
        return lastResult = func(...args)
      } else {
        return lastResult
      }
    }
  }


  function after(n, func) {
    var times = 0
    return function(...args) {
      times++
      if (times < n) {
        return
      } else {
        return func(...args)
      }
    }
  }

  function ary(f, n = f.length) {
    return function (...args) {
      return f(...args.slice(0, n))
    }
  }

  function unary(fun) {
    return ary(f, 1)
  }

  function spread(f) {
    return function(ary) {
      return f.apply(null, ary)
    }
  }
  
  // ------------------------------------------------
  return {
    chunk,
    compact,
    difference,
    // differenceBy,
    drop,
    dropRight,
    // dropRightWhile,
    // dropWhile,
    fill,
    // findIndex,
    // findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    intersection,
    join,
    last,
    lastIndexOf,
    pull,
    reverse,
    sortedIndex,
    union,
    // unionBy,
    uniq,
    // uniqBy,
    unzip,
    without,
    xor,
    zip,
    slice,
  }
}()