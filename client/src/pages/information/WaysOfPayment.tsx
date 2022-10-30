import React from 'react'

export default function WaysOfPayment() {
    return (
        <div className="my-8 max-w-3xl m-auto">
            <h1 className="text-3xl font-bold">Способы отплаты</h1>
            <h2 className="text-2xl font-semibold mb-4 mt-2">Оплата для Москвы и Московской области</h2>
            <ul className="list-disc ml-5">
                <li>в Тинькофф Кассе путем выставления счёта на указанный адрес электронной почты. Доступные способы оплаты: банковские карты Visa, Mastercard, МИР, Union Pay; Tinkoff Pay, Yandex Pay, СБП;</li>
                <li>оплата курьеру наличными или банковскими картами в мобильном терминале при получении;</li>
                <li>оплата переводом по реквизитам.</li>
            </ul>
            <h2 className="text-2xl font-semibold my-4">Оплата для России</h2>
            <ul className="list-disc ml-5">
                <li>в Тинькофф Кассе путем выставления счёта на указанный адрес электронной почты. Доступные способы оплаты: банковские карты Visa, Mastercard, МИР, Union Pay; Tinkoff Pay, Yandex Pay, СБП;</li>
                <li>оплата переводом по реквизитам.</li>
            </ul>
        </div>
    )
}
