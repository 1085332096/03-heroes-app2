// recibe las propiedades (props) title, url, e id y las desestructura en la funciónpqra mostrar la imagen

export const GifItem = ( {title, url} ) => {
  
    return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
