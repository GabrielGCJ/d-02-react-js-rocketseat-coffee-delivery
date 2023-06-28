import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'

import { HomePage } from './pages/HomePage/HomePage'
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'
import { SuccessPage } from './pages/SuccessPage/SucessPage'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}
