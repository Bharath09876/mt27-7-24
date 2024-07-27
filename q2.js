//Longest palindrom string


var s = 'babad'

var splitc = s.split('')

var i, j

for (i = 0; i <= s.length; i++) {
    for (j = 1; j <= s.length; j++) {
        if (splitc[i] === splitc[j]) {
            var char_rev = s.substring(i, j + 1)
            var content_rev = char_rev.split('').reverse().join('')
            if (char_rev.length > 1) {

                if (char_rev === content_rev)
                    console.log(char_rev)
            }
        }
    }
}

// console.log(s.substring(0, 3))