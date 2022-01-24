import React from "react";
import { useState } from "react/cjs/react.development";

import SHOP_DATA from "./shopData";

import CollectionPreview from "../../components/collectionPreview/collectionPreview";

const ShopPage = () => {

    const [shopData, setshopData] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {
                shopData.map(({id, ...otherShopDataProps }) => {
                    return (
                        <CollectionPreview key={id} {...otherShopDataProps} />
                    )
                })
            }
        </div>
    );
}

export default ShopPage;