// define UI
const form = document.getElementById("userData")
const summit = document.getElementById("summit")


//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //realtime 
    let today = new Date()
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = date + ' ' + time
    db.collection("user").add({
        hastag: form.hastag.value,
        userName: form.userName.value,
        content: form.content.value,
        like: 0,
        dislike: 0,
        time: dateTime,
    })
    window.alert("Success Post")
    form.userName.value = ""
    form.hastag.value = ""
    form.content.value = ""
    window.href = window.location.host;
})


