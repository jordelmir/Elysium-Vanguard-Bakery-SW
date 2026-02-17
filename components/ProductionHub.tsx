import React, { useState, useEffect } from 'react';
import { 
  Thermometer, 
  Droplets, 
  ClipboardList, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Scale
} from 'lucide-react';
import { SensorData, WorkOrder } from '../types';

const ProductionHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monitor' | 'orders' | 'recipes'>('monitor');

  // Simulated live data
  const [sensors, setSensors] = useState<SensorData[]>([
    { id: '1', name: 'Horno Principal 1', temp: 210, humidity: 15, status: 'optimal', targetTemp: 210 },
    { id: '2', name: 'Horno Principal 2', temp: 195, humidity: 15, status: 'warning', targetTemp: 220 }, // Under temp
    { id: '3', name: 'Fermentadora A', temp: 28, humidity: 85, status: 'optimal', targetTemp: 28 },
    { id: '4', name: 'Cámara Frigorífica', temp: 3, humidity: 40, status: 'optimal', targetTemp: 4 },
  ]);

  const [workOrders] = useState<WorkOrder[]>([
    { id: 'WO-2024-001', client: 'Boda García-López', type: 'Wedding', dueDate: '2023-10-25 14:00', status: 'In Progress', items: ['Pastel 5 pisos (Vainilla/Frambuesa)', '200 Macarons'] },
    { id: 'WO-2024-002', client: 'Hotel Ritz Desayunos', type: 'Corporate', dueDate: '2023-10-26 06:00', status: 'Pending', items: ['400 Croissants', '200 Pan au Chocolat'] },
  ]);

  // Simulate environmental fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prev => prev.map(s => ({
        ...s,
        temp: s.temp + (Math.random() > 0.5 ? 0.5 : -0.5)
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('monitor')}
          className={`pb-4 px-6 font-medium text-sm transition-colors ${activeTab === 'monitor' ? 'border-b-2 border-gold-600 text-gold-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Control Ambiental (IoT)
        </button>
        <button 
          onClick={() => setActiveTab('orders')}
          className={`pb-4 px-6 font-medium text-sm transition-colors ${activeTab === 'orders' ? 'border-b-2 border-gold-600 text-gold-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Órdenes de Trabajo
        </button>
        <button 
          onClick={() => setActiveTab('recipes')}
          className={`pb-4 px-6 font-medium text-sm transition-colors ${activeTab === 'recipes' ? 'border-b-2 border-gold-600 text-gold-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Recetas & Escandallos (ERP)
        </button>
      </div>

      {/* Content */}
      {activeTab === 'monitor' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sensors.map(sensor => (
            <div key={sensor.id} className={`bg-white rounded-xl shadow-sm border p-6 ${sensor.status === 'warning' ? 'border-amber-400 ring-1 ring-amber-100' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-gray-700">{sensor.name}</h4>
                <div className={`w-3 h-3 rounded-full ${sensor.status === 'optimal' ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`}></div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-gray-900">
                  <Thermometer className="mr-2 text-gold-600" size={24} />
                  <span className="text-3xl font-mono font-bold">{sensor.temp.toFixed(1)}°C</span>
                </div>
                <span className="text-xs text-gray-400">Meta: {sensor.targetTemp}°C</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Droplets className="mr-2 text-blue-400" size={20} />
                <span className="text-lg font-mono">{sensor.humidity}% HR</span>
              </div>

              {sensor.status === 'warning' && (
                <div className="mt-4 p-2 bg-amber-50 text-amber-800 text-xs rounded border border-amber-200">
                  ⚠️ Desviación detectada. Ajustando inyectores.
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="space-y-4">
          {workOrders.map(order => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                    order.type === 'Wedding' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {order.type}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900">{order.client}</h3>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock size={14} className="mr-1" />
                  Entrega: {order.dueDate}
                </div>
                <div className="flex flex-wrap gap-2">
                  {order.items.map((item, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{item}</span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-2">
                    <span className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                        <span className={`block h-full ${order.status === 'Ready' ? 'bg-green-500 w-full' : 'bg-gold-500 w-1/2'}`}></span>
                    </span>
                    <span className="text-sm font-medium text-gray-700">{order.status}</span>
                </div>
                <button className="text-sm text-gold-600 font-medium hover:underline">Ver Detalle / Escandallo</button>
              </div>
            </div>
          ))}
          <button className="w-full py-3 border-2 border-dashed border-gray-300 text-gray-500 rounded-xl hover:bg-gray-50 hover:border-gold-300 transition-colors flex items-center justify-center">
            + Nueva Orden Especial
          </button>
        </div>
      )}

      {activeTab === 'recipes' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="text-gold-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Gestión de Escandallos (ERP)</h3>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Configuración centralizada de recetas. El sistema descuenta automáticamente del inventario cada gramo de harina y mantequilla al iniciar una Orden de Trabajo.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-4 border rounded-lg hover:border-gold-500 cursor-pointer transition-colors">
              <h5 className="font-bold text-gray-800">Croissant de Mantequilla</h5>
              <p className="text-xs text-gray-500 mt-1">Costo Prod: $0.45 / u</p>
              <div className="mt-2 flex items-center text-xs text-green-600">
                <Scale size={12} className="mr-1" /> Inventario OK
              </div>
            </div>
            <div className="p-4 border rounded-lg hover:border-gold-500 cursor-pointer transition-colors">
              <h5 className="font-bold text-gray-800">Sourdough Hogaza</h5>
              <p className="text-xs text-gray-500 mt-1">Costo Prod: $1.20 / u</p>
              <div className="mt-2 flex items-center text-xs text-green-600">
                <Scale size={12} className="mr-1" /> Inventario OK
              </div>
            </div>
            <div className="p-4 border rounded-lg border-red-200 bg-red-50 cursor-pointer transition-colors">
              <h5 className="font-bold text-red-900">Macarons Frambuesa</h5>
              <p className="text-xs text-red-700 mt-1">Costo Prod: $0.30 / u</p>
              <div className="mt-2 flex items-center text-xs text-red-600 font-bold">
                <Scale size={12} className="mr-1" /> Falta Harina Almendra
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductionHub;