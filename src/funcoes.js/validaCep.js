const validaCep = (cep) => {
    cep = cep.replace(/[^0-9]/gi, "");
    if (cep.length == 8) {
        return cep;
    }
    throw `CEP "${cep}" format invalid`
}

export default validaCep