import styled from 'styled-components';

const AddUserModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

const AddUserModalBox = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

  animation: fadeSlideIn 0.3s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 20px 20px 0 0;
    max-height: 90vh;
    overflow-y: auto;
    animation: bottomSheetSlideIn 0.4s ease-out;
    max-width: unset;

    & > button {
      width: 100%;
    }
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes bottomSheetSlideIn {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AddUserModalFormItem = styled.div`
  margin-bottom: 10px;
`;

const AddUserModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
`;

const AddUserModalInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background-color: #f9fafb;
  padding-left: 8px;
  color: #222;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--color-button-bg);
    background-color: #ffffff;
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
    font-style: italic;
  }
`;

const AddUserModalErrorMessage = styled.small`
  color: crimson;
  font-size: 0.85rem;
  margin-top: 4px;
  display: block;
`;

const AddUserModalLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const AddUserModalSelect = styled.select`
  width: 100%;
  margin-bottom: 16px;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background-color: #f9fafb;

  &:focus {
    border-color: var(--color-button-bg);
    background-color: white;
    outline: none;
  }
`;

const AddUserModalCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  color: #374151;
  max-width: max-content;
  cursor: pointer;

  input {
    width: 16px;
    height: 16px;
    accent-color: var(--color-button-bg);
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export {
  AddUserModalOverlay as Overlay,
  AddUserModalBox as Box,
  AddUserModalFormItem as FormItem,
  AddUserModalTitle as Title,
  AddUserModalInput as Input,
  AddUserModalErrorMessage as ErrorMessage,
  AddUserModalLabel as Label,
  AddUserModalSelect as Select,
  AddUserModalCheckboxWrapper as CheckboxWrapper,
};
