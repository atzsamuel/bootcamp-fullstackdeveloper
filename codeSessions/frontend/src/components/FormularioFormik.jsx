import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
// https://formik.org/docs/overview
//https://github.com/jaredpalmer/formik

const FormularioFormik = () => {
  const [formEnviado, setFormEnviado] = useState(false);

  return (
    <>
      <Formik>
        {(handleSubmit, values, handleChange, errors, handleBlur, touched) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" htmlFor="nombre" placeholder='samuel' value={values.nombre} onChange={handleChange} onBlur={handleBlur}>
                {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
              </input>
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input type="text" htmlFor="correo" name="correo" placeholder='samuelatzmorales@gmail.com' values={values.correo} onChange={handleChange} onBlur={handleBlur} />
              {touched.correo && errors.correo && <div>{errors.correo}</div>}
              <button type='submit'>Enviar</button>
              {formEnviado && <div>Formulario enviado</div>}
            </div>
          </form>
        )}
      </Formik>
    </>
  )

}

export default FormularioFormik;
