import { useCallback, useMemo, useState } from 'react'
import { products, categories } from './data/products'
import { useCart } from './hooks/useCart'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryFilter from './components/CategoryFilter'
import CatalogToolbar from './components/CatalogToolbar'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Toast from './components/Toast'
import Footer from './components/Footer'
import './index.css'
export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [sort, setSort] = useState('featured')
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [recentlyAdded, setRecentlyAdded] = useState(null)
  const cart = useCart()
  const categoryCounts = useMemo(() => Object.fromEntries(categories.map(category => [category, category === 'All Products' ? products.length : products.filter(product => product.category === category).length])), [])
  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    const filtered = products.filter(product => (activeCategory === 'All Products' || product.category === activeCategory) && (!query || `${product.name} ${product.category} ${product.description} ${product.badge}`.toLowerCase().includes(query)))
    if (sort === 'low') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'high') return [...filtered].sort((a, b) => b.price - a.price)
    return filtered
  }, [search, activeCategory, sort])
  const closeCart = useCallback(() => setCartOpen(false), [])
  const addToCart = useCallback(product => { cart.add(product); setRecentlyAdded(product.id); setToast(product.name); window.setTimeout(() => setToast(null), 2600); window.setTimeout(() => setRecentlyAdded(null), 1200) }, [cart.add])
  const resetFilters = () => { setSearch(''); setActiveCategory('All Products'); setSort('featured') }
  const scrollToCatalog = () => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
  return <><AnnouncementBar/><Header search={search} setSearch={setSearch} cartCount={cart.count} openCart={() => setCartOpen(true)} setCategory={setActiveCategory}/><main><HeroSection onShop={scrollToCatalog} onCategories={() => {scrollToCatalog(); document.getElementById('category-filter')?.focus()}}/><section className="catalog-section" id="catalog"><div className="shell"><div className="category-heading"><span className="section-kicker">FIND YOUR EVERYDAY</span><h2>Shop by category</h2></div><div id="category-filter" tabIndex={-1}><CategoryFilter categories={categories} active={activeCategory} setActive={setActiveCategory} counts={categoryCounts}/></div><CatalogToolbar count={visibleProducts.length} sort={sort} setSort={setSort} activeCategory={activeCategory}/><ProductGrid products={visibleProducts} onAdd={addToCart} recentlyAdded={recentlyAdded} resetFilters={resetFilters}/><div className="catalog-note"><span className="note-plus">+</span><span>Made for your everyday routine.</span><i/> <span>Mock product listings for demonstration only.</span></div></div></section></main><Footer setCategory={setActiveCategory}/><CartDrawer open={cartOpen} onClose={closeCart} items={cart.items} count={cart.count} total={cart.total} changeQuantity={cart.changeQuantity} remove={cart.remove}/><Toast toast={toast} onClose={() => setToast(null)}/></>
}
