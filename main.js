//---------------------------= REGISTER =----------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { addDoc, collection, getFirestore, getDocs,deleteDoc,doc,query,where} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcDyvnJsapbbUfV-Nes96F5_XZWSEugc0",
  authDomain: "resume-builder-94911.firebaseapp.com",
  projectId: "resume-builder-94911",
  storageBucket: "resume-builder-94911.appspot.com",
  messagingSenderId: "1042374202278",
  appId: "1:1042374202278:web:eebee8f23709372466b567",
  measurementId: "G-YG5FCWX4NK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


 async function register1() {
  getDocs(query(collection(db, "register"))).then(loginpage => {
    loginpage.forEach((each, i) => {
      eresume.push(each.data())
    })
  })
  let a = document.getElementById("regname").value
  let b = document.getElementById("regemail").value
  let c = document.getElementById("regpass").value
  let abc=false
  for(let n of eresume){
    if(n.email==b){
      abc=true
    }
  }
  if (abc==true){
    alert("you are already registered")
  
  }else if(b==""|| a=="" || c==""){
    alert("please fill out all the fields");
  
  }else{
  
   await addDoc(collection(db,"register"),{
      name: a,
      email: b,
      password: c
    })
    alert("Registered Successfully")
  
    document.getElementById("regname").value = ""
    document.getElementById("regemail").value = ""
    document.getElementById("regpass").value = ""
  
    window.location = "index.html"
  }
}

window.register1 = register1

let eresume = []
getDocs(query(collection(db, "register"))).then(loginpage => {
  loginpage.forEach((each, i) => {
    eresume.push(each.data())
  })
})
 

//  ---------------------------------- [LOGIN ] -------------------------------------------------

// if(!localStorage.getItem('users')){
//   localStorage.setItem('users',"")
// } 

async function login() {

  let d = document.getElementById("logemail").value;
  let e = document.getElementById("logpass").value;

  let tf = false;
  for (let eachh in eresume) {

    if (d == eresume[eachh].email && e == eresume[eachh].password) {
      tf = true
    }
  }
  if (tf == true) {
    localStorage.setItem("users",d)
    localStorage.setItem("logged","true")
    alert("login successfully")
    window.location = "resume.html"
  }
  else if (tf == false) {
    alert("login failed")
  }
  document.getElementById("logemail").value = ""
  document.getElementById("logpass").value = ""

}
window.login = login


// ------------------------------------------[ LOGOUT ]--------------------------------
function logout() {
  localStorage.removeItem('logged')
  window.location = "index.html"
}
window.logout=logout

// function back(){
//   window.location="resumelist.html"
// }
// window.back=back

//  -----------------------------------------[ RESUME ]--------------------------------
let admin1=localStorage.getItem("users")
console.log(admin1)
let resume = {
  personalinfo: {
    Languagesk: []
  },
  skills: [],
  education: [],
  projects: [],
  workexperience: []

}
resume.adminid=admin1
// -------------------------------------------[ Onkeyup ]-------------------------------

function save(a, key, pkey) {
  if (pkey) {
    resume[pkey][key] = a.value

  }
  else {
    resume[key] = a.value
  }

}
window.save = save

// --------------------------------------- Onclick [SKILLS LANG] --------------------------------------

function addbox(id, key, pkey) {
  let n = document.getElementById(id).value
  if (pkey) {
    resume[pkey][key].push(n)
    display(key, pkey)
    document.getElementById(id).value = ""

  }
  else {
    resume[key].push(n)
    display(key)
  }
  document.getElementById(id).value = ""
  display(key, pkey)
}
window.addbox = addbox

// ------------------------------------ [ SKILLS LANG ADD ] ----------------------------------------------------

function display(keyname, pkeyname) {
  let userlist = ""
  if (pkeyname) {
    for (let each in resume[pkeyname][keyname]) {
      if (resume[pkeyname][keyname][each] != "")
        userlist = userlist + ` <tr> 
    <td> ${resume[pkeyname][keyname][each]} </td>
    <td> <span onclick="deletesk('${each}','${keyname}','${pkeyname}')"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg> </span></td>
                          
                             
                          </tr> `

    }
    document.getElementById("languages").innerHTML = userlist;
  }
  else {
    for (let each in resume[keyname]) {
      if (resume[keyname][each] != "")
        userlist = userlist + ` <tr>
       <td>${resume[keyname][each]}</td>
       <td> <span onclick="deletesk('${each}','${keyname}')"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></span></td>

   </tr>`

    }
    document.getElementById("skills").innerHTML = userlist;
  }

}
// ---------------+--------------------- [SKILLS LANG DELETE] ---------------------------------------------

function deletesk(index, keyname, pkeyname) {
  let dltlist = []
  if (pkeyname) {
    for (let d in resume[pkeyname][keyname]) {
      if (d != index) {
        dltlist.push(resume[pkeyname][keyname][d])


      }
    }

    resume[pkeyname][keyname] = dltlist;

  }

  else {
    for (let d in resume[keyname]) {
      if (d != index) {
        dltlist.push(resume[keyname][d])

      }
    }
    resume[keyname] = dltlist;
  }
  display(keyname, pkeyname)

}
window.deletesk = deletesk


