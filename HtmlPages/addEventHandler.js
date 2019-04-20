document.querySelector('.myForm').addEventListener('submit',(event)=>{
    event.preventDefault();
   console.log(event.target.UserName.value);
   console.log(event.target.UserName.value);
   document.getElementById('UserName').style.border="solid 2px red";
document.getElementById('UserName').innerHTML+="<label>Invalid</label>";
var addErrorMess='<div><label style="color:red;font-size: 13px;" >invalid</label></div>';
/*var x = document.createElement("LABEL");
  var t = document.createTextNode("Male");
  x.setAttribute("for", "male");
  x.appendChild(t);
  x.style.color="red";*/
  //document.getElementById("myForm").insertBefore(addErrorMess,document.getElementById("myUser"));
  document.getElementById("myUser").innerHTML+=addErrorMess;
})

