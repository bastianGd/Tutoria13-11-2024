import ApiGatos from "./components/API_Gatos/ApiGatos"
import { Card } from "./components/card/Card"
import { Footer } from "./components/footer/Footer"
import { Formulario } from "./components/formulario/Form"
import { Navbar } from "./components/navegacion/Navbar"
import { Productos } from "./components/productos/Productos"



function App() {

  return (
    <>
      <Navbar />
      {/* <Card /> */}
      <Formulario />
      <ApiGatos/>
      {/* <Productos /> */}
      <Footer description={"© 2018 Cuppon Latam .Todos los derechos Reservados."} />
    </>
  )
}

export default App
