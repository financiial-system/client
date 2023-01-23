import { Routes, Route } from 'react-router-dom'
import Welcome  from '../components/Welcome'

export default function Router() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome/>} />
    </Routes>
  )
}
