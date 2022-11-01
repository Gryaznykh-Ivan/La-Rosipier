import React from 'react'

import SaleUpTo30Precent from '../components/banners/SaleUpTo30Precent'
import CollectionPreview from '../components/collections/CollectionPreview'

export default function Index() {
    return (
        <div className="">
            <SaleUpTo30Precent />
            <CollectionPreview
                title="Новые поступления SS'22"
                collectionId="123"
            />
            <CollectionPreview
                title="Встречаем Хэллоуин 2022 вместе с Sortage"
                collectionId="123"
            />
            <CollectionPreview
                title="Air Jordan 1 Mid"
                collectionId="123"
            />
        </div>
    )
}
