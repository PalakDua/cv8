const reviews=[

{
	name:"smith",
	job:"Ux designer",
	img:"img2.jpg",
	text:"Sriracha literally flexitarian irony, vape marfa unicorn.",   
	
},
{
	name:"JOHN",
	job:"full stack developer",
	img:"img3.jpg",
	text:"Sriracha literally flexitarian irony, vape marfa unicorn.",
},
{
	name:"JONAS",
	job:"web developer",
	img:"img4.jpg",
	text:"Sriracha literally flexitarian irony, vape marfa unicorn.",
	 
}
];

const image=document.getElementById("img1");
const namefull=document.querySelector(".author");
const textfull=document.querySelector("#info");
const prevbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");
const Job=document.getElementById("job");
let curr=0;
window.addEventListener("DOMContentLoaded",function(){

	show(curr);
});
function show(person){
	const item=reviews[person];
	image.src=item.img;
	namefull.textContent=item.name;
	textfull.textContent=item.text;
    Job.textContent=item.job;
}

prevbtn.addEventListener("click",function(){
	curr--;
	if(curr<0){
		curr=reviews.length-1;
	}
	show(curr);


});
nextbtn.addEventListener("click",function(){
	curr++;
	if(curr>reviews.length-1){
		curr=0;
	}
	show(curr);

});

