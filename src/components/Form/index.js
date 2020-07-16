import React, { useState, useCallback } from 'react';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import { FiMail, FiUser, FiPhone } from 'react-icons/fi';

import {
  Container,
  DivLabelInput,
  DivInput,
  DivCheckbox,
  Button,
} from './styles';

export default () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [emailIsErrored, setEmailIsErrored] = useState(false);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [celular, setCelular] = useState('');
  const [celularIsFocused, setCelularIsFocused] = useState(false);

  const [horarioCulto, setHorarioCulto] = useState('');

  const handledEmailFocus = useCallback(() => {
    setEmailIsFocused(true);
  }, []);

  const handledEmailBlur = useCallback(() => {
    setEmailIsFocused(false);
    setEmailIsErrored(false);
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
    if (celular.length > 11) {
      const novoCelular = celular.slice(0, 11);
      setCelular(novoCelular);
    }

    setCelularIsFocused(false);
  }, [celular]);

  function handleChangeHorarioCulto(event) {
    const target = event.target;

    if (target.name === 'manha') {
      setHorarioCulto('manha');
    } else {
      setHorarioCulto('noite');
    }
  }

  const handleSubmitForm = event => {
    event.preventDefault();

    const emailValido = validate(email);

    if (!emailValido) {
      alert('Insira um e-mail válido');
      setEmailIsErrored(true);
      return;
    }

    history.push('/finalizacao');
  };

  return (
    <Container>
      <DivLabelInput>
        <label htmlFor="emailInput">
          Endereço de e-mail <span>*</span>{' '}
        </label>
        <DivInput
          isFilled={!!email}
          isFocused={emailIsFocused}
          isErrored={emailIsErrored}
        >
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
            max={99999999999}
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
            type="radio"
            id="cultoManhaInput"
            name="manha"
            checked={horarioCulto === 'manha'}
            onChange={handleChangeHorarioCulto}
          />
          <label htmlFor="cultoManhaInput">
            Manhã, check-in às 9h, início às 10h
          </label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="radio"
            id="cultoNoiteInput"
            name="noite"
            checked={horarioCulto === 'noite'}
            onChange={handleChangeHorarioCulto}
          />
          <label htmlFor="cultoNoiteInput">
            Noite, check-in às 17h, início às 18h
          </label>
        </DivCheckbox>
      </DivLabelInput>

      <Button
        onClick={handleSubmitForm}
        disabled={
          email === '' ||
          nome === '' ||
          celular === '' ||
          celular.length < 8 ||
          horarioCulto === ''
        }
      >
        Enviar
      </Button>
    </Container>
  );
};
