import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout';
import { Rupiah } from '@/Utils/Currency';
import Button from '@/Components/General/Button';


type Props = {
    Product_add_on: any,
    Product_types: any
}

export default function Testing() {
    const pageInfo: any = usePage().props;
    const { Product_add_on, Product_types } = usePage<Props>().props;



    const [UserCart, setUserCart] = React.useState<any>([])

    useEffect(() => {
        console.log(UserCart);
    }, [UserCart])
    return (
        <AdminLayout>
            <div>
                <div
                    className='bg-accent m-[2rem] p-boxS rounded-xl'
                >
                    <h1>User Cart</h1>
                    <div>
                        {UserCart.map((item: any) => {
                            return (
                                <div key={item.id}>
                                    <h1>{item.name}</h1>
                                    {item.product_add_on.map((item2: any) => {
                                        return (
                                            <div key={item2.id}>
                                                <h1>{item2.name}</h1>
                                                <Money money={item2.price} />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }
                        )}
                        <Button>
                            Submit
                        </Button>
                    </div>
                </div>
                {Product_types.map((item: any) => {
                    return (
                        <div key={item.id}
                            className='bg-secondary m-[2rem] p-boxS'
                        >

                            <h1
                                className='font-bold text-[2rem]'
                            >
                                {item.name}
                            </h1>
                            {item.product_add_on.map((item2: any) => {
                                return (
                                    <div
                                        key={item2.id}
                                        className='flex items-center gap-2'
                                    >
                                        <input type="radio" name="product_type" value={item2.id} />
                                        <label htmlFor="product_type">{item2.name} - <Money money={item2.price} /></label>
                                    </div>
                                )
                            })}
                            <Button
                                onClick={() => {
                                    setUserCart([...UserCart, item])
                                }}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    )
                })}

            </div>
        </AdminLayout>
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



