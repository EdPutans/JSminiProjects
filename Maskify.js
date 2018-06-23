
function maskify(cc) {
var characters=cc.split('')
if (characters.length<5){
  var nonSecret = characters.join('')
  return nonSecret}
if (characters.length>4){
  var secret=characters
  for (i=0;i<characters.length-4;i++){  
    secret[i]='#'}
  return secret.join('')}
}
