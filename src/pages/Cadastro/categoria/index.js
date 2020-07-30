import React from 'react';
import { Link } from 'react-router-dom';
import PageDefaut from '../../../components/PageDefaut';

function CadastroCategoria() {
  return (
    <PageDefaut>
      <h1>Cadastro de Categoria</h1>
      <form>
        <label>
          Nome da Categoria:
          <input type="text"/>
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Voltar para a Home
      </Link>
    </PageDefaut>
  )
}

export default CadastroCategoria;
