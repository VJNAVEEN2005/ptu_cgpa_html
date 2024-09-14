function minor(){
    var minor1 = document.getElementById("minor")
    console.log(minor1)
    var minor = document.createElement("div")
    minor.innerHTML = "<div class='background_white'><p class='poppins-semibold'>Minor :</p><div class='select'><input class='radio_input' type='radio' name='hm' id='hm_1' value='10'><label class='radio_lable' for='hm_1'>S</label><input class='radio_input' type='radio' name='hm' id='hm_2' value='9'><label class='radio_lable' for='hm_2'>A</label><input class='radio_input' type='radio' name='hm' id='hm_3' value='8'><label class='radio_lable' for='hm_3'>B</label><input class='radio_input' type='radio' name='hm' id='hm_4' value='7'><label class='radio_lable' for='hm_4'>C</label><input class='radio_input' type='radio' name='hm' id='hm_5' value='6'><label class='radio_lable' for='hm_5'>D</label><input class='radio_input' type='radio' name='hm' id='hm_6' value='5'><label class='radio_lable' for='hm_6'>E</label><input class='radio_input' type='radio' name='hm' id='hm_7' value='0'><label class='radio_lable' for='hm_7'>F</label><br></div></div>"
    minor1.append(minor)
    console.log(localStorage.getItem("hm"))
}


function honour(){
    var minor1 = document.getElementById("minor")
    console.log(minor1)
    var minor = document.createElement("div")
    minor.innerHTML = "<div class='background_white'><p class='poppins-semibold'>Honour :</p><div class='select'><input class='radio_input' type='radio' name='hm' id='hm_1' value='10'><label class='radio_lable' for='hm_1'>S</label><input class='radio_input' type='radio' name='hm' id='hm_2' value='9'><label class='radio_lable' for='hm_2'>A</label><input class='radio_input' type='radio' name='hm' id='hm_3' value='8'><label class='radio_lable' for='hm_3'>B</label><input class='radio_input' type='radio' name='hm' id='hm_4' value='7'><label class='radio_lable' for='hm_4'>C</label><input class='radio_input' type='radio' name='hm' id='hm_5' value='6'><label class='radio_lable' for='hm_5'>D</label><input class='radio_input' type='radio' name='hm' id='hm_6' value='5'><label class='radio_lable' for='hm_6'>E</label><input class='radio_input' type='radio' name='hm' id='hm_7' value='0'><label class='radio_lable' for='hm_7'>F</label><br></div></div>"
    minor1.append(minor)
}

if(localStorage.getItem("hm") == "minor"){
    minor()
}
else if(localStorage.getItem("hm") == "honor"){
    honour()
}


function result_3(){
    var radio1 = document.getElementsByName("m3")
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked)
            var m3 = radio1[i].value
    }
    
    var radio2 = document.getElementsByName("eca")
    for(i=0;i<radio2.length;i++){
        if(radio2[i].checked)
            var eca = radio2[i].value
    }

    var radio3 = document.getElementsByName("emf")
    for(i=0;i<radio3.length;i++){
        if(radio3[i].checked)
            var emf = radio3[i].value
    }

    var radio4 = document.getElementsByName("edc")
    for(i=0;i<radio4.length;i++){
        if(radio4[i].checked)
            var edc = radio4[i].value
    }

    var radio5 = document.getElementsByName("em1")
    for(i=0;i<radio5.length;i++){
        if(radio5[i].checked)
            var em1 = radio5[i].value
    }

    var radio6 = document.getElementsByName("ss")
    for(i=0;i<radio6.length;i++){
        if(radio6[i].checked)
            var ss = radio6[i].value
    }

    var radio7 = document.getElementsByName("el_lab_1")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var el_lab_1 = radio7[i].value
    }

    var radio7 = document.getElementsByName("em_lab_1")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var em_lab_1 = radio7[i].value
    }

    var radio8 = document.getElementsByName("hm")
    for(i=0;i<radio8.length;i++){
        if(radio8[i].checked)
            var minor = radio8[i].value
    }

    if(localStorage.getItem("hm") == "minor" || localStorage.getItem("hm") == "honor"){
        var Result = ( (Number(m3)*4)+(Number(eca)*3)+(Number(emf)*3)+(Number(edc)*3)+(Number(em1)*3)+(Number(ss)*1.5)+(Number(el_lab_1)*1.5)+(Number(em_lab_1)*1.5)+(Number(minor)*4) ) / 24.5
    }else{
        var Result = ( (Number(m3)*4)+(Number(eca)*3)+(Number(emf)*3)+(Number(edc)*3)+(Number(em1)*3)+(Number(ss)*1.5)+(Number(el_lab_1)*1.5)+(Number(em_lab_1)*1.5) ) / 20.5
    }
    

    document.getElementById("result").textContent = "CGPA : "+Result
}


