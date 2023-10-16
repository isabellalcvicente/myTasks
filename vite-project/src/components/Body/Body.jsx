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


  return (
    <div>CriarTarefa</div>
  )
}

export default CriarTarefa