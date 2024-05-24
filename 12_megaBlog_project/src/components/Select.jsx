import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {

    const id = useId();

    return (
        <div  className='w-100'>
            {label && <label htmlFor={id}></label>}
            <select id={id}
            {...props}
            ref={ref}
            className={`px-3 py-2 rounded-3 bg-light text-dark border-2 w-100 ${className}`}
            >
                {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
