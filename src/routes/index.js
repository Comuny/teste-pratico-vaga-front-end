// crie sua página aqui uhul :) manda vê!
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

} from './../actions';

import {

} from './../components';

class AppPage extends Component {

    render() {

        return (
            <div className="container">
                <div className="row pt-30">
                    <div className="col-md-12">
                        <h1>Compartilhar livro</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <label>Pesquisar livro</label>
                        <input type="text" />
                        <button>Pesquisar</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <label>Resultados dos livros</label>
                        <select>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div  className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <label>Imagem do livro </label>

                        <img />
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 col-lg-8">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                                <label>Título do livro </label>

                                <input
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-12 col-sm-12 col-lg-8">
                                <label>Editora</label>

                                <input
                                    type="text"
                                />
                            </div>


                            <div  className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                                <label>Edição</label>

                                <input
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div  className="col-md-9 col-lg-9 col-xs-12 col-sm-12">
                                <label>Autores</label>

                                <input
                                    type="text"
                                />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                                <label>Quantidade de páginas</label>

                                <input
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div  className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                                <label>Peso</label>

                                <input
                                    type="number"
                                />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                                <label>Comprimento</label>

                                <input
                                    type="number"
                                />
                            </div>

                            <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                                <label>Largura</label>

                                <input
                                    type="number"
                                />
                            </div>

                            <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                                <label>Altura</label>

                                <input
                                    type="number"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12" >
                        <label>Disciplinas do livro</label>
                        <select>
                            <option>Administração</option>
                            <option>Álgebra</option>
                            <option>Direito penal</option>
                            <option>Banco de dados 1</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12 mt-40">
                        <label>Estado do livro</label>
                        <select>
                            <option>Novo</option>
                            <option>Semi novo</option>
                            <option>Conservado</option>
                            <option>Velho</option>
                            <option>Muito velho</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                        <label>Preço</label>
                        <input
                            type="text"
                        />
                    </div>
                    <div  className="col-md-1 col-lg-1 col-xs-12 col-sm-12">
                    </div>
                    <div  className="col-md-2 col-lg-2 col-xs-12 col-sm-12">
                        <label>Público?</label>
                        <input type="checkbox"
                        />

                    </div>
                    <div  className="col-md-5 col-lg-5 col-xs-12 col-sm-12">
                        <label>Tipo</label>
                        <div className="row">
                            <div className="col-12 pl-40">
                                <input type="radio" name="type_order"
                                    
                                    value={'SELL'}
                                /> 
                                Venda
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 pl-40">
                                <input type="radio" name="type_order"
                                    value={'DONATION'}
                                /> 
                                Doação
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        Implemente aqui um upload de fotos, para a galeria.
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 col-xs-12 col-lg-10 col-sm-12">
                        <label>Digite a rua, cep, bairro, cidade ou estado</label>
                        <input type="text" />
                    </div>
                       
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12" >
                    
                        <label>Resultados</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                                <label>Descrição do endereço (casa, trabalho, casa do namorado (a)) </label>

                                <input
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div  className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
                                <label>Endereço </label>

                                <input
                                    type="text"
                                />
                            </div>

                             <div  className="col-md-2 col-lg-2 col-xs-12 col-sm-12">
                                <label>CEP</label>

                                <input
                                    type="text"
                                />
                            </div>

                            <div  className="col-md-2 col-lg-2 col-xs-12 col-sm-12">
                                <label>Número </label>

                                <input
                                    type="number"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div  className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                                <label>Bairro</label>
                                <input
                                    type="text"
                                />
                            </div>
                            <div  className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                                <label>Cidade</label>

                                <input
                                    type="text"
                                />
                            </div>

                            <div  className="col-md-2 col-lg-2 col-xs-12 col-sm-12">
                                <label>Estado</label>

                                <input
                                    type="text"
                                />
                            </div>

                            <div  className="col-md-2 col-lg-2 col-xs-12 col-sm-12">
                                <label>País</label>

                                <input
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-end">
                    <div className="col-md-2">
                        <button>Salvar</button>
                    </div>
                </div>

        </div>
        )
    }
}

// map state to props
const mapStateToProps = ({ }) => {
    return {}
}

export default connect(mapStateToProps, {
})((AppPage));
