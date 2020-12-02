import React from 'react'

const Alert = ({text,type}) => {
    return (
        <div>
            <div className={`alert alert-${type} mt-4 position-absolute top w-100`}role="alert">
                {text}
            </div>
        </div>
    )
}

export default Alert