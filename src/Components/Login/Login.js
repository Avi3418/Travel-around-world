import './Login.css'

function Login()
{
    return(
        <>
        <div className='body1'>
       <div  id='login'>
      <div className='login'>
      
        <h1 className='text-center text-primary log'>Login</h1>
        <form>
        <input type="text" className='w-100 mt-3 text-center' placeholder=' Enter Your Registered E-mail' required/>
        <input type="text" className='w-100 mt-4 text-center'placeholder='Enter Your Password' required/>
        <button className='btn btn-primary ms-5 w-75 mt-4'>Login</button>

        </form>

      </div>
      </div>
      </div>
        </>
    )
}
export default Login;