function result_4(){
    var radio1 = document.getElementsByName("bfe")
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked)
            var bfe = radio1[i].value
    }
    
    var radio2 = document.getElementsByName("ae")
    for(i=0;i<radio2.length;i++){
        if(radio2[i].checked)
            var ae = radio2[i].value
    }

    var radio3 = document.getElementsByName("pdc")
    for(i=0;i<radio3.length;i++){
        if(radio3[i].checked)
            var pdc = radio3[i].value
    }

    var radio4 = document.getElementsByName("em2")
    for(i=0;i<radio4.length;i++){
        if(radio4[i].checked)
            var em2 = radio4[i].value
    }

    var radio5 = document.getElementsByName("dsoop")
    for(i=0;i<radio5.length;i++){
        if(radio5[i].checked)
            var dsoop = radio5[i].value
    }

    var radio6 = document.getElementsByName("el_lab_2")
    for(i=0;i<radio6.length;i++){
        if(radio6[i].checked)
            var el_lab_2 = radio6[i].value
    }

    var radio7 = document.getElementsByName("em_lab_2")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var em_lab_2 = radio7[i].value
    }

    var radio7 = document.getElementsByName("dsoop_lab")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var dsoop_lab = radio7[i].value
    }

    var radio8 = document.getElementsByName("hm")
    for(i=0;i<radio8.length;i++){
        if(radio8[i].checked)
            var minor = radio8[i].value
    }

    var radio9 = document.getElementsByName("idt")
    for(i=0;i<radio9.length;i++){
        if(radio9[i].checked)
            var idt = radio9[i].value
    }

    if(localStorage.getItem("hm") == "minor" || localStorage.getItem("hm") == "honor"){
        var Result = ( (Number(bfe)*2)+(Number(ae)*3)+(Number(pdc)*3)+(Number(em2)*4)+(Number(dsoop)*3)+(Number(el_lab_2)*1.5)+(Number(em_lab_2)*1.5)+(Number(dsoop_lab)*1.5)+(Number(idt)*1.5)+(Number(minor)*4) ) / 25
    }
    else{
        var Result = ( (Number(bfe)*2)+(Number(ae)*3)+(Number(pdc)*3)+(Number(em2)*4)+(Number(dsoop)*3)+(Number(el_lab_2)*1.5)+(Number(em_lab_2)*1.5)+(Number(dsoop_lab)*1.5)+(Number(idt)*1.5)) / 21
    }
    

    document.getElementById("result").textContent = "CGPA : "+Result
}

function result_5(){
    var radio1 = document.getElementsByName("adc")
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked)
            var adc = radio1[i].value
    }
    
    var radio2 = document.getElementsByName("pe")
    for(i=0;i<radio2.length;i++){
        if(radio2[i].checked)
            var pe = radio2[i].value
    }

    var radio3 = document.getElementsByName("mi")
    for(i=0;i<radio3.length;i++){
        if(radio3[i].checked)
            var mi = radio3[i].value
    }

    var radio4 = document.getElementsByName("td")
    for(i=0;i<radio4.length;i++){
        if(radio4[i].checked)
            var td = radio4[i].value
    }

    var radio5 = document.getElementsByName("cs")
    for(i=0;i<radio5.length;i++){
        if(radio5[i].checked)
            var cs = radio5[i].value
    }

    var radio6 = document.getElementsByName("iem")
    for(i=0;i<radio6.length;i++){
        if(radio6[i].checked)
            var iem = radio6[i].value
    }

    var radio7 = document.getElementsByName("el_lab_3")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var el_lab_3 = radio7[i].value
    }

    var radio8 = document.getElementsByName("mc_lab")
    for(i=0;i<radio8.length;i++){
        if(radio8[i].checked)
            var mc_lab = radio8[i].value
    }

    var radio9 = document.getElementsByName("oec")
    for(i=0;i<radio9.length;i++){
        if(radio9[i].checked)
            var oec = radio9[i].value
    }

    var radio10 = document.getElementsByName("hm")
    for(i=0;i<radio10.length;i++){
        if(radio10[i].checked)
            var minor = radio10[i].value
    }

    var radio11 = document.getElementsByName("oec1")
    for(i=0;i<radio11.length;i++){
        if(radio11[i].checked)
            var oec1 = radio11[i].value
    }

    if(localStorage.getItem("hm") == "minor" || localStorage.getItem("hm") == "honor"){
        var Result = ( (Number(adc)*4)+(Number(pe)*3)+(Number(mi)*3)+(Number(td)*3)+(Number(cs)*3)+(Number(iem)*1.5)+(Number(el_lab_3)*1.5)+(Number(mc_lab)*1.5)+(Number(oec)*3)+(Number(minor)*4) ) / 27.5 //want to change
    }else{
        var Result = ( (Number(adc)*4)+(Number(pe)*3)+(Number(mi)*3)+(Number(td)*3)+(Number(cs)*3)+(Number(iem)*1.5)+(Number(el_lab_3)*1.5)+(Number(mc_lab)*1.5)+(Number(oec)*3) ) / 23.5
    }

    

    document.getElementById("result").textContent = "CGPA : "+Result
}

