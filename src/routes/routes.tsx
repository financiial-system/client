import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'

export default function Router() {
  const token = localStorage.getItem("token")
  
  return (
    <Switch>
      <Route exact path="/" >
        <Welcome/>
      </Route>

      <Route exact path="/signup">
        <SignUp/>
      </Route>

      <Route exact path="/signin">
        <SignIn/>
      </Route>

      <Route exact path="/dashboard">
       {token === null? (
        <Redirect to="/signin"/>
       ) 
       : 
       (
        <Dashboard/>
       )
       } 
      </Route>
    </Switch>
  )
}
