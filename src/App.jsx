import Center from './components/Center'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import invoiceSlice from './redux/invoiceSlice'
import { AnimatePresence } from 'framer-motion'
import InvoiceInfo from './components/InvoiceInfo'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(invoiceSlice.actions.deleteInvoice({ id: id }))
  }

  return (
    <div className='dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb]'>

      <Header />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route element={<Center />} path='' />
          <Route element={<InvoiceInfo onDelete={onDelete} />} path='/invoice' />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App