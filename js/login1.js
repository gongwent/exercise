 
 //密码为空提示不能为空，同理用户名为空，提示不能为空，并可进行下一步
 function checkUserName(obj){
            var username = obj;  
            var checkUserNameResult = document.getElementById("checkUserNameResult");    
            if(username.trim().length==0){  
                  checkUserNameResult.innerHTML = "用户名不能为空";    
                  obj.focus();  
            }else{  
                 checkUserNameResult.innerHTML = "";    
            }  
        }  
 
  
 
        function checkPassword(obj){  
            var password = obj;  
            var checkPasswordResult = document.getElementById("checkPasswordResult");   
            if(password.trim().length==0){  
                checkPasswordResult.innerHTML = "密码不能为空";    
                obj.focus();  
            }else{  
                 checkPasswordResult.innerHTML = "";    
            }  
        }  
  
  