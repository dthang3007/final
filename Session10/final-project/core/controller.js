const controller = {}
controller.register = async function (registerInfor) {
    let email = registerInfor.email
    let password = registerInfor.password
    let displayName = registerInfor.firstname + " " + registerInfor.lastname
    view.setText('register-success', " ")
    view.setText('register-error', " ")
    view.disable("register-btn")
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success', "An erification email has been sended to your email address")
    } catch (err) {
        view.setText("register-error", err.message)
    }
    view.enable("register-btn")
}
controller.signIn = async function (loginInfor) {
    let email = loginInfor.email
    let password = loginInfor.password
    view.setText('login-success', " ")
    view.setText('login-error', " ")
    view.disable("login-btn")
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        // console.log(result)
        if (!result.user || !result.user.emailVerified) {
            throw new Error("You must verify email")
        }
        view.showComponents("main");

        
    } catch (err) {
        view.setText("login-error", err.message)
    }
    view.enable("login-btn")
}
controller.signOut=async function(){
    await firebase.auth().signOut()
    console.log("hello")
}