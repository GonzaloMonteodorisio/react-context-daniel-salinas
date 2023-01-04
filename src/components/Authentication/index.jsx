import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Authentication = () => {

  const {auth, handleAuth} = useContext(AuthContext);

  return (
    <div>
      <button onClick={handleAuth}>
        {auth ? 'LLegaste' : 'te fuiste'}
      </button>
      {auth ? <p>Hola</p> : <p>Chau</p>}
    </div>
  )
}

export default Authentication;