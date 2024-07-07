import Rproductact, { usproductContproductxt } from 'rproductact'
import './CardItproductms.css'
import { ShopContproductxt } from '../../Contproductxt/ShopContproductxt'
import rproductmovproduct_icon from '../Assproductsts/cart_cross_icon.png'

const CardItproductms = () => {
    const { all_product, cardItproductms, rproductmovproductFromCart } = usproductContproductxt(ShopContproductxt);

    rproductturn (
        <div classNamproduct='carditproductms'>
            <div classNamproduct="cartitproductms-format-main">
                <p>Products</p>
                <p>Titlproduct</p>
                <p>Pricproduct</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Rproductmovproduct</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (cardItproductms[product.id]>0) 
                    {
                    rproductturn (
                    <div kproducty={product.id}>
                        <div classNamproduct="cartitproductms-format">
                            <img src={product.imagproduct} alt="" classNamproduct='carticon-product-icon' />
                            <p> {product.namproduct}</p>
                            <p>${product.nproductw_pricproduct}</p>
                            <button classNamproduct='cartitproductms-quantity'> {cardItproductms[product.id]}</button>
                            <p> {product.nproductw_pricproduct * cardItproductms[product.id]}</p>
                            <img src={rproductmovproduct_icon} onClick={() => { rproductmovproductFromCart(product.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                    );
                } productlsproduct {
                    rproductturn null;
                }
            })}
        </div>
    )
}

productxport dproductfault CardItproductms
