import React from 'react';
import { 
  Users, 
  Clock, 
  FileText,
  Calendar
} from 'lucide-react';
import { StaffShift } from '../types';

const StaffOperations: React.FC = () => {
  const shifts: StaffShift[] = [
    { id: '1', name: 'Carlos (Maestro Panadero)', role: 'Baker (AM)', start: '03:00', end: '11:00', status: 'Off' },
    { id: '2', name: 'Ana (Ayudante)', role: 'Baker (AM)', start: '04:00', end: '12:00', status: 'Off' },
    { id: '3', name: 'Sofia (Ventas)', role: 'Sales', start: '07:00', end: '15:00', status: 'On Shift' },
    { id: '4', name: 'Miguel (Decorador)', role: 'Decorator', start: '09:00', end: '17:00', status: 'On Shift' },
  ];

  return (
    <div className="space-y-8">
      {/* Shift Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gold-100 p-2 rounded-lg text-gold-700">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Control de Turnos Activos</h3>
              <p className="text-sm text-gray-500">Turno Actual: Mañana (06:00 - 14:00)</p>
            </div>
          </div>
          <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Ver Calendario Completo
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          {shifts.map(shift => (
            <div key={shift.id} className="border border-gray-200 rounded-lg p-4 hover:border-gold-300 transition-colors bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  shift.status === 'On Shift' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'
                }`}>
                  {shift.status}
                </span>
                <span className="text-xs font-mono text-gray-500">{shift.start} - {shift.end}</span>
              </div>
              <p className="font-bold text-gray-900">{shift.name}</p>
              <p className="text-xs text-gray-500">{shift.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Automated Reporting Config */}
      <div className="bg-white rounded-xl shadow-sm border border-gold-200 p-6">
         <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Reportes Ejecutivos (Lunes AM)</h3>
              <p className="text-sm text-gray-500">Configuración de KPIs automáticos enviados al dueño.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center">
                <div className="mr-4 text-gray-400 font-bold text-xl">01</div>
                <div>
                  <h4 className="font-bold text-gray-800">Reporte de Rentabilidad Real</h4>
                  <p className="text-sm text-gray-500">Ventas vs. Costo de Insumos (ERP) vs. Mermas (Desechos).</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Activo</span>
                <span className="text-xs text-gray-400">8:00 AM Lunes</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center">
                <div className="mr-4 text-gray-400 font-bold text-xl">02</div>
                <div>
                  <h4 className="font-bold text-gray-800">Eficiencia de Producción</h4>
                  <p className="text-sm text-gray-500">Comparativo: Unidades planificadas vs. Unidades vendidas vs. Desperdicio.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                 <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Activo</span>
                 <span className="text-xs text-gray-400">8:00 AM Lunes</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center">
                <div className="mr-4 text-gray-400 font-bold text-xl">03</div>
                <div>
                  <h4 className="font-bold text-gray-800">Calidad de Cliente (LTV)</h4>
                  <p className="text-sm text-gray-500">Nuevos clientes recurrentes y retención de VIPs.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                 <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Activo</span>
                 <span className="text-xs text-gray-400">8:00 AM Lunes</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default StaffOperations;