import { useMemo, useState } from 'react'
export function useCart() {
  const [items, setItems] = useState([])
  const add = (product) => setItems(current => {
    const found = current.find(item => item.id === product.id)
    return found ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]
  })
  const changeQuantity = (id, amount) => setItems(current => current.map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter(item => item.quantity > 0))
  const remove = (id) => setItems(current => current.filter(item => item.id !== id))
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items])
  return { items, add, changeQuantity, remove, count, total }
}
