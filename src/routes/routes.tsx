import { Routes, Route } from 'react-router-dom'
import SignUp from '../components/SignUp'
import Welcome  from '../components/Welcome'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}
