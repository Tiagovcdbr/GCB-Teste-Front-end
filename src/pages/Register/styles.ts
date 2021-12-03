import styled from 'styled-components';
// Estilização po meio de styled components do Container exibido no index.tsx
export const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content:center;
  align-items:center;
  background-color:#fafafc;


  .section1Content {
    width:40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titleContent {
      display: flex;
      width: 32%;
      align-items: center;
      margin-bottom: 40px;
      justify-content: space-between;

      svg {
        cursor: pointer;
      }
    }
  }
  h1 {
    color: #1d164d;
    align-self: center;
    text-align: center;
  }

  a {
      text-decoration: none;
    }
  
  .fields{
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;

    input{
      padding: 10px;
      border-radius:4px;
      width:100%;
      height:50px;
      margin-bottom:20px;
    }

    button{
      width:50%;
      height:50px;
      margin-left:10px;
      background: #badc58;
      border: 0;
      border-radius: 5px;
      color:white;
    }
  }
`;

// Fim da estilização Container e seus filhos
// Toda responsividade está na configuração global da aplicação