import styled from "styled-components";

export const ModalStyle = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1040;
background: rgba(0,0,0,0.8);
display: flex;
align-items: center;
justify-content: center;
.modal-content{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:  ${props => props.name === 'con' ?'#F78181': '#819FF7'};
    padding: 15px;
    border-radius: 8px;
    gap: 1rem;
}
.modal-header{
   background-color: var(--light-yellow);
   border-radius: 8px;
   padding: 6px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    button{
    background-color: ${props => props.name === 'con' ?'#F78181': '#819FF7'};
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 6px;
}
}
form{
    display: flex;
    flex-direction: column;
    padding: 6px;
    width: 90%;
    border-radius: 8px;
    background-color: var(--light-yellow);
}
label{
    font-weight: 600;
    margin-top: 7px;
    text-align: center;
}
input{
    background-color: ${props => (props.name == 'con' ?'#F78181': '#819FF7')};
    border: solid 2px transparent;
    border-radius: 5px;
    padding-left: 5px;
    height: 20px;
}
input:focus{
    border: solid 2px var(--light-blue);
    font-family: 'Gochi Hand', cursive;
    font-weight: 600;
    font-size: 15px;
}
select{
    background-color:${props => (props.name == 'con' ?'#F78181': '#819FF7')};;
    border: solid 2px transparent;
    border-radius: 5px;
    height: 25px;
    margin-bottom: 13px;
    font-family: 'Gochi Hand', cursive;
    font-weight: 600;
    font-size: 15px;
    
    option{
    border-radius: 5px;
    height: 25px;
    font-family: 'Gochi Hand', cursive;
    font-weight: 600;
    font-size: 15px;
    }
}
.add-data-button{
    background-color: ${props => (props.name == 'con' ?'#F78181': '#819FF7')};;
    margin-bottom: 5px;
    border: none;
    height: 25px;
    border-radius: 5px;
    font-family: 'Gochi Hand', cursive;
    font-weight: 600;
    font-size: 15px;
}
.error-message{
    color: red;
    text-align: center;
}
`