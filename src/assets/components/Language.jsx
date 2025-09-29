import { useState } from "react";

const Language = (props) => {

    const { title, description, isSelect, onToggle, onDescription, id } = props

    // variabile di stato del bottone
    // const [isSelect, setIsSelect] = useState(false);

    return (
        <>
            <button
                key={id}
                onClick={onToggle}
            >
                {title}
                {console.log({ id }, { isSelect })}
            </button>
            {/* {isSelect && <div className="description">{description}</div>} */}
        </>

    )
}

export default Language