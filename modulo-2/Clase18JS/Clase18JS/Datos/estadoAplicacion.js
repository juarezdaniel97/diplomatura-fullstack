const estadoAplicacion = {
        cuilIngresado: "",
        nombreIngresado: "",
        habilitarBusquedaProgresiva: false,
        filtrosImpGanancias: "",
        filtrosEmpleador: "",
        filtrosIntegranteSociedades: "",

        setCuilIngresado(newValue){
            this.cuilIngresado = newValue;
        },

        setNombreIngresado(newValues){
            this.nombreIngresado = newValues.toUpperCase();
        },

        setHabilitarBusquedaProgresiva(newValue){
            this.habilitarBusquedaProgresiva = newValue;
        },

        setfiltrosImpGanancias(newValue){
            this.filtrosImpGanancias = newValue;
        },

        setfiltrosIntegranteSociedades(newValue){
            this.filtrosIntegranteSociedades = newValue;
        },

        setfiltrosEmpleador(newValues){
            this.filtrosEmpleador = newValues;
        }
    }

export default estadoAplicacion;