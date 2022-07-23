// si yo no estoy logueado deberia ver el formilario de login
// si sí estoy logeado deberia de ver la vienvenida con los datos

let isLogged = localStorage.getItem("userIsLogged")

console.log(isLogged)

!isLogged && $("form").removeClass("d-none")

isLogged && $(".landing").removeClass("d-none")

$("#login").click( () => {
    localStorage.setItem("userIsLogged", true)
    location.reload()
})

$("#logout").click( () => {
    localStorage.removeItem("userIsLogged")
    location.reload()
})

/*
falsy  -> false, '', "", 0, -0, 0n, NaN, null, undefined
truthy -> anything that is not mentioned above
*/