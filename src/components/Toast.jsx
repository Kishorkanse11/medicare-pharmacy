import { CheckCircle2, X } from 'lucide-react'
export default function Toast({ toast, onClose }) { if (!toast) return null; return <div className="toast" role="status" aria-live="polite"><CheckCircle2 size={19}/><span><b>Added to your bag</b><small>{toast}</small></span><button aria-label="Dismiss notification" onClick={onClose}><X size={16}/></button></div> }
