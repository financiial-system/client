import { Routes, Route } from 'react-router-dom'
import Welcome  from '../components/Welcome'
import SignUp from '../components/SignUp'
import SignIn from '../components/Signin'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
    </Routes>
  )
}
