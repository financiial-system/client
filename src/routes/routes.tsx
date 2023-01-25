import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome from '../components/Welcome'
import SignUp from '../components/SignUp'
import SignIn from '../components/Signin'
import Dashboard from '../pages/Dashboard'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" replace={true} />} />
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}
