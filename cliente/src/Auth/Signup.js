import React from 'react'
import { Component } from 'react-router-dom'
const Signup = () =>(
<div className="content">
<h2>Cadastro</h2>
<form>
  <input 
    type="text" 
    placeholder="Seu Nome" 
    />
   <input 
    type="text" 
    placeholder="Seu CPF" 
    />
    <input 
    type="text" 
    placeholder="Seu Telefone" 
    />
        <input 
    type="text" 
    placeholder="Seu E-mail" 
    />
</form>
</div>
	)

	export default Signup