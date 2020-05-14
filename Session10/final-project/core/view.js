//UI

const view = {
    currentScreen: null
}
view.showComponents = function (screenName) {
    view.currentScreen = screenName
    switch (screenName) {
        case "register": {
            let app = document.getElementById('app')
            app.innerHTML = components.register

            let link = document.getElementById('register-link')
            link.onclick = linkClickHandler

            let form = document.getElementById("register-form")
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponents('login')
            }

            function formSubmitHandler(e) {
                e.preventDefault()
                let registerInfor = {
                    firstname: form.firtname.value.trim(),
                    lastname: form.lastname.value.trim(),
                    email: form.email.value.trim().toLowerCase(),
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value,
                }
                let validateResult = [
                    view.validate("firstname-error", [registerInfor.firstname, "Missing firtname !"]),
                    view.validate("lastname-error", [registerInfor.lastname, "Missing lastname !"]),
                    view.validate("email-error", [registerInfor.email, "Missing email !"]),
                    view.validate("password-error", [registerInfor.password, "Missing password !",
                        registerInfor.password.length >= 6, "Password must be greater or equal than 6 letter !"
                    ]),
                    view.validate("confirm-password-error", [registerInfor.confirmPassword, "Missing confirm password!",
                        registerInfor.password == registerInfor.confirmPassword, "Password and confirmpassword not match"
                    ])
                ]
                if (view.allPassed(validateResult)) {
                    controller.register(registerInfor)
                }
            }

            break;
        }
        case 'login': {
            let app = document.getElementById('app')
            app.innerHTML = components.login

            let link = document.getElementById('login-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('login-form')
            form.onsubmit = formSubmitHandler

            function formSubmitHandler(e) {
                e.preventDefault()
                let loginInfor = {
                    email: form.email.value.trim().toLowerCase(),
                    password: form.password.value.trim()
                }
                let validateResult = [
                    view.validate("email-error", [loginInfor.email, "Missing email"]),
                    view.validate("password-error", [loginInfor.password, 'Missing password',
                        loginInfor.password.length >= 6, "Password must be greater or equal than 6 letter !"
                    ])
                ]
                if (view.allPassed(validateResult)) {
                    controller.signIn(loginInfor)
                }
            }

            function linkClickHandler() {
                view.showComponents('register')
            }


            break;
        }
        case "main": {
            let app = document.getElementById("app")
            let main = components.header +` <div class="main">` + components.tag + `
            <div class="main-content" id="content-list">
            </div>
        </div>` + components.footer;
            app.innerHTML = main;
            let logout=document.getElementById("logOut")
            logout.addEventListener('click',(e)=>{
                e.preventDefault()
                controller.signOut()
            })
            break;
        }
   
    }
}
view.setText = function (id, text) {
    document.getElementById(id).innerText = text;
}
view.validate = function (idErrorTag, validateInfos) {
    for (let i = 0; i < validateInfos.length; i += 2) {
        let condition = validateInfos[i]
        let message = validateInfos[i + 1]
        if (!condition) {
            view.setText(idErrorTag, message)
            return false
        }
    }
    view.setText(idErrorTag, " ")
    return true
}
view.allPassed = function (validateResult) {
    for (let result of validateResult) {
        if (!result) {
            return false
        }
    }
    return true
}
view.disable = function (id) {
    document.getElementById(id).setAttribute('disabled', true)
}
view.enable = function (id) {
    // document.getElementById(id).removeAttribute('disabled',true)
}