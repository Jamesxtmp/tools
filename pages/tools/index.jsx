//Components Imports
import Layout from "../../components/Layout"
import ActionAreaCard from "../../components/materialUI/ActionAreaCard"

import prevImgZorrito from "../../public/Zorrito.jpg"

export default function Tools () {
  return (
    <Layout>
      <ActionAreaCard 
        cardName="Matrices"
        infoData="Trabajando en ello..."
        imgComponent={prevImgZorrito}
        cardHref="/matrices"
      />
      <ActionAreaCard 
        cardName="Asigandor de Grupos"
        infoData="Proximamente"
      />
      <ActionAreaCard 
        cardName="Calculadora de Tiempo"
        infoData="Proximamente"
      />
      <ActionAreaCard 
        cardName="Conversor de Bases Nuemericas"
        infoData="Proximamente"
      />
    </Layout>
  )
}