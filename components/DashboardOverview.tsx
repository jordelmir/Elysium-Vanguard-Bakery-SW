import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle } from 'lucide-react';

const data = [
  { name: 'Lun', sales: 4000, waste: 240 },
  { name: 'Mar', sales: 3000, waste: 139 },
  { name: 'Mie', sales: 2000, waste: 980 }, // Spike in waste
  { name: 'Jue', sales: 2780, waste: 390 },
  { name: 'Vie', sales: 5890, waste: 480 },
  { name: 'Sab', sales: 8390, waste: 380 },
  { name: 'Dom', sales: 7490, waste: 430 },
];

const KPICard = ({ title, value, change, isPositive, icon: Icon }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100 flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        <Icon size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center">
      {change > 0 ? (
        <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp size={16} className="mr-1"/> : <TrendingDown size={16} className="mr-1"/>}
          {Math.abs(change)}%
        </span>
      ) : (
        <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingDown size={16} className="mr-1"/> : <TrendingUp size={16} className="mr-1"/>}
          {Math.abs(change)}%
        </span>
      )}
      <span className="text-sm text-gray-400 ml-2">vs semana anterior</span>
    </div>
  </div>
);

const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Ventas Totales" 
          value="$24,590" 
          change={12.5} 
          isPositive={true} 
          icon={DollarSign} 
        />
        <KPICard 
          title="Costo de Mercancía (COGS)" 
          value="28.4%" 
          change={-2.1} 
          isPositive={true} 
          icon={TrendingDown} 
        />
        <KPICard 
          title="Índice de Mermas" 
          value="3.2%" 
          change={0.8} 
          isPositive={false} 
          icon={AlertTriangle} 
        />
        <KPICard 
          title="Satisfacción Cliente" 
          value="4.9/5" 
          change={0.1} 
          isPositive={true} 
          icon={TrendingUp} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gold-100">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900">Eficiencia de Producción vs. Ventas</h3>
            <p className="text-sm text-gray-500">Monitoreo semanal de ingresos contra desperdicios registrados.</p>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d48d28" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#d48d28" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #f0f0f0' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#d48d28" fillOpacity={1} fill="url(#colorSales)" />
                <Area type="monotone" dataKey="waste" stroke="#ef4444" fill="transparent" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts / Insights */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Alertas Operativas</h3>
          <div className="space-y-4">
            <div className="flex items-start p-3 bg-red-50 rounded-lg border border-red-100">
              <AlertTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-bold text-red-800">Desvío en Inventario: Mantequilla</p>
                <p className="text-xs text-red-600 mt-1">Consumo 15% superior a escandallo en turno PM.</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-amber-50 rounded-lg border border-amber-100">
              <TrendingUp className="text-amber-500 mt-1 mr-3 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-bold text-amber-800">Alta Demanda: Croissant Almendra</p>
                <p className="text-xs text-amber-600 mt-1">Se sugiere aumentar producción +20% para mañana.</p>
              </div>
            </div>
             <div className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-100">
              <DollarSign className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-bold text-blue-800">Pedido Corporativo Confirmado</p>
                <p className="text-xs text-blue-600 mt-1">TechCorp - 500 unidades para Viernes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;