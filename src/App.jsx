import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Response from './pages/Response'
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </Layout>
  )
}

export default App
