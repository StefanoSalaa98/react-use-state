const Language = (props) => {

    const { id, title, description } = props

    return (

        <button key={id}> {title} </button>

    )
}

export default Language