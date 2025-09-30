const Language = (props) => {

    const { title, isSelect, onToggle, id } = props

    return (
        <button className={` bottone ${isSelect && "bg-yellow"}`}
            key={id}
            onClick={onToggle}
        >
            {title}
            {console.log({ id }, { isSelect })}
        </button>

    )
}

export default Language