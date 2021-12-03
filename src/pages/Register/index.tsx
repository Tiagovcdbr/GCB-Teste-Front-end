import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { FiArrowLeft } from 'react-icons/fi';
import { validate } from 'gerador-validador-cpf';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import axios from 'axios';

const Home = () => {
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [dataNas, setDataNas] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cpf, setCpf] = useState('');
  const [uf, setUf] = useState('');

  const [nomeCookie, setNomeCookie] = useCookies(["nome"]);
  const [dataNasCookie, setDataNasCookie] = useCookies(["dataNasc"]);
  const [enderecoCookie, setEnderecoCookie] = useCookies(["endereco"]);
  const [bairroCookie, setBairroCookie] = useCookies(["bairro"]);
  const [cidadeCookie, setCidadeCookie] = useCookies(["cidade"]);
  const [ufCookie, setUfCookie] = useCookies(["uf"]);
  const [cpfCookie, setCpfCookie] = useCookies(["cpf"]);
  const [cepCookie, setCepCookie] = useCookies(["cep"]);
  
  // Inserindo o cep as seguintes informações deverão retornar como mostra abaixo
  interface cepResponse {
    data: {
      bairro: string;
      localidade: string;
      uf: string;
      logradouro: string;
    }
  }

  const handleLoadEndereco = useCallback(
    async (cep: string) => {

      const response:cepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      console.log(response.data)
      console.log(nomeCookie, dataNasCookie, ufCookie, enderecoCookie, bairroCookie, cidadeCookie, cpfCookie, cepCookie )
      setCep(cep);
      setEndereco(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setUf(response.data.uf);
    },
    [nomeCookie, dataNasCookie, ufCookie, enderecoCookie, bairroCookie, cidadeCookie, cpfCookie, cepCookie]
  );

  const handleSignUp = useCallback(
    async () => {
      const isValid = validate(cpf);

      console.log(nome, dataNas, cep, endereco, bairro, cidade, uf);
      // Caso todas as informações adquiridas com o cpf seja valida armazenar em local  caso não "alert"
      if (isValid) {
        if (nome === '' || dataNas === '' || cep === '' || endereco === '' || bairro === '' || cidade === '' || uf === '') {
          alert('Preencha todos os campos')
        } else {
          localStorage.setItem('nome', nome);
          localStorage.setItem('dataNasc', dataNas);
          localStorage.setItem('cpf', cpf);
          localStorage.setItem('endereco', endereco);
          localStorage.setItem('bairro', bairro);
          localStorage.setItem('cidade', cidade);
          localStorage.setItem('uf', uf);
          localStorage.setItem('cep', cep);

          setNomeCookie("nome", `${nome}`, {
            path: "/"
          });

          setBairroCookie("bairro", `${bairro}`, {
            path: "/"
          });

          setDataNasCookie("dataNasc", `${dataNas}`, {
            path: "/"
          });

          setCpfCookie("cpf", `${cpf}`, {
            path: "/"
          });

          setCepCookie("cep", `${cep}`, {
            path: "/"
          });

          setEnderecoCookie("endereco", `${endereco}`, {
            path: "/"
          });

          setCidadeCookie("cidade", `${cidade}`, {
            path: "/"
          });

          setUfCookie("uf", `${uf}`, {
            path: "/"
          });

          setNomeCookie("nome", `${nome}`, {
            path: "/"
          });

          alert('Dados salvos com sucesso !')
        }
      } else {
        alert('CPF Invalido');
      }

    },
    [bairro, cep, cidade, cpf, dataNas, endereco, nome, setBairroCookie, setCepCookie, setCidadeCookie, setCpfCookie, setEnderecoCookie, setNomeCookie, setUfCookie, setDataNasCookie, uf],
  );
   
  return (
    <Container>
      <div className="section1Content">

        <div className="titleContent">
          <Link to="/">
            <FiArrowLeft size={28} />
          </Link>
          <h1>Cadastro</h1>
        </div>
        <div className="fields">
        <input type="text" placeholder="Nome" name="nome" onChange={e => setNome(e.target.value)} />
            <input type="text" placeholder="Data de nascimento" name="dataNas" onChange={e => setDataNas(e.target.value)} />
            <input type="text" placeholder="CPF" name="cpf" onChange={e => setCpf(e.target.value)} />
            <input type="text" placeholder="CEP" name="cep" onBlur={e => handleLoadEndereco(e.target.value)} />

            <input type="text" placeholder="Endereço" value={endereco} name="endereco" onChange={e => setEndereco(e.target.value)} />
            <input type="text" placeholder="Bairro" value={bairro} name="bairro" onChange={e => setBairro(e.target.value)}  />
            <input type="text" placeholder="Cidade" value={cidade} name="cidade" onChange={e => setCidade(e.target.value)}  />
            <input type="text" placeholder="UF" value={uf} name="UF" onChange={e => setUf(e.target.value)}  />

            <button onClick={handleSignUp}>
              Confirmar
            </button>
        </div>
      </div>
    </Container>
  );

}

export default Home;

