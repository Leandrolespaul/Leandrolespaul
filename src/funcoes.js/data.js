

const data = (dataNascimento) => {
    let date = dataNascimento.split('/')
    const dataFormatada = date[0] + '-' + date[1] + '-' + date[2]
    return dataFormatada
}

export default data