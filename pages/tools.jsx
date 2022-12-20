//Components Imports
import Layout from "../components/Layout"
import SelectVariants from "../components/materialUI/SelectVariants"

//TODO Cambiar dinamicamente el contenido de los Select

export default function Tools () {
  return (
    <Layout>
      <div className="selectores">
        <SelectVariants 
          selectName='Materia'
          options={[
            'Otros',
            'Algebra Lineal',
          ]}
        />
        <SelectVariants 
          selectName='Herramienta'
          options={['Matrices']}
        />
      </div>
      <style jsx>{`
        .selectores{
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  )
}