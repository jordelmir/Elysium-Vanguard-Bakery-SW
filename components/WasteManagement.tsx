import React, { useState } from 'react';
import { 
  Trash2, 
  ArrowRight, 
  RefreshCcw,
  PieChart
} from 'lucide-react';
import { WasteEntry } from '../types';

const WasteManagement: React.FC = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('Stale');
  
  const [history] = useState<WasteEntry[]>([
    { id: '1', product: 'Croissant', quantity: 12, unit: 'u', reason: 'Stale', timestamp: 'Hoy, 10:00 AM', costImpact: 5.40 },
    { id: '2', product: 'Pan Campesino', quantity: 3, unit: 'u', reason: 'Burnt', timestamp: 'Hoy, 06:30 AM', costImpact: 4.50 },
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Waste Logging Form */}
      <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gold-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-red-100 text-red-600 rounded-lg">
            <Trash2 size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Registrar Merma</h3>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Producto</label>
            <select 
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-gold-500 focus:border-gold-500 border p-2"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="">Seleccionar...</option>
              <option value="croissant">Croissant</option>
              <option value="baguette">Baguette Tradicional</option>
              <option value="cake">Pastel de Chocolate</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
              <input 
                type="number" 
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-gold-500 focus:border-gold-500 border p-2"
                placeholder="0"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unidad</label>
              <input type="text" disabled value="Unidades" className="w-full bg-gray-100 border-gray-300 rounded-lg border p-2 text-gray-500"/>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Causa</label>
            <div className="grid grid-cols-2 gap-2">
              {['Quemado', 'Duro/Viejo', 'Defecto Forma', 'Caída'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setReason(r)}
                  className={`text-xs py-2 px-3 rounded-md border ${
                    reason === r 
                    ? 'bg-red-50 border-red-200 text-red-700 font-bold' 
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all flex justify-center items-center">
              Registrar Pérdida
            </button>
            <p className="text-xs text-center text-gray-400 mt-2">
              Esta acción descontará inventario y actualizará el reporte financiero.
            </p>
          </div>
        </form>
      </div>

      {/* Analysis & Smart Adjustment */}
      <div className="lg:col-span-2 space-y-6">
        {/* The Solution: Automated Feedback Loop */}
        <div className="bg-gradient-to-br from-gold-50 to-white p-6 rounded-xl border border-gold-200">
          <div className="flex items-center space-x-2 mb-4 text-gold-800">
            <RefreshCcw size={20} />
            <h3 className="font-bold">Ajuste Inteligente de Producción (Smart Batching)</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-2">
                Basado en las mermas de <strong>Croissants</strong> de los últimos 3 martes:
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-gray-400 line-through">150u</span>
                  <span className="text-xs text-gray-500">Plan Original</span>
                </div>
                <ArrowRight className="text-gold-500" />
                <div className="text-center">
                  <span className="block text-3xl font-bold text-green-600">132u</span>
                  <span className="text-xs text-green-600 font-bold">Plan Sugerido (-12%)</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-2 bg-white border border-gold-300 text-gold-700 font-bold rounded-lg hover:bg-gold-50 shadow-sm">
              Aplicar a Orden de Mañana
            </button>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Registro Diario</h3>
            <span className="text-sm text-red-600 font-medium font-mono">Total Impacto: -$9.90</span>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-3">Hora</th>
                <th className="px-6 py-3">Producto</th>
                <th className="px-6 py-3">Causa</th>
                <th className="px-6 py-3 text-right">Costo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-500">{item.timestamp}</td>
                  <td className="px-6 py-3 font-medium text-gray-900">
                    {item.quantity}{item.unit} x {item.product}
                  </td>
                  <td className="px-6 py-3">
                    <span className="bg-red-50 text-red-700 px-2 py-1 rounded-full text-xs border border-red-100">
                      {item.reason}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right font-mono text-gray-700">
                    -${item.costImpact.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;