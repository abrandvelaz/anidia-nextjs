import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    return (
        <div>
            <Button>Click me</Button>
        </div>
    )
}


const SortableTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Realiza una solicitud a tu API aquí
        axios
            .get('https://localhost:8080/filter/filters') // Reemplaza con la URL de tu API
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API', error);
            });
    }, []);

    useEffect(() => {
        // Inicializa TableSorter después de que los datos estén disponibles
        if (data.length > 0) {
            $(document).ready(() => {
                $('#sortable-table').tablesorter();
            });
        }
    }, [data]);

    return (
        <div>
            <table id="sortable-table" className="tablesorter">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    {/* Agrega más columnas según tu API */}
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.tipo}</td>
                        {/* Agrega más celdas según tu API */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SortableTable;
