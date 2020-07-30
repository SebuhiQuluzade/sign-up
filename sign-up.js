function qs(s){
    return document.querySelectorAll(s)
            }
    var div,inp,btn,password,error,password_wrong
            div=qs('div')
            inp=qs('input')
            btn=qs('button')
        password=   qs('.password1')[0]
        password2=   qs('.password2')[0]
        error= qs('#error') 
        password_wrong= qs('#password_wrong')[0]


           inp[0].focus() 
           function pw(param) { 
      let    password_length=   qs('#password-length')[0]   
      let length= password.value.length

          if(length<=6){
                          message='Zəif'
                      password_length.style.color='red'
                     
          }
          else if(length>6 && length<=10){
     message='Orta'
                      password_length.style.color='#aaa'
          }
          else if(length>10 && length<20){
     message='Güclü'
                      password_length.style.color='green'
          }
          password_length.innerHTML=message
          qs('#show-password')[0].style.display='block'
            } 
   
      function equal() {

       if(password.value!=password2.value){
password_wrong.innerHTML='Şifrələr eyni deyil!' 
                   password_wrong.style.display='block' 


      }
      else{
                   password_wrong.style.display='none' 

      }
     
  
      }    
          error.style.display='none'

              function sbt(params) {
        
         
            accept= qs('#accept')[0]
      for(n=0;n<1;n++){
          if(inp[n].value===''){
message='Boş ola bilməz '
          }
          else{
       message=''
          }
   
 qs('#password-length')[0].innerHTML='' 
            if(accept.checked==false){
message2='Gizlilik şərtlərini qəbul edin'
  }

else{
message2=''

}
   
    }


error[0].innerHTML=message + '<br>'+ message2


   error[0].style.display='block'
        
    }
    function  show_password(param) { 
      qs('#show-password')[0].setAttribute('class','fa fa-eye-slash')
      for(i=0;i<2;i++){
        qs('.psw-inp')[i].setAttribute('type','text')
      }

      // qs('.fa-eye')[0].classList.add( 'fa-heart')
     }
  
