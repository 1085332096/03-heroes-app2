//Barra buscar:permite al usuario escribir texto en un campo de entrada y, al enviar
// el formulario, valida que el texto no esté vacío ni contenga solo espacios.
//lo envia a onNewCategory 
import { useState } from 'react'; 
// Importamos el hook useState 

// Recibimos la propiedad onNewCategory 
export const AddCategory = ({ onNewCategory }) => {

    // Definimos el estado local inputValue, que almacenará el valor del input. 
    // setInputValue  función  actualiza valor.
    const [inputValue, setInputValue] = useState('');

    // Función que se ejecuta cuando el input cambia. 
    //  target obtenemos el valor del input para actualizar el estado.
    const onInputChange = ( { target } ) =>{
        // Actualizamos el valor del input con lo que el usuario escribe.
        setInputValue(target.value);
    }

    // Función que maneja el evento de submit del formulario.
    const onSubmit = (event) => {
        event.preventDefault(); // Prevenimos la acción por defecto del formulario (recargar la página).

        // Evaluamos que el valor del input no esté vacío.
        if(inputValue.trim().length <= 1) return;

        // Llamada a la función onNewCategory con el valor limpio
        onNewCategory( inputValue.trim() );

        // Limpiamos el input después de enviar el formulario.
        setInputValue('');
    }

    // El componente retorna un formulario con un input controlado.
    return (
        <>
            <form onSubmit ={ (event) => onSubmit(event)}>

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
