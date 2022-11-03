import React from 'react'

interface IProps {
    w?: number;
    h?: number;
}


export default function Filter({ w = 24, h = 24 }: IProps) {
    return (
        <svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V6.586C3.00006 6.85119 3.10545 7.10551 3.293 7.293L9.707 13.707C9.89455 13.8945 9.99994 14.1488 10 14.414V21L14 17V14.414C14.0001 14.1488 14.1055 13.8945 14.293 13.707L20.707 7.293C20.8946 7.10551 20.9999 6.85119 21 6.586V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}