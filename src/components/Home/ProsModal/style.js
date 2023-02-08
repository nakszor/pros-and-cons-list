import styled from "styled-components";

export const ProsModalStyle = styled.div`
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
    background-color: var(--blue);
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
    background-color: var(--red);
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
    background-color: var(--blue);
    border: solid 2px transparent;
    border-radius: 5px;
    padding-left: 5px;
    height: 20px;
}
input:focus{
    border: solid 2px var(--light-blue);
}
select{
    background-color: var(--blue);
    border: solid 2px transparent;
    border-radius: 5px;
    height: 25px;
    margin-bottom: 13px;
    
    option{
    border-radius: 5px;
    height: 25px;
    }
}
.add-pro-button{
    background-color: var(--blue);
    margin-bottom: 5px;
    border: none;
    height: 25px;
    border-radius: 5px;
}

`