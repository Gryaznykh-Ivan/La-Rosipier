import React from 'react'

interface IProps {
    w?: number;
    h?: number;
}

export default function Cross({ w = 24, h = 24 }: IProps) {
    return <svg width={ w } height={ h } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4854 1.48535L11.9854 11.9854M11.9854 11.9854L1.48535 22.4854M11.9854 11.9854L22.4854 22.4854M11.9854 11.9854L1.48535 1.48535" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>



}
