import styled from "styled-components";

export const Cards1 = styled.div`
    /* border: 1px solid blue; */
    border-radius: 1em;
    background: #dee2ff;
    width: 80%;
    height: max-content;
    margin: 0 auto;
    margin-bottom: 1.5em;
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    align-items: center;
    padding:.5em;
    overflow: hidden;
    :nth-child(even){
        flex-direction: row-reverse;
        background: #cbc0d3;
    }
    div:nth-child(1){
        text-align: center;
        width: 50%;
        height: 400px;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: cente
    }
    div:nth-child(2){
        width: 50%;
        text-align: center;
        padding: .5em;
        border-radius:1em;
        line-height:2em;
        h3{
            color: #0077b6;
        }
        a{
        text-decoration: none;
        cursor:pointer;
        padding: 1em 5em;
        background: #0077b6;
        color: white;
        border-radius: 1.8em;
        margin-bottom: 2em;
    }
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
export const DivFoto = styled.div`
    overflow: hidden;
    img{
            height: 100%;
            /* width: 100%; */
            object-fit: cover;
            object-position: center center;
        }
    
`