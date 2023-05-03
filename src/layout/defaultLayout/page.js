import Footer from '../componentLayout/Footer/page'
import Header from '../componentLayout/Header/page'

function DefaultLayout({ children }) {
  return (
    <div className="max-w-screen-2xl text-base mx-auto">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
