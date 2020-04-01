import React, {createContext} from 'react';

const SendEmailContext = createContext({})

const setValues = (setState) => (values) => {
    setState(values)
    localStorage.setItem("mail.values", JSON.stringify(values))
}

const getValues = () => {
    const data = localStorage.getItem("mail.values")
    const decodedData = data ? JSON.parse(data) : []
}

export const MailData = {
    setValues,
    getValues
}
export default SendEmailContext