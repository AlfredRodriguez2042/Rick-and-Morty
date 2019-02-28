import React from 'react'

const Buscador = props =>(
    <form className="form">
        <input type="search" className="search" name="search" id="search" onChange={props.onSearch} placeholder=" Buscar " ></input>
        <label for="search" className="icon-search"></label>
    </form>
)

export default Buscador