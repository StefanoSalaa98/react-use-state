const Description = (props) => {

    const { active, id, description } = props

    const check = active === id

    return (

        check && <div className="description">{description}</div>

    )

}

export default Description