// ------------------------------------------ [EDUCATION WORK PROJECT ]-------------------------------------------------------

function listSave(key, id, a, b, c, d) {
  let first = document.getElementById(a)
  let second = document.getElementById(b)
  let third = document.getElementById(c)
  let fourth = document.getElementById(d)
  let list = {}
  if (d) {
    list[a] = first.value
    list[b] = second.value
    list[c] = third.value
    list[d] = fourth.value
    document.getElementById(a).value = ""
    document.getElementById(b).value = ""
    document.getElementById(c).value = ""
    document.getElementById(d).value = ""

  }
  else if (c) {
    list[a] = first.value
    list[b] = second.value
    list[c] = third.value
    document.getElementById(a).value = ""
    document.getElementById(b).value = ""
    document.getElementById(c).value = ""

  }
  else if (b) {
    list[a] = first.value
    list[b] = second.value
    document.getElementById(a).value = ""
    document.getElementById(b).value = ""

  }

  resume[key].push(list)

  display1(key, id, a, b, c, d)

}
window.listSave = listSave
// ----------------------------------------------- ADD [EDUCATION PROJECT WORK ] ---------------------------------------------------------

function display1(keyname, idname, a1, b1, c1, d1) {
  let newlist = ""
  if (d1) {
    for (let each in resume[keyname]) {
      newlist = newlist + `<tr>

      <td> ${resume[keyname][each][a1]}</td>
       <td> ${resume[keyname][each][b1]}</td>
       <td> ${resume[keyname][each][c1]}</td>
        <td> ${resume[keyname][each][d1]}</td>
         <td> <span onclick="deleteed('${each}','${idname}','${keyname}','${a1}','${b1}','${c1}','${d1}')"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg> </span> </td> 

      </tr>`
    }

  }
  else if (c1) {
    for (let each in resume[keyname]) {
      newlist = newlist + `<tr>
     <td> ${resume[keyname][each][a1]}</td>
     <td> ${resume[keyname][each][b1]}</td>
     <td> ${resume[keyname][each][c1]}</td>
     <td> <span onclick="deleteed('${each}','${idname}','${keyname}','${a1}','${b1}','${c1}')"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg> </span></td>
    </tr>`
    }

  }

  else if (b1) {
    for (let each in resume[keyname]) {
      newlist = newlist + `<tr>
    <td> ${resume[keyname][each][a1]}</td>
    <td> ${resume[keyname][each][b1]}</td>
     <td> <span onclick="deleteed('${each}','${idname}','${keyname}','${a1}','${b1}')"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg> </span></td> 
    </tr>`
    }


  }
  document.getElementById(idname).innerHTML = newlist;
}
// ----------------------------------------- DELETE [ EDUCATION PROJECT WORK ] -------------------------------------------------------

function deleteed(index, idn, keyn, an, bn, cn, dn) {
  let dlist = []
  for (let each in resume[keyn]) {
    if (each != index) {
      dlist.push(resume[keyn][each])
    }
  }
  resume[keyn] = dlist
  display1(keyn, idn, an, bn, cn, dn)
}
window.deleteed = deleteed

// -------------------------------------- SUBMIT TO LOCALSTORAGE ---------------------------------------------

async function submit1() {

  await addDoc(collection(db, "resume"),
    resume
  )
  alert("RESUME SUBMITTED SUCCESSFULLY")
  rlists()
window.location = "resumelist.html"
}
window.submit1 = submit1


// ------------------------------------------- ADD RESUME LIST ------------------------------------------------------

function rlists() {
  getDocs(query(collection(db,'resume'),where('adminid','==',admin1))).then(docSnap => {

    let renderHTML = "";
    docSnap.forEach((n, i) => {
      let myresume = n.data();
      renderHTML = renderHTML +
        `<tr> 
     <td>${myresume.name}</td> 
     <td>${myresume.email}</td> 
     <td>${myresume.phone}</td> 
     <td><span onclick="deleterr('${n.id}')"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
       <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg></span></td> 

    <td><span onclick="edit('${n.id}')"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg></span></td>


     <td> <a href="template1.html?index=${n.id}"><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
       <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
    </svg></span></a></td> 
     
     </tr>`

    })

    document.getElementById('resumeofall').innerHTML = renderHTML
  })
}
window.rlists = rlists

// -------------------------------------------- DLT RESUME LIST---------------------------------------------------
function deleterr(myresume) { 
deleteDoc(doc(db,"resume",myresume))
rlists()


}
window.deleterr = deleterr


// --------------------------------------------------------------------------------------------------

// getDocs(collection(db,'resume'),where('userId','==',prase-data.id)).then(docsnap =>{
//   let vlist=''
//   docsnap.forEach((each,v) =>{
//     let eachr=each.data();
//     vlist=vlist+`<tr>
//     <td><a href="template1.html?resumeId=${each.id}"></td>
//     </tr>`

//   })
//   document.getElementById('vieww').innerHTML = vlist

// })