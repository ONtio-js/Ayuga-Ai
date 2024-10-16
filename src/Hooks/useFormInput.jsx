import React, { useState } from "react"
export const useFormInput = (intitialValue) => {
        const [credential, setCredential] = useState(intitialValue);

    const handleOnchange = (e) => {
        setCredential(e.target.value)
    }

    return {
        value: credential,
        onChange: handleOnchange
    }

}