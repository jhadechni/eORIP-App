import React from "react";
import styled from "styled-components";
import { ContextActions, DataContext } from "../../utils/userContext";

const FromContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  @media (max-width: 908px) {
    min-width: 0rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
`;
// const ContainerWidget = styled.div`
//   background-color: rgb(255, 255, 255);
//   border-radius: 0.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding-top: 1rem;
//   margin-top: 1rem;
//   padding-bottom: 1rem;
//   padding-left: 1.5rem;
//   padding-right: 1.5rem;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
//     rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
// `;

const StyledInput = styled.input`
  outline: 0px;
  background: rgb(242, 242, 242);
  width: 100%;
  border: 1px;
  border-radius: 14px;
  margin: 0px 10px 15px 0px;
  cursor: pointer;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-size: 16px;
  &:focus {
    box-shadow: #4d8ae5 0px 2px 0px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const FormSection = styled.section`
  box-sizing: border-box;
  width: 25rem;
  padding: 20px;
  margin: 20px;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  @media (max-width: 1220px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    margin-top: 10px;
    // border-top-right-radius:  0rem;
    // border-top-left-radius:  0rem;
    // border-bottom-right-radius:  0rem;
    // border-bottom-left-radius:  0rem;
  }
`;

const InputTitle = styled.label`
  box-sizing: border-box;
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  color: rgb(53, 60, 78);
`;

const InputContainerItem = styled.div`
  box-sizing: border-box;
  padding: 5px;
`;

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 5px 10px;
  border-radius: 0.5rem;
  border: none;
  background: rgb(242, 242, 242);
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  outline: none;
  height: 122px;
  padding: 15px 10px;
  resize: none;
  &:focus {
    box-shadow: #4d8ae5 0px 2px 0px;
  }
`;

const Button = styled.button`
  background: linear-gradient(
    305.36deg,
    #226fe1 10.86%,
    rgba(34, 111, 225, 0.4) 93.49%
  );
  color: white;
  border-radius: 10px;
  outline: none;
  border: none;
  height: 42px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    color: #fff;
    text-decoration: none;
  }
`;

const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.875rem;
  float: left;
  padding-bottom: 1em;
`;
const StyledP = styled.p``;
const StyledSelect = styled.select`
  outline: 0px;
  background: rgb(242, 242, 242);
  width: 100%;
  border: 1px;
  border-radius: 14px;
  margin: 0px 10px 15px 0px;
  cursor: pointer;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-size: 16px;
  &:focus {
    box-shadow: #4d8ae5 0px 2px 0px;
  }
`;
const StyledOption = styled.option``;

const CreatePQRForm = () => {
  const { user } = React.useContext(DataContext) as ContextActions;

  return (
    <>
      <FromContainer>
        <StyledContact>
          <StyledP>Formulario para Crear PQRSD.</StyledP>
        </StyledContact>
        <StyledForm action="">
          <FormSection>
            <InputContainerItem>
              <InputTitle>Tipo*</InputTitle>
              <StyledSelect id="tipoSelect" required>
                <StyledOption value="" selected disabled hidden>
                  Selecciona un Tipo
                </StyledOption>
                <StyledOption value="peticion">Petición</StyledOption>
                <StyledOption value="queja">Queja</StyledOption>
                <StyledOption value="reclamo">Reclamo</StyledOption>
                <StyledOption value="denuncia">Denuncia</StyledOption>
                <StyledOption value="sugerencia">Sugerencia</StyledOption>
              </StyledSelect>
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Nombre y apellido*</InputTitle>

              <StyledInput
                type="text"
                placeholder="Ingresa Nombre & Apellido "
                required
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Telefono (opcional)</InputTitle>

              <StyledInput type="tel" placeholder="Ingresa el Telefono" />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Dirección*</InputTitle>

              <StyledInput
                type="text"
                placeholder="Ingresa la Dirección"
                required
              />
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Correo electronico*</InputTitle>

              <StyledInput
                type="text"
                placeholder="Ingresa tu Email"
                required
              />
            </InputContainerItem>
          </FormSection>
          <FormSection>
            <InputContainerItem>
              <InputTitle>Sitio de Aplicación*</InputTitle>
              <StyledSelect id="applicationSelect" required>
                <StyledOption value="" selected disabled hidden>
                  Selecciona el sitio de Aplicación
                </StyledOption>
                <StyledOption value="oficina de instrumentos publicos">
                  Oficina de instrumentos públicos
                </StyledOption>
                <StyledOption value="notaria">Notaria</StyledOption>
                <StyledOption value="Curaduria">Curaduria</StyledOption>
                <StyledOption value="gestor catastral">
                  Gestor Catastral
                </StyledOption>
              </StyledSelect>
            </InputContainerItem>

            <InputContainerItem>
              <InputTitle>Descripción*</InputTitle>
              <StyledTextarea
                name="descripción"
                id=""
                placeholder="Ingresa una descripción"
              />
            </InputContainerItem>
            <Button>Registrar PQRSD</Button>
          </FormSection>
        </StyledForm>
      </FromContainer>
    </>
  );
};

export default CreatePQRForm;
