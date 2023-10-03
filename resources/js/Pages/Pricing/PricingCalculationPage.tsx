import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout';
import { Rupiah } from '@/Utils/Currency';
import Button from '@/Components/General/Button';
import Guest from '@/Layouts/GuestLayout';
import ProductPricingCard from './Components/ProductPricingCard';


type Props = {
    Product_add_on: any,
    Product_types: any
}

export const CartContext = React.createContext<any>(null);

export default function Testing() {
    const pageInfo: any = usePage().props;
    const { Product_add_on, Product_types } = usePage<Props>().props;
    const [UserCart, setUserCart] = React.useState<any>([])

    // context for cart

    useEffect(() => {
        console.log('UserCart:')
        console.log(UserCart);
    }, [UserCart])
    return (
        <Guest
            footer={false}
        >
            <CartContext.Provider value={{ UserCart, setUserCart }}>
                <div>
                    <div
                        className='fixed rounded-3xl left-0 bottom-4 w-full flex flex-col gap-2 z-30'
                    >
                        {/* {UserCart.map((item: any) => {
                                return (
                                    <div
                                        key={item.id}
                                        className='bg-primaryBlack text-white opacity-40 p-boxS rounded-xl'
                                    >
                                        <h1 className='font-bold'>{item.name}</h1>
                                        {item.product_add_on.map((item2: any) => {
                                            return (
                                                <div key={item2.id}>
                                                    <h1>{item2.name}</h1>
                                                    <h2>Total : <Money money={item2.price} /></h2>
                                                </div>
                                            )
                                        })}
                                        <div>
                                            <h1>Total Size: {item.totalSize} meter kubik</h1>
                                        </div>
                                        <div>
                                            <h1>
                                                Total Price: <Money money={item.product_add_on[0].price * item.totalSize} />
                                            </h1>
                                        </div>
                                    </div>
                                )
                            }
                            )} */}
                        <Button>
                            Total Price: <Money money={UserCart.reduce((acc: any, item: any) => {
                                return acc + (item.product_add_on[0].price * item.totalSize)
                            }
                                , 0)} />
                        </Button>
                    </div>
                    <div
                        className='w-full overflow-hidden p-boxS flex flex-col gap-2 relative'
                    >
                        {Product_types.map((item: any) => {
                            return (
                                <ProductPricingCard
                                    id={item.id}
                                    name={item.name}
                                    product_add_on={item.product_add_on}
                                    key={item.id}
                                />
                            )
                        })}
                    </div>
                </div>
            </CartContext.Provider>
        </Guest>
    )
}


const Money = ({ money }: { money: number }) => {
    const reverse = money.toString().split('').reverse().join('');
    const ribuan = reverse.match(/\d{1,3}/g);
    let rupiah = ribuan?.join('.').split('').reverse().join('');
    // add Rp to the front
    rupiah = `Rp${ribuan?.join('.').split('').reverse().join('')}`
    return rupiah
}



