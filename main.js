//  --------------REGISTER-----------------------------------------

if (!localStorage.getItem('registers')) {
  localStorage.setItem('registers', JSON.stringify([]))
}

let totallist = JSON.parse(localStorage.getItem('registers'))


function register() {

  let a = document.getElementById("regname").value
  let b = document.getElementById("regemail").value
  let c = document.getElementById("regpass").value

  ab = JSON.parse(localStorage.getItem('registers'))
  cd = false
  for (let n of ab) {
    if (n.email == b) {
      cd = true
    }

  }
  if (cd == true) {
    alert("you are already registered")
  }
  else {

    let userlist = {}
    userlist.name = a
    userlist.email = b
    userlist.pass = c
    totall1ist.push(userlist)

    localStorage.setItem('registers', JSON.stringify(totallist))

    alert("REGISTERED SUCCESSFULLY")
    window.location = "login.html"

    document.getElementById("regname").value = ""
    document.getElementById("regemail").value = ""
    document.getElementById("regpass").value = ""




  }
}

//  ------------------------LOGIN-------------------------------------------------

function login() {
  let d = document.getElementById("logemail").value
  let e = document.getElementById("logpass").value

  let f = false
  for (let each of totallist) {
    if (each.email == d && each.pass == e) {
      f = true
    }
  }
  if (f == true) {
    alert("SUCCESSFULLY LOGIN")
    window.location = "resume.html"
  }
  else if (f == false) {
    alert("FAILED TO LOGIN")
  }

  localStorage.setItem('logemail', d)

  document.getElementById("logemail").value = ""
  document.getElementById("logpass").value = ""



}

//  -------------------------- RESUME -----------------------------------------------------
let variable = localStorage.getItem('logemail')
let resume = {
  personalinfo: {
    Languagesk: []
  },
  skills: [],
  education: [],
  projects: [],
  workexperience: []

}
resume.adminid = variable


// ----------- onkeyup  --------------------------------------------

function save(a, key, pkey) {
  if (pkey) {
    resume[pkey][key] = a.value

  }
  else {
    resume[key] = a.value
  }

}


// ---------------------onclick---- SKILLS LANG--------------------------------------

function addbox(id, key, pkey) {
  n = document.getElementById(id).value
  if (pkey) {
    resume[pkey][key].push(n)
    display(key, pkey)
    document.getElementById(id).value = ""

  }
  else {
    resume[key].push(n)
    display(key)
    document.getElementById(id).value = ""
  }
  display(key,pkey)
}

// --------------------------- SKILLS LANG ADD ----------------------------------------------------

function display(keyname, pkeyname) {
  userlist = ""
  if (pkeyname) {
    for (let each in resume[pkeyname][keyname]) {
      if(resume[pkeyname][keyname][each] !=""){
      userlist = userlist + ` <tr> 
    <td> ${resume[pkeyname][keyname][each]} </td>
    <td> <button onclick="deletesk('${each}','${keyname}','${pkeyname}')"> delete </button></td>
                          
                             
                          </tr> `
    
                }          }
    document.getElementById("languages").innerHTML = userlist;
  }
  else {
    for (let each in resume[keyname]) {
if(resume[keyname][each] !=""){
      userlist = userlist + ` <tr>
       <td>${resume[keyname][each]}</td>
       <td> <button onclick="deletesk('${each}','${keyname}')"> delete </button></td>

   </tr>`
    }
  }
    document.getElementById("skills").innerHTML = userlist;
  }
}

// --------------------- SKILLS LANG DELETE ---------------------------------------------

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


// ----------------------EDUCATION WORK PROJECT-------------------------------------------------------

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

// ---------------------- ADD EDUCATION PROJECT WORK ---------------------------------------------------------

function display1(keyname, idname, a1, b1, c1, d1) {
  newlist = ""
  if (d1) {
    for (let each in resume[keyname]){
      newlist = newlist + `<tr>

      <td> ${resume[keyname][each][a1]}</td>
       <td> ${resume[keyname][each][b1]}</td>
       <td> ${resume[keyname][each][c1]}</td>
        <td> ${resume[keyname][each][d1]}</td>
         <td> <button onclick="deleteed('${each}','${idname}','${keyname}','${a1}','${b1}','${c1}','${d1}')"> delete </button> </td> 

      </tr>`
    }

  }
  else if (c1) {
    for (let each in resume[keyname]) {
      newlist = newlist + `<tr>
     <td> ${resume[keyname][each][a1]}</td>
     <td> ${resume[keyname][each][b1]}</td>
     <td> ${resume[keyname][each][c1]}</td>
     <td> <button onclick="deleteed('${each}','${idname}','${keyname}','${a1}','${b1}','${c1}')"> delete </button></td>
    </tr>`
    }

  }

  else if (b1) {
    for (let each in resume[keyname]) {
      newlist = newlist + `<tr>
    <td> ${resume[keyname][each][a1]}</td>
    <td> ${resume[keyname][each][b1]}</td>
     <td> <button onclick="deleteed('${each}','${idname}','${keyname}','${a1}','${b1}')"> delete </button></td> 
    </tr>`
    }


  }
  document.getElementById(idname).innerHTML = newlist;
}

// ------------------------DELETE EDUCATION PROJECT WORK----------------------------------------------------

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


// ----------------------------- SUBMIT TO LOCALSTORAGE --------------------------------------------

if (!localStorage.getItem('registers_resume')) {
  localStorage.setItem('registers_resume', JSON.stringify([]))
}

let users_resume = JSON.parse(localStorage.getItem("registers_resume"))
function submit() {
  users_resume.push(resume)
  localStorage.setItem("registers_resume", JSON.stringify(users_resume))
  alert("SUCCESSFULLY SAVED")
  window.location = "resumelist.html"
}


// ------------------------------------------- ADD RESUME LIST -------------------------------------------------------------


let all = JSON.parse(localStorage.getItem("registers_resume"))
function rlists() {
  let listadd = ""
  for (let r in all) {

       listadd = listadd + `<tr>
    <td> ${all[r].name}  </td>
    <td> ${all[r].email} </td>
    <td> ${all[r].phone} </td>
    <td> <button onclick="deleterr(${r})">Delete</button></td>
    <td> <a href="new.html?index=${r}"><button>View</button></a></td>
    
    </tr>`
  }
  document.getElementById('resumeofall').innerHTML = listadd
}

// ------------------------- DLT RESUME LIST---------------------------------------------------

function deleterr(index) {
  let tlist = [];
  for (let d in all) {
    if (d != index) {
      tlist.push(all[d])
    }
  }
  all = tlist
  localStorage.setItem("registers_resume", JSON.stringify(tlist))
  rlists()
}


// --------------------------------------------------------------------------------------------------