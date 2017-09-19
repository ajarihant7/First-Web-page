window.onload=function()

{
   READMOREButton();
};


function READMOREButton()
{
    var button = document.getElementsByClassName("read-more-button");
    
for(var i=0; i < button.length ; i++)
{

button[i].addEventListener
('click',function()
{

var READMORE=this.parentElement.parentElement.getElementsByClassName("read-more")[0]

if(this.style.display == "")

        {    

            this.style.display = "none";

            READMORE.style.display="block";

 }
  
      };    

    }
    
}