function result_6(){
    var radio1 = document.getElementsByName("psa")
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked)
            var psa = radio1[i].value
    }
    
    var radio2 = document.getElementsByName("mm")
    for(i=0;i<radio2.length;i++){
        if(radio2[i].checked)
            var mm = radio2[i].value
    }

    var radio3 = document.getElementsByName("pe1")
    for(i=0;i<radio3.length;i++){
        if(radio3[i].checked)
            var pe1 = radio3[i].value
    }

    var radio4 = document.getElementsByName("pe2")
    for(i=0;i<radio4.length;i++){
        if(radio4[i].checked)
            var pe2 = radio4[i].value
    }

    var radio5 = document.getElementsByName("entre")
    for(i=0;i<radio5.length;i++){
        if(radio5[i].checked)
            var entre = radio5[i].value
    }

    var radio6 = document.getElementsByName("mm_lab")
    for(i=0;i<radio6.length;i++){
        if(radio6[i].checked)
            var mm_lab = radio6[i].value
    }

    var radio7 = document.getElementsByName("pe_lab")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var pe_lab = radio7[i].value
    }

    var radio8 = document.getElementsByName("oec")
    for(i=0;i<radio8.length;i++){
        if(radio8[i].checked)
            var oec = radio8[i].value
    }

    var radio9 = document.getElementsByName("hm")
    for(i=0;i<radio9.length;i++){
        if(radio9[i].checked)
            var minor = radio9[i].value
    }

    var radio10 = document.getElementsByName("oec1")
    for(i=0;i<radio10.length;i++){
        if(radio10[i].checked)
            var oec1 = radio10[i].value
    }

    var radio11 = document.getElementsByName("oec12")
    for(i=0;i<radio11.length;i++){
        if(radio11[i].checked)
            var oec12 = radio11[i].value
    }

    if(localStorage.getItem("hm") == "minor" || localStorage.getItem("hm") == "honor"){
        var Result = ( (Number(psa)*3)+(Number(mm)*4)+(Number(pe1)*3)+(Number(pe2)*3)+(Number(entre)*3)+(Number(mm_lab)*2)+(Number(pe_lab)*1.5)+(Number(oec)*1.5)+(Number(oec1)*1.5)+(Number(oec12)*3)+(Number(minor)*4) ) / 29.5
    }else{
        var Result = ( (Number(psa)*3)+(Number(mm)*4)+(Number(pe1)*3)+(Number(pe2)*3)+(Number(entre)*3)+(Number(mm_lab)*2)+(Number(pe_lab)*1.5)+(Number(oec)*1.5)+(Number(oec1)*1.5)+(Number(oec12)*3) ) / 25.5
    }
    

    document.getElementById("result").textContent = "CGPA : "+Result
}

function result_7(){

    console.log(localStorage.getItem('sem'))

    var radio1 = document.getElementsByName("psoc")
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked)
            var psoc = radio1[i].value
    }
    
    var radio2 = document.getElementsByName("ps")
    for(i=0;i<radio2.length;i++){
        if(radio2[i].checked)
            var ps = radio2[i].value
    }

    var radio3 = document.getElementsByName("ssd")
    for(i=0;i<radio3.length;i++){
        if(radio3[i].checked)
            var ssd = radio3[i].value
    }

    var radio4 = document.getElementsByName("pe3")
    for(i=0;i<radio4.length;i++){
        if(radio4[i].checked)
            var pe3 = radio4[i].value
    }

    var radio5 = document.getElementsByName("pe4")
    for(i=0;i<radio5.length;i++){
        if(radio5[i].checked)
            var pe4 = radio5[i].value
    }

    var radio6 = document.getElementsByName("pe5")
    for(i=0;i<radio6.length;i++){
        if(radio6[i].checked)
            var pe5 = radio6[i].value
    }

    var radio7 = document.getElementsByName("ps_lab")
    for(i=0;i<radio7.length;i++){
        if(radio7[i].checked)
            var ps_lab = radio7[i].value
    }

    var radio8 = document.getElementsByName("seminar")
    for(i=0;i<radio8.length;i++){
        if(radio8[i].checked)
            var seminar = radio8[i].value
    }

    var radio9 = document.getElementsByName("oec")
    for(i=0;i<radio9.length;i++){
        if(radio9[i].checked)
            var oec = radio9[i].value
    }

    var radio10 = document.getElementsByName("hm")
    for(i=0;i<radio10.length;i++){
        if(radio10[i].checked)
            var minor = radio10[i].value
    }

    if(localStorage.getItem("hm") == "minor" || localStorage.getItem("hm") == "honor"){
        var Result = ( (Number(psoc)*4)+(Number(ps)*3)+(Number(ssd)*3)+(Number(pe3)*3)+(Number(pe4)*1.5)+(Number(pe5)*1.5)+(Number(ps_lab)*2)+(Number(minor)*4) ) / 22
    }else{
        var Result = ( (Number(psoc)*4)+(Number(ps)*3)+(Number(ssd)*3)+(Number(pe3)*3)+(Number(pe4)*1.5)+(Number(pe5)*1.5)+(Number(ps_lab)*2)) / 18
    }
    

    document.getElementById("result").textContent = "CGPA : "+Result
}