import React, { useState, useCallback } from 'react';
import { FiMail, FiUser, FiPhone } from 'react-icons/fi';

import {
  Container,
  DivLabelInput,
  DivInput,
  DivCheckbox,
  Button,
} from './styles';

export default () => {
  const [email, setEmail] = useState('');
  const [emailIsFocused, setEmailIsFocused] = useState(false);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [celular, setCelular] = useState('');
  const [celularIsFocused, setCelularIsFocused] = useState(false);

  const [cultoManha, setCultoManha] = useState(false);
  const [cultoNoite, setCultoNoite] = useState(false);

  const handledEmailFocus = useCallback(() => {
    setEmailIsFocused(true);
  }, []);

  const handledEmailBlur = useCallback(() => {
    setEmailIsFocused(false);
  }, []);

  const handledNomeFocus = useCallback(() => {
    setNomeIsFocused(true);
  }, []);

  const handledNomeBlur = useCallback(() => {
    setNomeIsFocused(false);
  }, []);

  const handledCelularFocus = useCallback(() => {
    setCelularIsFocused(true);
  }, []);

  const handledCelularBlur = useCallback(() => {
    setCelularIsFocused(false);
  }, []);

  function handleInputChange(event) {
    const target = event.target;

    if (target.name === 'cultoManha') {
      setCultoManha(!cultoManha);
    } else {
      setCultoNoite(!cultoNoite);
    }
  }

  const handleSubmitForm = useCallback(() => {
    // alert('Seu formulário foi enviado');
    console.log(celular);
    setEmail('');
    setEmailIsFocused(false);
    setNome('');
    setNomeIsFocused(false);
    setCelular('');
    setCelularIsFocused(false);
    setCultoManha(false);
    setCultoNoite(false);
  }, [celular]);

  return (
    <Container>
      <DivLabelInput>
        <label htmlFor="emailInput">
          Endereço de e-mail <span>*</span>{' '}
        </label>
        <DivInput isFilled={!!email} isFocused={emailIsFocused}>
          <FiMail size={20} />
          <input
            type="email"
            id="emailInput"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={handledEmailFocus}
            onBlur={handledEmailBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="nomeCompletoInput">
          Nome completo <span>*</span>{' '}
        </label>
        <DivInput isFilled={!!nome} isFocused={nomeIsFocused}>
          <FiUser size={20} />
          <input
            type="text"
            id="nomeCompletoInput"
            placeholder="Seu nome completo"
            value={nome}
            onChange={e => setNome(e.target.value)}
            onFocus={handledNomeFocus}
            onBlur={handledNomeBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="celularInput">
          Celular <span>*</span>{' '}
        </label>
        <DivInput isFilled={!!celular} isFocused={celularIsFocused}>
          <FiPhone size={20} />
          <input
            type="number"
            id="celularInput"
            placeholder="Seu celular"
            maxLength={11}
            value={celular}
            onChange={e => setCelular(e.target.value)}
            onFocus={handledCelularFocus}
            onBlur={handledCelularBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label>
          Selecione o horário para agendamento <span>*</span>{' '}
        </label>
        <DivCheckbox>
          <input
            type="checkbox"
            id="cultoManhaInput"
            name="cultoManha"
            checked={cultoManha}
            onChange={handleInputChange}
          />
          <label htmlFor="cultoManhaInput">
            Manhã, check-in às 9h, início às 10h
          </label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="checkbox"
            id="cultoNoiteInput"
            name="cultoNoite"
            checked={cultoNoite}
            onChange={handleInputChange}
          />
          <label htmlFor="cultoNoiteInput">
            Noite, check-in às 17h, início às 18h
          </label>
        </DivCheckbox>
      </DivLabelInput>

      <Button
        onClick={() => handleSubmitForm()}
        disabled={
          email === '' ||
          nome === '' ||
          celular === '' ||
          (!cultoManha && !cultoNoite)
        }
      >
        Enviar
      </Button>
    </Container>
  );
};
