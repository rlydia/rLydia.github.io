var rlydia = {
  // -----------------------------Array----------------------------------
  chunk: function(arr, size=1) {
    let len = arr.length
    let res = new Array(Math.ceil(len/size))
    let resIdx = 0
    for (let i = 0; i < len; i+=size) {
      res[resIdx++] = arr.slice(i, i+size)
    }
    return res
  },
  chunk1: function(arr, size=1) {
    return arr.map((_, i) => (i % size === 0 ? arr.slice(i, i+size): null))
              .filter(it => it)
  },

  compact: function(arr) {
    return arr.filter(it => it)
  },
  compact1: function(arr) {
    let res = []
    for (let x of arr) {
      if(x) {
        res.push(x)
      }
    }
    return res
  },

  difference: function(arr, ...values) {
    return arr.filter(it => values.every(value => !value.includes(it)))
  },

  // --------------------------------------------------------
  isFunction: function(value) {
    let toString = Object.prototype.toString
    return toString.call(value) === "[object Function]"
  },

  isArray: function(value) {
    let toString = Object.prototype.toString
    return toString.call(value) === "[object Array]"
  },

  isNumber: function(value) {
    return typeof value === "number"
  },

  isString: function(value) {
    return Object.prototype.toString.call(value) === "[object String]"
  },

  isObject: function(value) {
    let toString = Object.prototype.toString
    return (typeof value === "object" || typeof value === "funtion") && (toString.call(value) === "[object Object]" || toString.call(value) === "[object Array]" || toString.call(value) === "[object Function]" || toString.call(value) === "[object RegExp]")
  },

  isMatch: function(obj, src) {
    if (this.isEqual(obj, src)) {
      return true
    }
    for (let prop in src) {
      if (!(prop in obj) || !this.isEqual(obj[prop], src[prop])) {
        return false
      }
    }
    return true
  },


  isEqual: function(value, other) {
    if (value !== value && other !== other) {
      return true
    } else if (this.isNumber(value) && this.isNumber(other) || this.isString(value) && this.isString(other)) {
      if (value === other) {
        return true
      }
      return false
    } else if (this.isArray(value) && this.isArray(other)) {
      if (value.length !== other.length) {
        return false
      } else {
        for (let i=0; i < value.length; i++) {
          if (this.isObject(other[i]) && this.isMatch(value[i], other[i]) && this.isMatch(other[i], value[i])) {
            return true
          } else {
            return false
          }
        }
        return true
      }
    } else if (Object.prototype.toString.call(value) === "[object Object]" && (Object.prototype.toString.call(other) === "[object Object]")) {
      for (let key in value) {
        if (other[key] !== value[key] || !this.isEqual(Object.keys(other), Object.keys(value))) {
          return false
        }
      }
      return true
    }
    return false
  },

  isMatch: function(obj, src) {
    if (this.isEqual(obj, src)) return true
    for (let prop in src) {
      if (!(prop in obj) || !this.isEqual(obj[prop], src[prop])) {
        return false
      }
    }
    return true
  }, 

  matchesProperty: function(obj, src) {
    return function(obj) {
      for (let key in src) {
        if (src[key] !== obj[key]) {
          if (!this.isMatch(src[key], obj[key])) {
            return false
          } else if (src[key] !== obj[key]) {
            return false
          }
        }
      }
      return true
    }
  },

  property: function(propName) {
    return function(obj) {
      return obj[propName]
    }
  },

  iteratee: function(func = this.identity) {
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
    return value
  },

  differenceBy: function(arr, ...args) {
    let predicate
    let len = arguments.length
    if (typeof arguments[len - 1] === "string" || typeof arguments[len - 1] === "function") {
      predicate = this.iteratee(args.pop())
    } else {
      predicate = this.identity
    }
    let values = [].concat(...args)  
    let newArgs = values.map(item => predicate(item))
    return arr.filter(item => !newArgs.includes(predicate(item)))
  },
};