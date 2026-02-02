
import Header from './layout/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<BookList />} />
        <Route path="/contact" element={<Book />} />
      </Routes>
      
    </>
  )
}

export default App
