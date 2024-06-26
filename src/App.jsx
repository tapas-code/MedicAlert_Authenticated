import React, { useEffect } from 'react'
import keycloakConfig from './authentication/keycloak'
import Keycloak from 'keycloak-js'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import AppRouter from './router/AppRouter'

const App = () => { 
  const kc = new Keycloak(keycloakConfig);

  return (
    <ReactKeycloakProvider authClient={kc} initOptions={{ onLoad: 'login-required' }}>
      <div className='bg--main rounded-bottom-5 '>
        <AppRouter/> 
      </div>
    </ReactKeycloakProvider>
  )
}

export default App
