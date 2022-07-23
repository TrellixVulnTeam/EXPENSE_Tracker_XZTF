function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

class LoginData{
  constructor(email,password)
  {
    this.email=email;
    this.password=password;
  }
}

let data=document.getElementById('form');

data.addEventListener('submit',(e)=>{
  e.preventDefault();
  let password=document.getElementById('password').value;
  let email=document.getElementById('email').value;
  console.log(email,password);
  let data=new LoginData(email,password);
  console.log(data);

  axios({
    method:'post',
    url:'http://localhost:3000/login',
    data:data
  }).then((res)=>{
    if(res.status == 200){
                
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userDetails', JSON.stringify({name:res.data.name, email: res.data.email}))
    }
    else{
      return;
    }
  }).catch((err)=>{console.log(err)});
  

})