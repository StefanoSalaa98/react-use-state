const Description = (props) => {

    const { active, id, description } = props

    // controllo se l'identificativo del bottone corrisponde a quello selezionato
    const check = active === id

    return (

        check && <div className="description">{description}</div>

    )

}

export default Description