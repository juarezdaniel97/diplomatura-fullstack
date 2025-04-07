
const persona1 = {
    id: 1,
    cuit: '20-12345678-9',
    apellido: 'Pérez',
    nombre: 'Juan',
    domicilio: 'Calle Falsa 123',
    edad: 90
};

const cuentaCorriente = {
    cuit: '20-12345678-9',  // Repite el cuit
    email: 'juan.perez@example.com',
    saldo: 1500,
    riesgoCrediticio: 'Bueno'
};

const clientesSucursal1 = [
    {
        cuit: '20-12345678-9',
        nombre: 'Juan Pérez',
        email: 'juan.perez@example.com'
    },
    {
        cuit: '27-98765432-1',
        nombre: 'María Gómez',
        email: 'maria.gomez@example.com'
    },
    {
        cuit: '23-65432198-7',
        nombre: 'Carlos López',
        email: 'carlos.lopez@example.com'
    }
];

const clientesSucursal2 = [
    {
        cuit: '24-13579246-8',
        nombre: 'Ana Martínez',
        email: 'ana.martinez@example.com'
    },
    {
        cuit: '21-24681357-9',
        nombre: 'Lucía Fernández',
        email: 'lucia.fernandez@example.com'
    },
    {
        cuit: '25-19283746-5',
        nombre: 'Roberto Sánchez',
        email: 'roberto.sanchez@example.com'
    },
    {
        cuit: '26-34567890-1',
        nombre: 'Gabriela Torres',
        email: 'gabriela.torres@example.com'
    },
    {
        cuit: '23-56789012-3',
        nombre: 'Pablo Díaz',
        email: 'pablo.diaz@example.com'
    },
    {
        cuit: '22-67890123-4',
        nombre: 'Carolina Vargas',
        email: 'carolina.vargas@example.com'
    },
    {
        cuit: '27-89012345-6',
        nombre: 'Martín Ruiz',
        email: 'martin.ruiz@example.com'
    }
];

/* FUNCIONALIDAD REDUCE DE LOS VECTORES */
const productos = [
    { 
        id: 1, 
        nombre: 'Laptop', 
        codigo: 'A123', 
        stock: 5, 
        cantidadDeVendidos: 50, 
        cantidadDeDevoluciones: 3 
    },
    { 
        id: 2, 
        nombre: 'Teclado', 
        codigo: 'B456', 
        stock: 12, 
        cantidadDeVendidos: 120, 
        cantidadDeDevoluciones: 5 
    },
    { 
        id: 3, 
        nombre: 'Mouse', 
        codigo: 'C789', 
        stock: 8, 
        cantidadDeVendidos: 75, 
        cantidadDeDevoluciones: 2 
    },
    { 
        id: 4, 
        nombre: 'Monitor', 
        codigo: 'D101', 
        stock: 3, 
        cantidadDeVendidos: 40, 
        cantidadDeDevoluciones: 1 
    },
    { 
        id: 5, 
        nombre: 'Impresora', 
        codigo: 'E202', 
        stock: 15, 
        cantidadDeVendidos: 30, 
        cantidadDeDevoluciones: 0 
    }
];

let facturas = [
    {
        numeroFactura: "F001",
        fecha: "2024-09-17",
        importe: 150,
        cantidad: 3,
        total: 450
    },
    {
        numeroFactura: "F002",
        fecha: "2024-09-18",
        importe: 200,
        cantidad: 2,
        total: 400
    },
    {
        numeroFactura: "F003",
        fecha: "2024-09-19",
        importe: 100,
        cantidad: 5,
        total: 500
    },
    {
        numeroFactura: "F004",
        fecha: "2024-09-20",
        importe: 250,
        cantidad: 1,
        total: 250
    },
    {
        numeroFactura: "F005",
        fecha: "2024-09-21",
        importe: 300,
        cantidad: 4,
        total: 1200
    }
];

export {clientesSucursal1, clientesSucursal2, persona1, cuentaCorriente, productos, facturas}



