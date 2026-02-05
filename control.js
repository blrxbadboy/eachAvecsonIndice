//annex
function each(tab,func) {
    for (var i = 0; i < tab.length; i++) {
        func(tab[i])
        
    }
    
}
//ex 1
function indexedExponentials(n) {
    var result = []
    each(n,function(num,index) {
        var power=1
        for (var j= 0; j < index; j++) {
            power *= num;
        }
        result.push(power)
    })
    return result
}
//ex 2
function evenIndexedOddNumbers(ns) {
    var result =[]
    each(n, function(num, index) {
        if (index % 2 === 0 && num % 2 !== 0) {
            result.push(num)
        }
    })
    return result
}
//ex 3
function evenIndexedEvenLengths(ch) {
    var result =[]
    each(ch,function(str,index) {
        if (index % 2 === 0 && str.length % 2 === 0) {
            result.push(str)
        }
    })
    return result
}
//ex 4
function unique(tableau) {
    var result =[]
    each(tableau,function(el) {
        var exist = false
        each(result, function(r) {
            if (r === el) {
                exist = true
            }
        })
        if (!exists) {
            result.push(el)
        }
    })
    return result
}
//ex 5
function findDup(params) {
    
}
//ex 6
function palindrome(ch) {
    var len =ch.length
    for (var i = 0; i < len/2; i++) {
        if (ch[i] !== ch[len - 1 - i]) {
            return false
        }
    }
    return true
}
//ex 7
function chunk(tab, tail) {
    var result = []
    for (var i = 0; i < tab.length; i += tail) {
        var newTab = []
        for (var j = i; j < tab.length; j++) {
            newTab.push(tab[j])
        }
        result.push(newTab)
    }
    return result
}
//ex 8
function flattenArray(tab) {
    var result =[]
    each(tab,function(sub) {
        each(sub,function(item) {
            result.push(item)
        })
    })
    return result
}
// ex 9
function rotateArray(tab, rots) {

}
    





