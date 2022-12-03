setInterval(() =>{
    let dt=new Date();
    let hr=dt.getHours();
    let mi=dt.getMinutes();
    let se=dt.getSeconds();
    
    // document.getElementById("hours").innerHTML = hr;
    document.getElementById("minutes").innerHTML = mi;
    document.getElementById("second").innerHTML = se;
    // console.log(hr)
    if(hr>12){
        hr=hr-12;
        document.getElementById("ap").innerHTML="PM"
        
    }
    else{
        document.getElementById("ap").innerHTML="AM"
    }
    if(hr==0){
        hr=12;
    }
    document.getElementById("hours").innerHTML = hr;
    
    
    // console.log(hr);
    if(hr>=3 && hr<9 && ap.innerHTML=='PM')
    document.getElementById("msg1").innerHTML="STOP YAWNING, GET SOME TEA.. <br> ITS JUST EVENING";
    
    if(hr>=9 && hr<12 && ap.innerHTML=='PM' ||hr==12 && ap.innerHTML=="AM" ||hr>=1 && hr<5 && ap.innerHTML=='AM')
    document.getElementById("msg1").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    
    if(hr>=5 && hr<9 && ap.innerHTML=='AM')
    document.getElementById("msg1").innerHTML="GRAB SOME HEALTHY BRAKEFAST";
    
    
    if(hr>=12 && hr<3 && ap.innerHTML=='PM')
    document.getElementById("msg1").innerHTML="LET'S HAVE SOME LUNCH !!";
    
    
    
    // console.log(ap.innerHTML);

    if(ap.innerHTML=='AM'){
        app=0;
    }
    else{
        app=1;
    }
    // console.log(app);



    const button=document.querySelector('#alarm');
    button.addEventListener('click', () => {
    //Night time........................    
    selectElement4 = document.querySelector('#nighttime');
    output4 = selectElement4.value;
    array4=output4.split(",");
    document.getElementById('my-container4').innerHTML=array4[0];
    console.log(array4[2]);
    console.log(hr);
    console.log(array4[1]);
    if(array4[1]==hr && array4[2]==app){
        document.querySelector("#msg2_msg").innerHTML="GOOD NIGHT !!";
        document.querySelector("#pics").innerHTML="<img src=\'./Assets/good_night.svg'>"
    }
    else{
        document.querySelector("#msg2_msg").innerHTML="ENJOY !!!";
        document.querySelector("#pics").innerHTML="<img src=\'./Assets/default.jpg'>"
    }
    





    //Nap time..............................
    selectElement3 = document.querySelector('#naptime');
    output3 = selectElement3.value;
    array3=output3.split(",");
    document.getElementById('my-container3').innerHTML=array3[0];
    // console.log(array3[1]);
    // console.log(hr);
    if(array3[1]==hr && array3[2]==app){
        document.querySelector("#msg2_msg").innerHTML="GOOD EVENING !!";
        document.querySelector("#pics").innerHTML="<img src=\'./Assets/lunch_image.png'>"
    }
    
    //Lunch_time..................................
    selectElement2 = document.querySelector('#lunchtime');
    output2 = selectElement2.value;
    array2=output2.split(",");
    document.getElementById('my-container2').innerHTML=array2[0];
    // console.log(array2[1]);
    // console.log(hr);
    if(array2[1]==hr && array2[2]==app){
        document.querySelector("#msg2_msg").innerHTML="LET'S HAVE SOME LUNCH !!";
        document.querySelector("#pics").innerHTML="<img src=\'./Assets/Some lunch.svg'>"
    } 
    
     
    //Set Wake up time .....................
    selectElement1 = document.querySelector('#wakeup');
    output1 = selectElement1.value;
    array1=output1.split(",");
    // console.log(array1[0])
    document.getElementById('my-container1').innerHTML=array1[0];
    // console.log(array[1]);
    // console.log(hr);
    if(array1[1]==hr){
        document.querySelector("#msg2_msg").innerHTML="GOOD Morning !! WAKE UP !!";
        document.querySelector("#pics").innerHTML="<img src=\'./Assets/morning.svg'>"
    }
    
    })
    
    },1000)
    
    setTimeout(() => {
        document.querySelector("#alarm").addEventListener('mouseclick',()=>{
            document.querySelector("#alarm").innerHTML="Set Alarm"
        }) 
        document.querySelector("#alarm").addEventListener('mouseover',()=>{
            document.querySelector("#alarm").innerHTML="Party Time !"
            document.querySelector("#alarm").getElementsByClassName. background= "transparent linear-gradient(113deg, #6E54EC 0%, #CB52F8 40%, #FC5EFF 81%, #F1A7C5 100%) 0% 0% no-repeat padding-box"
        })  
        document.querySelector("#alarm").addEventListener('mouseleave',()=>{
            document.querySelector("#alarm").innerHTML="Set Alarm"
        }) 
       
    }, 1000);
    
    
    
    