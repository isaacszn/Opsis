import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Response from './pages/Response'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/response" element={<Response />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
