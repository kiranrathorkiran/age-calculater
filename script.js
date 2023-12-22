

    

  


 function agecal()
{  
    bdate= document.querySelector('#bthd').value
    bmonth= document.querySelector('#bthm').value
    byear= document.querySelector('#bthy').value
    result= document.querySelector('.result')
    btn= document.querySelector('#button')
    
  
    d=new Date();
    cdate=d.getDate();
    cmonth=d.getMonth();
   cyear=d.getFullYear();
  
   cmonth++
   
    
 
   adate=cdate-bdate
   amonth=cmonth-bmonth
   //console.log("1"+adate,amonth);
   

   ayear=cyear-byear
   if(cdate<bdate)
   { 
       
       adate=30+adate;
       amonth--
      

   }
   if(cmonth<bmonth)
   { 
    
    amonth=12+amonth;
       ayear--
   }
   
   
   
    age="your age  is   : "+ayear+"  year  "+amonth+  "Month  or  "+adate+"  days" ;
    result.innerHTML=age;
   
}



	 