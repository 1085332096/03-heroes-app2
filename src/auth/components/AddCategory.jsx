import { useState } from 'react'; 
// Importamos el hook useState para manejar el estado local dentro del componente.

// Recibimos la propiedad onNewCategory desde el componente padre, la cual será una función.
export const AddCategory = ({ onNewCategory }) => {

    // Definimos el estado local inputValue, que almacenará el valor del input. 
    // Inicialmente está vacío (''). setInputValue es la función que actualiza ese valor.
    const [inputValue, setInputValue] = useState('');

    // Función que se ejecuta cuando el input cambia. 
    // Destructuramos target del evento y obtenemos el valor del input para actualizar el estado.
    const onInputChange = ( { target } ) =>{
        // Actualizamos el valor del input con lo que el usuario escribe.
        setInputValue(target.value);
    }

    // Función que maneja el evento de submit del formulario.
    const onSubmit = (event) => {
        event.preventDefault(); // Prevenimos la acción por defecto del formulario (recargar la página).

        // Evaluamos que el valor del input no esté vacío ni solo contenga espacios.
        if(inputValue.trim().length <= 1) return;

        // Llamamos a la función onNewCategory con el valor limpio (sin espacios en blanco al inicio o al final).
        onNewCategory( inputValue.trim() );

        // Limpiamos el input después de enviar el formulario.
        setInputValue('');
    }

    // El componente retorna un formulario con un input controlado.
    return (
        <>
            <form onSubmit ={ (event) => onSubmit(event)}>
                {/* Input de texto que tiene un placeholder "Buscar imágenes", 
                su valor es controlado por el estado inputValue. 
                Cuando cambia el valor del input, ejecuta la función onInputChange. */}
                <input
                    type="text"
                    placeholder="Buscar imagenes"
                    value={inputValue}
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}
