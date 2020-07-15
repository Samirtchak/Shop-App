import  React from "react";
import {ScrollView} from "react-native"
import {Text} from "react-native"
import {useSelector} from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'




const ProductOverviewScreen = ()  => {
    const products = useSelector(state => state.products.availableProducts)
    return (
        <ScrollView>
            {products.map(prod => 
           <ProductItem key={prod.id} image={prod.imageUrl} title={prod.title} price={prod.price} onViewDetail={() => {}} onAddToCart={() =>{}}/>)}
        </ScrollView>
       
    )
}

export default ProductOverviewScreen