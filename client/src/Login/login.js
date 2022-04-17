import '../Login/login.css';
import SignUp from './SignUp'
const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  function handleSubmit(event){
      return false;
  }
const login = ()=>{
 
    return(
        <>
         <section>
    <div className="container">
      <div className="user signinBx">
        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
        <div className="formBx">
          <form action="" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input type="text" name="usename" id="username" placeholder="Username" />
            <input type="password" name="password" id="password" placeholder="Password" />
            <input type="submit" name="" value="Login" />
            <p className="signup">
              Don't have an account ?
              <a href="#" onClick={toggleForm}>Sign Up.</a>
            </p>
          </form>
        </div>
      </div>
      <SignUp/>
    </div>

  </section>

        </>
    )
}

export default login;