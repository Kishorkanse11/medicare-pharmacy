import { Plus, Droplets, Thermometer, Leaf } from 'lucide-react'
export default function ProductIllustration({ product }) {
  const v = product.visual
  return <div className={`product-visual visual-${product.color}`} role="img" aria-label={`Illustration of ${product.name}`}>
    <div className={`product-object object-${v}`}>
      {(v === 'vitamin' || v === 'vitamin-c') && <><div className="object-cap"/><div className="object-bottle"><div className="object-label"><span className="mini-cross"><Plus size={15}/></span><b>{v === 'vitamin' ? 'daily' : 'C+'}</b><small>{v === 'vitamin' ? 'MULTI' : 'VITAMIN C'}</small><i>{v === 'vitamin' ? '60 TABLETS' : '500 mg'}</i></div></div></>}
      {v === 'cream' && <><div className="cream-cap"/><div className="cream-tube"><div className="cream-label"><Leaf size={17}/><b>soft<br/>care</b><small>HAND CREAM</small></div></div></>}
      {v === 'thermometer' && <><div className="thermo-body"><div className="thermo-screen">98.6</div><div className="thermo-button"/></div><div className="thermo-tip"/></>}
      {v === 'pack' && <><div className="gel-pack"><div className="gel-seam"/><div className="gel-symbol">✳</div><small>REUSABLE<br/>GEL PACK</small></div></>}
      {v === 'hydration' && <><div className="hydration-box"><div className="hydration-top"/><div className="hydration-label"><Droplets size={20}/><b>hydra<br/>daily</b><small>ELECTROLYTES</small><i>10 STICKS</i></div></div><div className="sachet sachet-one"/><div className="sachet sachet-two"/></>}
    </div><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><span className="visual-dot dot-one"/><span className="visual-dot dot-two"/><span className="visual-shadow"/>
  </div>
}
