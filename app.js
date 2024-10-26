// var vowelArray = []
// var consonant = []
// consonant.shift()
// consonant.pop()
function getInput() {
    var userinput = document.getElementById("input").value.toLowerCase()
    console.log("userinput:", userinput)
    var vowel_letter = document.getElementById("vowelChar")
    var consonnat_letter = document.getElementById("consonantChar")
    var is_contain_vowel = 1;

    for (var i = 0; i < userinput.length; i++) {

        if (userinput[i] === "a" || userinput[i] === "e" || userinput[i] === "i" || userinput[i] === "o" || userinput[i] === "u") {
            is_contain_vowel = 2;
            break;

        }
    }

    if (is_contain_vowel == 2) {
        // vowelArray.push(userinput)
        vowel_letter.innerText = userinput
    } else {
        // consonant.push(userinput)
        consonnat_letter.innerText = userinput
    }

    // console.log("Vowel:", vowelArray)
    // console.log("Consonant:", consonant)

}