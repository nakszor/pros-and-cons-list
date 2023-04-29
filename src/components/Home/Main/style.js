import styled from "styled-components";

export const HomeMainStyle = styled.main`
height: 95%;
width: 90%;
border-radius: 8px;
background-color: #F2F5A9;
display: flex;
justify-content: space-evenly;

.bar{
    width: 1px;
    height: 100%;
    background-color: #000;
}
.pros{
   width: 50%;
}
.cons{
    width: 50%;
    display: flex;
}
.cons-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.cons-header{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.title-button{
    display: flex;
    justify-content: space-between;
    width: 98%;
    align-items: center;
}
.margin{
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
li{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
}
.empty{
    min-height: 20vh;
}
.bar2{
    width: 100%;
    height: 1px;
    background-color: black;
}
.pros-list{
    height: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: blue;
}
 .cons-list{
    height: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: red;
 }

 .total{
     display: flex;
     justify-content: space-between;
     padding: 8px 8px;
     background-color: ${props => (props.value <= 0 ?'#F78181': '#819FF7')};
     border-radius: 10px;
     color: white;
     height: 1rem;
 }
 .add-con{
    background-color: #F78181;
    color: white;
    border: none;
    border-radius: 8px;
    height: 20px;
    width:20px;
 }
 .add-pro{
    background-color: #819FF7;
    color: white;
    border: none;
    border-radius: 8px;
    height: 20px;
    width:20px;
 }
 .cons-list{
    max-height: 70vh;
    overflow-y: scroll;
}
.pros-list{
    max-height: 70vh;
    overflow-y: scroll;
}


 @media (max-width:550px){
    flex-direction: column;
   justify-content: unset;
   .pros{
    width: 100%;
    height: 50%;
   }
   .cons{
    width: 100%;
    height: 50%;
    flex-direction: column;
   }
   .bar{
    width: 100%;
    height: 1px;
   }
   .bar2{
    width: 100%;
    height: 1px;
   }
   .height{
    height: 1px;
   }
   .cons-container{
    height: 100%;
    width: 100%;
   }
   .cons-list{
    max-height: 30vh;
    overflow-y: scroll;
   }
   .pros-list{
    max-height: 30vh;
    overflow-y: scroll;
   }
   
 }
 
`