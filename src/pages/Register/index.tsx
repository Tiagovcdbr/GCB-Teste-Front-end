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
  const [enderecoCookie, setEnderecoCookie] = useCookies(["endereço"]);
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

  
}

