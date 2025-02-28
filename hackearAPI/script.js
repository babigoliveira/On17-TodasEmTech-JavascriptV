let getWelcome = async () => {
  try {
    const response = await fetch('https://teste-api-lilit.herokuapp.com/')
    const welcomeText = await response.json()
    console.log(response)
    console.log(welcomeText)
  }
  catch(err) {
    console.error(err)  
  }
}

// getWelcome()

// fetch('https://teste-api-lilit.herokuapp.com/')
// .then((response) => {
//   console.log(response)
//   return response.json()
// })
// .then((welcomeText) => console.log(welcomeText))
// .catch((err) => console.error(err))


let getBeginers = async () => {
  try {
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 6RdCxxA2ma03gKlwFgk100e3oxLVLn50Xny04Hb5FjppwZQlNdKFJ9JsX3vMi8rRfPqJEe7lRUplFnl2bKn3"
      }
    } )
    const beginers = await response.json()
    console.log(beginers)
  }
  catch(err) {
    console.error(err)
  }
}

// getBeginers()

let getBeginerById = async (id) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 6RdCxxA2ma03gKlwFgk100e3oxLVLn50Xny04Hb5FjppwZQlNdKFJ9JsX3vMi8rRfPqJEe7lRUplFnl2bKn3"
      }
    } )
    const beginerById = await response.json()
    console.log(beginerById)
  }
  catch(err) {
    console.error(err)
  }
}

// getBeginerById("62a60034f3c4b800040d7c24")

let getBeginersByName = async (field, name) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/filter?${field}=${name}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 6RdCxxA2ma03gKlwFgk100e3oxLVLn50Xny04Hb5FjppwZQlNdKFJ9JsX3vMi8rRfPqJEe7lRUplFnl2bKn3"
      }
    } )
    const beginerByName = await response.json()
    console.log(beginerByName)
  }
  catch(err) {
    console.error(err)
  }
}

// getBeginersByName("city", "recife")
// getBeginersByName("name", "benja")

let createBeginer = async () => {
  try {
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers/register', {
      method: "POST",
      headers: {
        "Authorization": "Bearer 6RdCxxA2ma03gKlwFgk100e3oxLVLn50Xny04Hb5FjppwZQlNdKFJ9JsX3vMi8rRfPqJEe7lRUplFnl2bKn3"
      },
      body: {
        "name": "Anira",
        "phone": "21945362728",
        "email": "anira@bank.com",
        "linkedin": "https://linkedin.com/in/aniragestora",
        "github": "https://github.com/aniraaunica",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "studyTime": 5,
        "stacksOfInterest": "Front-end",
        "priorKnowledge": [
          "CSS",
          "Typescript",
          "React"
        ],
        "englishLevel": 5,
        "othersPrograms": "minas programam",
        "hasComputer": true,
        "internetAccess": false,
        "message": "Girl from Rio",
        "findUs": "Amiges"
      }
    })
    const newBeginer = await response.json()
    console.log(newBeginer)
  }
  catch(err) {
    console.error(err)
  }
}








