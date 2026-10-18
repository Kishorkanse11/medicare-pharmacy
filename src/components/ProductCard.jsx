import { ArrowUpRight, Plus, Check } from 'lucide-react'
import { useState } from 'react'
import { formatCurrency } from '../utils/currency'
import ProductIllustration from './ProductIllustration'
export default function ProductCard({ product, onAdd, recentlyAdded }) {
  const [justAdded, setJustAdded] = useState(false)
  const add = () => { onAdd(product); setJustAdded(true); window.setTimeout(() => setJustAdded(false), 1100) }
  return <article className="product-card"><div className="card-image-wrap"><ProductIllustration product={product}/><span className={`product-badge ${product.badge === 'Best Seller' ? 'badge-featured' : ''}`}>{product.badge}</span><button className="quick-view" aria-label={`Add ${product.name} to cart`} onClick={add}><ArrowUpRight size={17}/></button></div><div className="product-info"><div className="product-category">{product.category}<span>{product.pack}</span></div><h3>{product.name}</h3><p className="product-description">{product.description}</p><div className="product-bottom"><div className="price-stack"><strong>{formatCurrency(product.price)}</strong>{product.previousPrice && <><del>{formatCurrency(product.previousPrice)}</del><span className="save-label">Save {Math.round((1 - product.price / product.previousPrice) * 100)}%</span></>}</div><button className={`add-button ${justAdded || recentlyAdded ? 'added' : ''}`} onClick={add} aria-label={`Add ${product.name} to cart`}>{justAdded || recentlyAdded ? <><Check size={16}/><span>Added</span></> : <><Plus size={16}/><span>Add to cart</span></>}</button></div></div></article>
}
