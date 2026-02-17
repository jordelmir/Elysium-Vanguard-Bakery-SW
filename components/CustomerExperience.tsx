import React from 'react';
import { 
  ShoppingBag, 
  Star, 
  Smartphone, 
  Mail,
  Gift
} from 'lucide-react';

const CustomerExperience: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Omnichannel Integration Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShoppingBag size={100} />
          </div>
          <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider">POS Físico</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">Activo</p>
          <p className="text-sm text-green-600 mt-2 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Sincronizado hace 2s
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Smartphone size={100} />
          </div>
          <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider">App / Web Delivery</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">12 Pedidos</p>
          <p className="text-sm text-gold-600 mt-2 font-medium">
            Pendientes de preparación
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gold-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Star size={100} />
          </div>
          <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider">Club Fidelidad</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">856 Miembros</p>
          <p className="text-sm text-gray-500 mt-2">
            +12 esta semana
          </p>
        </div>
      </div>

      {/* CRM Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Segmento VIP: "Amantes del Pan"</h3>
            <button className="text-gold-600 text-sm font-bold hover:underline">Ver Todos</button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 font-bold">
                    {i === 1 ? 'JD' : i === 2 ? 'MR' : 'SL'}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Juan Diego {i}</p>
                    <p className="text-xs text-gray-500">Última visita: Hace 2 días</p>
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-xs font-medium text-gold-600">Favorito: Baguette</p>
                   <p className="text-xs text-gray-400">Gasto Mes: $120</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-700 mb-3">Acciones Rápidas</h4>
            <div className="flex space-x-3">
              <button className="flex-1 bg-gold-50 text-gold-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gold-100 border border-gold-200 flex items-center justify-center">
                <Mail size={16} className="mr-2"/> Email "Pan Caliente"
              </button>
              <button className="flex-1 bg-gold-50 text-gold-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gold-100 border border-gold-200 flex items-center justify-center">
                <Gift size={16} className="mr-2"/> Promo Cumpleaños
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-serif font-bold mb-2">Campaña "Recién Horneado"</h3>
            <p className="text-slate-300 text-sm mb-6">
              El sistema detecta cuando sale una tanda de Baguettes del horno (Sensor #4) y envía automáticamente notificaciones push a clientes cercanos.
            </p>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400">ESTADO TRIGGER</span>
                <span className="text-xs font-bold text-green-400 bg-green-900/30 px-2 py-1 rounded">ACTIVO</span>
              </div>
              <p className="text-sm font-mono text-slate-200">
                IF (Horno_4.status == 'Cycle_End' AND Product == 'Baguette') <br/>
                THEN CRM.SendPush(Segment='Local_Walkers')
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-10 translate-y-10">
            <Smartphone size={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;