import React, { useState } from "react";

export const App = () => {
  const [account, setAccount] = useState(false);

  return (
    <div>
      <form action="">
        {account ? (
          <div>
            <label htmlFor="">SignIn</label>
            <input type="text" />
            <br />
            <input type="text" />
          </div>
        ) : (
          <div>
            <label htmlFor="">SignUp</label>
            <input type="text" />
            <br />
            <input type="text" />
          </div>
        )}
        <button type='submit'>
          {account ? 'Sign IN' : 'Sign Up'}
        </button>
      </form>
      {account ? <h2>You havent account ? <span className='text-danger' onClick={() => {
        setAccount(false)
      }} >SignUp</span></h2>
       : <h2>You already have account <span className='text-danger' onClick={() => {
        setAccount(true)
       }} >SignIn</span></h2>}
    </div>
  );
};
