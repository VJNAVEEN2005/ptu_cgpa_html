

function deptartment() {
    let dept = document.getElementById("dept1").value
    localStorage.setItem("dept",dept)
    console.log(dept)
}

function semester(){
    let sem = document.getElementById("sem").value
    localStorage.setItem("sem",sem)
    console.log(sem)
}

function dept_sem(){
    deptartment()
    semester()
    if(localStorage.getItem("sem")=="1" || localStorage.getItem("sem")=="2"){
        window.location = "eng_or_bee.html"
    }
    else{
        window.location = "minor.html"
    }
    
}


function hm1(){
    var hm = document.getElementById("hm").value
    localStorage.setItem("hm",hm)
    console.log(hm)
}

//linking all pages

function hm2(){
    hm1()
    console.log(hm)
    //Minor
        // Normal
    
        
        if(localStorage.getItem("dept") == "eee"){
            if(localStorage.getItem("sem") == "3"){
                window.location = "EEE/3rd_sem.html"
            }
            else if(localStorage.getItem("sem") == "4"){
                window.location = "EEE/4th_sem.html"
            }
            else if(localStorage.getItem("sem") == "5"){
                window.location = "EEE/5th_sem.html"
            }
            else if(localStorage.getItem("sem") == "6"){
                window.location = "EEE/6th_sem.html"
            }
            else if(localStorage.getItem("sem") == "7"){
                window.location = "EEE/7th_sem.html"
            }
        }
        else if(localStorage.getItem("dept") == "cse"){
            if(localStorage.getItem("sem") == "3"){
                window.location = "CSE/3rd_sem.html"
            }
            else if(localStorage.getItem("sem") == "4"){
                window.location = "CSE/4th_sem.html"
            }
            else if(localStorage.getItem("sem") == "5"){
                window.location = "CSE/5th_sem.html"
            }
            else if(localStorage.getItem("sem") == "6"){
                window.location = "CSE/6th_sem.html"
            }
            else if(localStorage.getItem("sem") == "7"){
                window.location = "CSE/7th_sem.html"
            }
        }
        else if(localStorage.getItem("dept") == "it"){
            if(localStorage.getItem("sem") == "3"){
                window.location = "IT/3rd_sem.html"
            }
            else if(localStorage.getItem("sem") == "4"){
                window.location = "IT/4th_sem.html"
            }
            else if(localStorage.getItem("sem") == "5"){
                window.location = "IT/5th_sem.html"
            }
            else if(localStorage.getItem("sem") == "6"){
                window.location = "IT/6th_sem.html"
            }
            else if(localStorage.getItem("sem") == "7"){
                window.location = "IT/7th_sem.html"
            }
        }
        else if(localStorage.getItem("dept") == "mt"){
            if(localStorage.getItem("sem") == "3"){
                window.location = "MT/3rd_sem.html"
            }
            else if(localStorage.getItem("sem") == "4"){
                window.location = "MT/4th_sem.html"
            }
            else if(localStorage.getItem("sem") == "5"){
                window.location = "MT/5th_sem.html"
            }
            else if(localStorage.getItem("sem") == "6"){
                window.location = "MT/6th_sem.html"
            }
            else if(localStorage.getItem("sem") == "7"){
                window.location = "MT/7th_sem.html"
            }
        }
        else if(localStorage.getItem("dept") == "eie"){
            if(localStorage.getItem("sem") == "3"){
                window.location = "EIE/3rd_sem.html"
            }
            else if(localStorage.getItem("sem") == "4"){
                window.location = "EIE/4th_sem.html"
            }
            else if(localStorage.getItem("sem") == "5"){
                window.location = "EIE/5th_sem.html"
            }
            else if(localStorage.getItem("sem") == "6"){
                window.location = "EIE/6th_sem.html"
            }
            else if(localStorage.getItem("sem") == "7"){
                window.location = "EIE/7th_sem.html"
            }
        }
        else if(localStorage.getItem("dept") == "ece"){
            if(localStorage.getItem("sem") == "3"){
                window.location = "ECE/3rd_sem.html"
            }
            else if(localStorage.getItem("sem") == "4"){
                window.location = "ECE/4th_sem.html"
            }
            else if(localStorage.getItem("sem") == "5"){
                window.location = "ECE/5th_sem.html"
            }
            else if(localStorage.getItem("sem") == "6"){
                window.location = "ECE/6th_sem.html"
            }
            else if(localStorage.getItem("sem") == "7"){
                window.location = "ECE/7th_sem.html"
            }
        }
    
}

// Subject BEE or ENG

function subject(){
    let sub = document.getElementById("sub").value
    localStorage.setItem("sub",sub)
    console.log(sub)

    if(sub == "subject1"){
        window.location = "bee.html"
    }
    else{
        window.location = "eng.html"
    }
}

// Result side of the CGPA 

function result_bee(){
    var radio1 = document.getElementsByName("m1")
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked)
            var m1 = radio1[i].value
    }
    
    var radio2 = document.getElementsByName("bee")
    for(i=0;i<radio2.length;i++){
        if(radio2[i].checked)
            var bee = radio2[i].value
    }

    var radio3 = document.getElementsByName("pps")
    for(i=0;i<radio3.length;i++){
        if(radio3[i].checked)
            var pps = radio3[i].value
    }

    var radio4 = document.getElementsByName("eg")
    for(i=0;i<radio4.length;i++){
        if(radio4[i].checked)
            var eg = radio4[i].value
    }

    var radio5 = document.getElementsByName("bee_lab")
    for(i=0;i<radio5.length;i++){
        if(radio5[i].checked)
            var bee_lab = radio5[i].value
    }

    var radio6 = document.getElementsByName("pps_lab")
    for(i=0;i<radio6.length;i++){
        if(radio6[i].checked)
            var pps_lab = radio6[i].value
    }

    var Result = ( (Number(m1)*4)+(Number(bee)*4)+(Number(pps)*3)+(Number(eg)*3)+(Number(bee_lab)*1.5)+(Number(pps_lab)*1.5) ) / 17

    document.getElementById("result").textContent = "CGPA : "+Result
}


function result_eng(){
    var radio1 = document.getElementsByName("m2")
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked)
            var m2 = radio1[i].value
    }
    
    var radio2 = document.getElementsByName("phy")
    for(i=0;i<radio2.length;i++){
        if(radio2[i].checked)
            var phy = radio2[i].value
    }

    var radio3 = document.getElementsByName("chem")
    for(i=0;i<radio3.length;i++){
        if(radio3[i].checked)
            var chem = radio3[i].value
    }

    var radio4 = document.getElementsByName("eng")
    for(i=0;i<radio4.length;i++){
        if(radio4[i].checked)
            var eng = radio4[i].value
    }

    var radio5 = document.getElementsByName("workshop")
    for(i=0;i<radio5.length;i++){
        if(radio5[i].checked)
            var workshop = radio5[i].value
    }

    var radio6 = document.getElementsByName("phy_lab")
    for(i=0;i<radio6.length;i++){
        if(radio6[i].checked)
            var phy_lab = radio6[i].value
    }

    var radio7 = document.getElementsByName("chem_lab")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var chem_lab = radio7[i].value
    }

    var Result = ( (Number(m2)*4)+(Number(phy)*4)+(Number(chem)*4)+(Number(eng)*3)+(Number(workshop)*1.5)+(Number(phy_lab)*1.5)+(Number(chem_lab)*1.5) ) / 19.5

    document.getElementById("result").textContent = "CGPA : "+Result
}