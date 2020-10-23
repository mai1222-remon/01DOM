//DOM Document Object Model の略
//HTMLのタグをObject(部品)と見立てて。JavaScriptで操作できる方法のこと。

//タグ名を指定して。DOM操作する方法
//getElemetsByTagname

let list = document.getElementsByTagName('a')
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[0].href);

//geElementsByCoassName
let fuga = document.getElementsByTagName('fuga');
console.log(fuga);

for(let i =0; i <fuga.length;i++){
	console.log(fuga[i].textContent);
}

//querySelector
let tako =document.querySelector('#tako .ika');
console.log(tako);
 
 //querySelectorAll(合致するすべての要素の取得)
 let ika = document.querySelectorAll('#tako .ika');
 console.log(ika);
