
import Login from "./components/Login"

import Profile from "./components/Profile"
import Providers from "./context/Providers"
export default function App() {

  return (
    <div>
      <Providers>
  <Login />
  <Profile/>
  </Providers>
    </div>
  )
}
