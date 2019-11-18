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

  // ---------------------------------

  // 执行深比较来决定两者的值是否相等。
  isEqual: function(value, other) {
    if (value !== value && other !== other) {
      return true
    } else if(isNumber(value) && isNumber(other) || isString(value) && isString(other) ) {
      if (value === other) {
        return true
      }
      return false
    } else if (isArray(value) && isArray(other)) {
      if (value.length !== other.length) {
        return false
      } else {
        for(let i = 0; i < value.length; i++) {
          if(isObject(value[i]) ) {
            if (isObject(other[i]) && isMatch(value[i], other[i]) && isMatch(other[i], value[i])) {
              return true
            } else {
              return false
            }
          } else if (value[i] !== other[i]){
            return false
          }
        }
        return true
      }
    } else if (Object.prototype.toString.call(value) === "[object Object]"  && (   Object.prototype.toString.call(other) === "[object Object]")) {
      for (let key in value) {
        if (other[key] !== value[key] || !isEqual(Object.keys(other), Object.keys(value))) {
          return false
        }
      }
      return true
    }
    return false
  },
  isNumber: function(value) {
    return typeof value === "number"
  },

  isString: function(value) {
    return Object.prototype.toString.call(value) === "[object String]"
  },

  isObject: function(value) {
    let toString = Object.prototype.toString
    return (typeof value === "object" || typeof value === "function") && (toString.call(value) === "[object Object]" || toString.call(value) === "[object Array]" || toString.call(value) === "[object Function]" || toString.call(value) === "[object RegExp]")
  },

  isFunction: function(value) {
    let toString = Object.prototype.toString
    return toString.call(value) === "[object Function]"
  },

  isArray: function(value) {
    let toString = Object.prototype.toString
    return toString.call(value) === "[object Array]"
  },

  isMatch: function(obj, src) {
    if (isEqual(obj, src)) return true
    for (let prop in src) {
      if (!(prop in obj) || !isEqual(obj[prop], src[prop])) {
        return false
      }
      return true
    }
  },

  // 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue。 如果是返回 true，否则返回 false;
  matchesProperty: function(obj, src) {
    return function(obj) {
      for (let key in src) {
        if (src[key] !== obj[key]) {
          if (!isMatch(src[key], obj[key])) {
            return false
          } else if (src[key] !== obj[key]) {
            return false
          }
        }
      }
      return true
    }
  },

  property(propName) {
    return function(obj) {
      return obj[propName]
    }
  },

  iteratee: function(func) {
    if (this.isFunction(func)) {
      return func
    } else if (this.isArray(func)) {
      return this.matchesProperty(...func)
    } else if (this.isObject(func) && !this.isArray(func)) {
      return obj => this.isMatch(obj, func)
    } else if (this.isString(func)) {
      if (func[0] == '\/' && func[func.length - 1] == '\/') {
        return str => (new RegExp(join(slice(split(func, ''), 1, func.length - 1), ''))).test(str)
      }
      return this.property(func)
    }
  },

  identity: function(value) {
    return value;
  },

  // differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  differenceBy: function(arr, ...args) {
    debugger;  
    let predicate   
    let last = arguments[arguments.length - 1]   // Math.floor
    if (typeof last === "string" || typeof last === "function") {
      predicate = this.iteratee(args.pop())  
    } else {
      predicate = this.identity
    }
    let values = [].concat(...args)   //  [2.3, 3.4]

    let newArgs = values.map(it => predicate(it))
    return arr.filter(it => !newArgs.includes(predicate(it)))
  },


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