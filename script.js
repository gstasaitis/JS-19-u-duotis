const button = document.querySelector("button")

button.addEventListener("click", () => {
    var x = document.createElement("div")
    x.innerHTML = 
    `
    <div class="checkbox-wrapper-10">
                <input checked="" type="checkbox" id="cb5" class="tgl tgl-flip">
                <label for="cb5" data-tg-on="ALL" data-tg-off="VIP" class="tgl-btn"></label>
        </div>
    `
    const checkboxInput = x.querySelector('input')
    const buttondiv = document.querySelector("div")[0]
    buttondiv.appendChild(x)

    x.addEventListener("change", () => {
        if (checkboxInput.checked) {
            displayVIPUsers(data)
        } else {
            displayAllUsers(data)
        }
    })
})

function displayVIPUsers(data) {
    const VIPusers = data.filter(item => {
        const vip = item.vip === true
        return vip
})
console.log(VIPusers)
}

function displayAllUsers() {
    
}


fetch("https://polar-chartreuse-silverfish.glitch.me/")
.then(res => res.json())
.then(data => { 
    console.log(data)

const table = document.querySelector('table')
const input = document.querySelector("input")
input.addEventListener("keyup", userFilter)

function userFilter() {
    const filter = input.value.toUpperCase()
    const filteredData = data.filter(item => {
        const fullName = item.name.toUpperCase()
        return fullName.includes(filter)
    }) 

    renderTable(filteredData)
}

function renderTable(filteredData){
    table.innerHTML = 
    `
    <tr>
    <td>ID</td>
    <td>Picture</td>
    <td>First Name</td>
    <td>Last Name</td>
    <td>City</td>
    <td>Fav Color</td>
    </tr>
    `

    filteredData.forEach(x => {
    
    const split = x.name.split(" ")

    const img = document.createElement("img")
    img.src = x.image
    img.width = 50

    const tableRow = document.createElement("tr")
    tableRow.innerHTML =
    `
        <tr>
            <td class"id">${x.id}</td>
            <td class"picture">${img.outerHTML}</td>
            <td class="first name">${split[0]}</td>
            <td class="last name">${split[1]}</td>
            <td class"picture">${x.city}</td>
            <td class"picture">${x.fav_color}</td>
        </tr>
    `
        table.appendChild(tableRow)
    })
}
renderTable(data)
})
.catch(e => console.log(e.text))



