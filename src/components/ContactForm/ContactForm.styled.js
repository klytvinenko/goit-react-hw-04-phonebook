import {styled} from 'styled-components';
import {Form, ErrorMessage} from 'formik';

export const StyledForm = styled(Form)`
    width: 350px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
 export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
 `

 export const ErrorMsg = styled(ErrorMessage)`
    font-size: 14px;
    color: red;
 `

