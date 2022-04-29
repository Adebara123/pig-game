function(str, mask, n=1) {
    return(" + str).slice(0, -n).replace(/./g,mask)+ (" + str).slice(-n);
}
console.log(MaskCharacter(str, '#', 4));