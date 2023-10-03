import Button from '@/Components/General/Button'
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../PricingCalculationPage';
import Input from '@/Components/General/Input';
import InputLabel from '@/Components/InputLabel';


type Props = {
  id: number,
  name: string,
  product_add_on: any[]
}



export default function ProductPricingCard({ ...props }: Props) {
  const [value, setValue]: any = useState();


  // context for cart
  const Cart = useContext<any>(CartContext);

  const [size, setSize] = useState({
    width: 0,
    length: 0,
    height: 0,
  })
  const [totalSize, setTotalSize] = useState(0)
  useEffect(() => {
    const total = size.width * size.length * size.height
    setTotalSize(total)
    console.log(totalSize)
    console.log(size)
  }, [size])

  const handleSizeChange = (e: any) => {
    const { name, value } = e.target
    setSize((prev: any) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }



  const handleAddToCart = () => {
    const cart = {
      id: props.id,
      name: props.name,
      totalSize: totalSize,
      product_add_on: props.product_add_on.filter((item: any) => {
        return item.id == value
      })
    }
    Cart.setUserCart((prev: any) => [...prev, cart])
    handleCloseModal()
  }


  // Modal State
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <button
        className='w-full p-boxS flex flex-col gap-2 rounded-xl bg-accent hover:bg-opacity-50 font-bold'
        onClick={handleOpenModal}
      >
        {props.name}
      </button>
      <div
        onClick={handleCloseModal}
        className={`fixed top-0 left-0 w-full h-full bg-primaryBlack z-50 bg-opacity-70 justify-center items-center
        ${openModal ? 'flex' : 'hidden'}
        `}
      >
        <div
          key={props.id}
          onClick={(e) => {
            e.stopPropagation()
          }}
          className='bg-secondary p-boxS flex flex-col gap-2 rounded-xl'
        >
          <h1
            className='font-bold text-[2rem]'
          >
            {props.name}
          </h1>
          <div>
            <div className='flex gap-[1rem] justify-center items-center font-bold'>
              <Input id='width' type="number" placeholder='Lebar' onChange={handleSizeChange} />
              X
              <Input id='length' type="number" placeholder='Panjang' onChange={handleSizeChange} />
              X
              <Input id='height' type="number" placeholder='Tinggi' onChange={handleSizeChange} />
            </div>
            {totalSize} meter kubik
          </div>
          {props.product_add_on.map((item2: any) => {
            return (
              <div
                key={item2.id}
                className='flex items-center gap-2'
              >
                <label htmlFor="product_type" className='flex gap-[0.6rem] justify-center items-center'>
                  <input
                    onChange={(e) => {
                      setValue(e.target.value)
                    }}
                    type="radio" name="product_type" value={item2.id} />
                  {item2.name} - <Money money={item2.price} /></label>
              </div>
            )
          })}
          <Button
            onClick={handleAddToCart}
            disabled={!value || !size.height || !size.length || !size.width}
          >
            Add to Cart : {<Money money={props.product_add_on.filter((item: any) => {
              return item.id == value
            })[0]?.price * totalSize} />}
          </Button>
        </div>
      </div>
    </>
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

