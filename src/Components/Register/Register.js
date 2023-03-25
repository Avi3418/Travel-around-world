import './Register.css'
function Register()
{
    return(
        <>
       
 <div className='body pt-4' id='register'>
  <div className="div">
  <div className='bg-light'>
  <h1 className='text-center text-primary '>Registration Form</h1>
  <form>
  <input type="text" className="w-100 mt-4" placeholder=" First name" required />
            <input type="text" class="w-100 mt-4" placeholder="last Name" required/>
             Gender: &nbsp; &nbsp;
            <input type="checkbox"  value="female"class="mt-3"/>Female &nbsp;
            <input type="checkbox" value="male"/>Male
            <input type="text" class="w-100 mt-3" placeholder="E-mail" required />
            <input type="passwword" class="w-100 mt-4" placeholder="password"/>
             <input type="passwword" class="w-100 mt-4" placeholder="confirm password" required />
              <input type="phone Number" class="w-100 mt-4 mb-2" placeholder="Phone Number" required />
              Remember Me: &nbsp;
            <input class="form-check-input" type="checkbox" name="remember"/>
            <input type="submit" className="btn btn-primary w-75 mt-4"/>
  </form>
</div>
</div>
</div>

        </>
    )
}
export default Register;