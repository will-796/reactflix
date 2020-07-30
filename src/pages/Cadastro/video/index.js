import React from 'react';
import { Link } from 'react-router-dom';
import PageDefaut from '../../../components/PageDefaut';

function CadastroVideo() {
  return (

    <PageDefaut>
      <h1>Pepeu é lindo</h1>

      <Link to="/cadastro/categoria">
        Cadastro Categorias
      </Link>
    </PageDefaut>

  )
}

export default CadastroVideo;

