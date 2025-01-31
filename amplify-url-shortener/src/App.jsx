import Home from './Home'
import ShortUrl from './ShortUrl'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/:id" element={<ShortUrl /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}