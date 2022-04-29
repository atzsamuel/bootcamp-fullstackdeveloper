import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
// https://formik.org/docs/overview
//https://github.com/jaredpalmer/formik

const FormularioFormik = () => {
  const [formEnviado, setFormEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          correo: '',
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values)
          setFormEnviado(true);
          /*setTimeout(() => {
            setFormEnviado(false);
          }, 3000);*/
        }}
        validate={({ nombre, correo }) => {
          let errores = [];

          if (!nombre) {
            errores.nombre = 'Por favor ingresa un nombre';
          } else if (!/^[A-Za-z\s]{1,40}$/.test(nombre)) {
            errores.nombre = "El nombre solo debe contener letras y espacios";
          }

          if (!correo) {
            errores.correo = 'Por favor ingresa un correo';
          } else if (!/^[A-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]$/.test(correo)) {
            errores.correo = "El correo no es valido debe tener letras, numeros";
          }

          return errores;
        }}
      >
        {({ handleSubmit, values, handleChange, errors, handleBlur, touched }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" type="text" htmlFor="nombre" placeholder='samuel' value={values.nombre} onChange={handleChange} onBlur={handleBlur}>
                {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
              </input>
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input id="correo" type="text" htmlFor="correo" name="correo" placeholder='samuelatzmorales@gmail.com' values={values.correo} onChange={handleChange} onBlur={handleBlur} />
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
