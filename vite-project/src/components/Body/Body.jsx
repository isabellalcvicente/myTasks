import React, { useState } from "react";
import { StyledBody } from "./body";
import { Flex, Spacer, Container, Input, Button, Item } from "../../styles/GlobalStyles";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap-icons/font/bootstrap-icons.css';


const TodasAsTarefas = () => {
  //armazena todas as tarefas no seu estado 0
  
  
  const [tarefa, setTarefa] = useState("");
  const [arrayTarefas, setTodasAsTarefas] = useState([
    {
      id: 1,
      descricao: "comprar pao",
      check: false,
    },
    {
      id: 2,
      descricao: "ir pra acad",
      check: true,
    },
  ]);

  const addTarefa = () => {
    if (tarefa !== ""){
      const novaTarefa={
        id: uuidv4(),
        descricao: tarefa,
        check: false,
      }
        setTodasAsTarefas([...arrayTarefas, novaTarefa])
        setTarefa("")
      }
      
     else {
      alert("Tarefa não pode ser vazia.");
    }
  }


  const deletarTarefa = (id) => {
    const novoArray = arrayTarefas.filter((tarefa) => tarefa.id !== id);
    setTodasAsTarefas(novoArray);
  };
  

  const checked=(id,check)=>{
    const index=arrayTarefas.findIndex(tarefa=>tarefa.id== id);
    const novoArray=arrayTarefas
    novoArray[index].check=!check;
    setTodasAsTarefas([...novoArray])
  };

  return (
    <StyledBody>
      <Container>
        <h2>Essas são todas as suas tarefas:</h2>
       <Spacer />
        <Flex direction="row" justify="space-between">
          <div>
          <Input
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
          />
          <Button onClick={addTarefa}>Adicionar</Button>
        </div>
        </Flex>
        <ul>
          {arrayTarefas
          .filter((tarefa)=> tarefa.descricao && tarefa.descricao.toLowerCase().includes(pesquisar&&pesquisar.toLowerCase()))
          .map((tarefa) => (
            <Item check={tarefa.check}  key={tarefa.id}>
              
                <p> {tarefa.descricao} </p>
                <Flex direction="row">
                  <button onClick={()=> deletarTarefa(tarefa.id)}>
                     <i className="bi bi-trash" > </i> 
                  </button>
                  <button onClick={()=> checked(tarefa.id, tarefa.check)}>
                     <i className="bi bi-check"></i> 
                  </button>
                  </Flex>
              <Spacer margin="12px" />
            </Item>
          ))}
        </ul>  
      </Container>
    </StyledBody>
)
        }
export default Body