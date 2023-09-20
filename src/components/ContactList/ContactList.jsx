import { StyleBtn } from "./ContactList.styled"


export const ContactList = ({list, onDelete}) => {
    return(
        <div>
            <ul>
                {list.map(contact => (
                    <li key={contact.id}>
                        {contact.name} : { contact.number}
                        <StyleBtn type="button" onClick={() => onDelete(contact.id)}>Delete</StyleBtn>
                    </li>
                ))}
            </ul>
        </div>
    )
}