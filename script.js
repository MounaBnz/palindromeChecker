document.getElementById("btn").addEventListener("click",function(){
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});


function checkPalindrome(txt){
    let len = txt.length;
    let mid = Math.floor( len/2 );
    let result =document.getElementById("result");
    let i;

    for( i = 0; i < mid; i++){
        if( txt[i] !== txt[len-1-i]){
            result.textContent = "Nope! Not a palindrome";
            return;}
        result.textContent = "Yes! It's a palindrome"
    }
}
