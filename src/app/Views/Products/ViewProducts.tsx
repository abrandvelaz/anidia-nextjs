'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortableTable from "@/app/components/sortTable";
function ViewProducts(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:8080/filter/filters')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return(
        <div className="container">
            <h1 className="mt-5">Filtrado de datos</h1>
            <div className="row justify-content-center mx-auto p-2">
                <form className="form-group row g-3">
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Ref. Producto</span>
                                <input type="text" className="form-control" id="rproducto" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Producto</span>
                                <input type="text" className="form-control" id="producto" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Tipo</span>
                                <input type="text" className="form-control" id="tipo" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Material</span>
                                <input type="text" className="form-control" id="material" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Marca</span>
                                <input type="text" className="form-control" id="marca" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Talla</span>
                                <input type="text" className="form-control" id="talla" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Modelo</span>
                                <input type="text" className="form-control" id="modelo" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Color</span>
                                <input type="text" className="form-control" id="color" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Unidad de capacidad</span>
                                <input type="text" className="form-control" id="ucapacidad" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Potencia</span>
                                <input type="text" className="form-control" id="potencia" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Voltaje</span>
                                <input type="text" className="form-control" id="voltaje" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Alimentación</span>
                                <input type="text" className="form-control" id="alimentacion" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Unidad de venta</span>
                                <input type="text" className="form-control" id="uventa" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Ref. Proveedor</span>
                                <input type="text" className="form-control" id="refprov" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Medida</span>
                                <input type="text" className="form-control" id="medida" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Familia</span>
                                <input type="text" className="form-control" id="familia" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Formato</span>
                                <input type="text" className="form-control" id="formato" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Capacidad</span>
                                <input type="text" className="form-control" id="capacidad" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Peso embalaje</span>
                                <input type="text" className="form-control" id="pesoemb" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Medidad de embalaje</span>
                                <input type="text" className="form-control" id="medidaemb" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text">Uso</span>
                                <input type="text" className="form-control" id="uso" />
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">Buscar Producto</button>
                        </div>
                </form>
                <SortableTable data={data} />
            </div>

        </div>
    );
}

export default ViewProducts;