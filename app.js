let pronoun = ["the", "our", "my"];
let adj = ["big", "great", "huge", "awesome"];
let noun = ["ice", "blob", "box", "hat"];
let dom = [".com", ".io", ".net", ".org"];

function generateDomain(arr1, arr2, arr3, arr4) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        for (let l = 0; l < arr4.length; l++) {
          console.log(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
        }
      }
    }
  }
}

generateDomain(pronoun, adj, noun, dom);


