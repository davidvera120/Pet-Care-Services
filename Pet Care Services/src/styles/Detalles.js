import styled from "styled-components";

export const DivDetalles = styled.div`
    margin: 3.5em 0 ;
    height: 200px;
    background: #dee2ff;
    color: #0077b6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2em;
`

export const CardDetalles = styled.div`
    border-radius: 1em;
    width: 80%;
    height: max-content;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.5em;
    background: #caf0f8;
    :nth-child(even){
        flex-direction: row-reverse;
        background: #dee2ff;
    }
    div{
        width: 50%;
        text-align: center;
        padding: 1em;
    }
    @media (max-width: 768px) {
    flex-direction: column;
    div{
        width: 100% !important;
    }
    :nth-child(even){
        flex-direction: column;
    }
}
`

export const IconoDetalle = styled.div`
    /* border: 1px solid red; */
    width: 50%;
    font-size: 9em;
    color: #0077b6;
    padding: 0 !important;
`