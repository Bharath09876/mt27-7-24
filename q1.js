// longest substring without repeationg characters

const s = 'abcabcbb'
// const s = 'abcabc'

const string_length = s.length



var temp = 0

const s_arr = s.split('')

for (var i = 0; i < string_length; i++) {
    for (let index = 0; index < string_length; index++) {
        if(index  > 0){
            
            if(s_arr[i]===s_arr[index])
            {
                var a = i
                n=[index]
               temp = 1    
            } 
            else{
                continue
            }    
        }
        
    }

    if(temp === 1){
        break
    }
    
}

var val = s.substring(a,n)
const e = new Set(val)
console.log(e.size)
console.log(val)