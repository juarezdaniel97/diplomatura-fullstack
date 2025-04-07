const FiltrosImpGanancias = [
    {
        codigo:'',
        descripcion:'SIN FILTRO'
    },
    {
        codigo:'NI',
        descripcion:'NO INFORMA'
    },
    {
        codigo:'AC',
        descripcion:'ACTIVO'
    },
    {
        codigo:'EX',
        descripcion:'EXENTO'
    }
]

const FiltrosIntegranteSociedades = 
    [
        {
            codigo:'',
            descripcion:'SIN FILTRO'
        },
        {
            codigo:'N',
            descripcion:'NO INTEGRA SOCIEDADES'
        },
        {
            codigo:'S',
            descripcion:'SI INTEGRA SOCIEDADES'
        }
    ]

const FiltrosEmpleador = 
[
    {
        codigo:'',
        descripcion:'SIN FILTRO'
    },
    {
        codigo:'N',
        descripcion:'NO ES EMPLEADOR'
    },
    {
        codigo:'S',
        descripcion:'SI ES EMPLEADOR'
    }
]

export {FiltrosImpGanancias, FiltrosIntegranteSociedades, FiltrosEmpleador}