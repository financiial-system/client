import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from '../components/Welcome'
import SignUp from '../components/SignUp'
import SignIn from '../components/Signin'
import Dashboard from '../pages/Dashboard'
import { toast } from 'react-toastify'

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
