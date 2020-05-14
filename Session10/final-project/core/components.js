const components = {

}
components.register = `<section class="register-container">
<form class="register-form" id='register-form'>
    <div class="form-header">
        <h3>DEHEAF</h3>
    </div>
    <div class="form-content">
        <div class="name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firtname" placeholder="Firtname">
                <div id='firstname-error' class="messgae-error"></div>
            </div>
            <div class="input-wrapper">   
                <input type="text" name="lastname" placeholder="Lastname">
                <div id='lastname-error' class="messgae-error"></div>
            </div>
        </div>
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div id='email-error' class="messgae-error"></div>
        </div>
        <div class="input-wraper">
            <input type="password" name="password" placeholder="Password">
            <div id='password-error' class="messgae-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name='confirmPassword' placeholder='ConfirmPassword'>
            <div id='confirm-password-error' class="messgae-error"></div>
        </div>
        <div id="register-error" class="messgae-error"></div>
        <div id="register-success" class="messgae-success"></div>
    </div>
    <div class="form-footer">
        <a href="#" id='register-link' style="color: white;">Already have an account? Login</a>
        <button type="submit" id="register-btn">Register</button>
    </div>
</form>
</section>`
components.login = `<section class="log-in-container">
<form class="login-form" id='login-form'>
    <div class="form-header">
        <h3>DEHEAF</h3>
    </div>
    <div class="form-content">
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div class=messgae-error id=email-error></div>         
        </div>
        <div class="input-wraper">
            <input type="password" name="password" placeholder="Password">
            <div class=messgae-error id=password-error></div>
        </div>
        <div id="login-error" class="messgae-error"></div>
        <div id="login-success" class="messgae-success"></div>
    </div>
    <div class="form-footer">
        <a href="#" id='login-link'style="color: white;">Not yet have an account? Register</a>
        <button type="submit" id='login-btn'>Login</button>
    </div>
</form>
</section>`


// component header
components.header = ` <div class="header" >
<div class="brand-name"><a href="/" class="brand-name-text">Deheaf</a></div>
<div class="nav-bar" id="navBar">
    <ul class="bar">
        <li class="btn btn-dark"><a href="index.html">Home</a></li>
        <li class="btn btn-default btn-rounded btn-dark" data-toggle="modal"
            data-target="#modalLoginForm"><a href='./newpost.html'>Write A
            Post</a></li>
        <li class="btn btn-dark>
        <button type="submit" id="logOut">Logout</button>
        </li>
    </ul>

</div>
</div>`

components.tag = `
<div class="tags">
<ul class="tag-list card card-2">
    <li class="item header">
        Tags relate to our website
    </li>
        <li class="item"><a href="#" class="tag-link">#hello</a></li>
        <li class="item"><a href="#" class="tag-link">#hello</a></li>
        <li class="item"><a href="#" class="tag-link">#hello</a></li>
        <li class="item"><a href="#" class="tag-link">#hello</a></li>
        <li class="item"><a href="#" class="tag-link">#hello</a></li>
</ul>
</div>
`

components.footer = `
<div class="footer">
            <p class="team-text">Deheaf &copy; 2020</p>
            <p class="contact">Contact us now:</p>
            <div class="icon-contact">
                <a href="https://web.telegram.org/#/im" target="_blank"><i class="fab fa-telegram-plane fa-2x"></i></a>
                <a href="https://github.com/vantranthao/final-product" target="_blank"><i
                        class="fab fa-github-square fa-2x"></i></a>
                <a href="https://www.facebook.com/tranthao.van.35" target="_blank"><i
                        class="fab fa-facebook-square fa-2x"></i></a>
            </div>
        </div>
`


components.modal = `
<div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Write Your Post</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

               

            </div>
        </div>
</div>
`

components.formPost = ` <div class="container">
<h2>Write a post</h2>
<form id="userData" class="form-user">
    <div class="form-group">
        <label for="pwd">#hastags:</label>
        <input type="text" class="form-control" id="hastag" placeholder="Enter hastag"
            name="hastag">
    </div>
    <div class="form-group">
        <label for="text">Author Name:</label>
        <input type="text" class="form-control" id="author-text" placeholder="Enter name"
            name="userName">
    </div>
    <div class="form-group">
        <label for="pwd">Your content:</label><br>
        <textarea rows="6" cols="45" type="text" placeholder="Enter content" name="content"></textarea>

    </div>
    <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-primary" id="summit"><a href="index.html">Submit</a></button>
    </div>
</form>
</div>`