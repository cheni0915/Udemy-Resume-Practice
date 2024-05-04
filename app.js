// const 宣告
const text = document.querySelectorAll(".thePaths");
// console.log(text[0].getTotalLength());

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}


// const lastWord = document.querySelector("#twelfth");
// console.log(lastWord);


// 讓動畫跑完後文字消失,進入首頁
// 最後一個字位置
const lastWord = document.querySelector("#twelfth");
const animation = document.querySelector("div.animation");
// 監聽事件
lastWord.addEventListener("animationend", () => {
  animation.style ="transition: all 1s ease; opacity: 0; pointer-events:none;";
})
