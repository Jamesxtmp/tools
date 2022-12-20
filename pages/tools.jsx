//Components Imports
import Layout from "../components/Layout"
import ActionAreaCard from "../components/materialUI/ActionAreaCard"

import prevImgZorrito from "../public/Zorrito.jpg"

export default function Tools () {
  return (
    <Layout>
      <ActionAreaCard 
        cardName="Matrices"
        infoData="Obtener determinantes y Operciones entre Matrices"
        imgComponent={prevImgZorrito}
      />
      <ActionAreaCard 
        cardName="Asigandor de Grupos"
        infoData=""
      />
      <ActionAreaCard 
        cardName="Asigandor de Grupos"
        infoData=""
      />
      <ActionAreaCard 
        cardName="Asigandor de Grupos"
        infoData=""
      />
      <ActionAreaCard 
        cardName="Asigandor de Grupos"
        infoData=""
      />
    </Layout>
  )
}