import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ChefHat, 
  Trash2, 
  Users, 
  Clock, 
  Menu,
  Settings,
  Bell
} from 'lucide-react';
import { ViewState } from './types';
import DashboardOverview from './components/DashboardOverview';
import ProductionHub from './components/ProductionHub';
import WasteManagement from './components/WasteManagement';
import CustomerExperience from './components/CustomerExperience';
import StaffOperations from './components/StaffOperations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <DashboardOverview />;
      case ViewState.PRODUCTION:
        return <ProductionHub />;
      case ViewState.WASTE:
        return <WasteManagement />;
      case ViewState.CUSTOMERS:
        return <CustomerExperience />;
      case ViewState.STAFF:
        return <StaffOperations />;
      default:
        return <DashboardOverview />;
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        currentView === view
          ? 'bg-gold-500 text-white shadow-md'
          : 'text-gold-900 hover:bg-gold-200'
      }`}
    >
      <Icon size={20} />
      {isSidebarOpen && <span className="font-medium">{label}</span>}
    </button>
  );

  return (
    <div className="min-h-screen bg-gold-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-gold-200 flex flex-col transition-all duration-300 relative z-10`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gold-100">
          {isSidebarOpen ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-serif text-xl font-bold text-gold-900">World-Class</span>
            </div>
          ) : (
             <div className="w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold mx-auto">W</div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gold-500 hover:text-gold-700">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavItem view={ViewState.DASHBOARD} icon={LayoutDashboard} label="Panel Principal" />
          <NavItem view={ViewState.PRODUCTION} icon={ChefHat} label="Producción & IoT" />
          <NavItem view={ViewState.WASTE} icon={Trash2} label="Control de Mermas" />
          <NavItem view={ViewState.CUSTOMERS} icon={Users} label="Clientes & CRM" />
          <NavItem view={ViewState.STAFF} icon={Clock} label="Personal & Turnos" />
        </nav>

        <div className="p-4 border-t border-gold-100">
          <div className={`flex items-center ${isSidebarOpen ? 'space-x-3' : 'justify-center'}`}>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://picsum.photos/100/100" alt="Admin" />
            </div>
            {isSidebarOpen && (
              <div>
                <p className="text-sm font-bold text-gray-800">Admin</p>
                <p className="text-xs text-gray-500">CTO / Owner</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden h-screen">
        {/* Top Header */}
        <header className="bg-white border-b border-gold-200 h-16 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-2xl font-serif text-gold-900 font-bold">
            {currentView === ViewState.DASHBOARD && "Visión Estratégica"}
            {currentView === ViewState.PRODUCTION && "Centro de Comando: Producción"}
            {currentView === ViewState.WASTE && "Gestión de Rentabilidad y Mermas"}
            {currentView === ViewState.CUSTOMERS && "Experiencia Omnicanal"}
            {currentView === ViewState.STAFF && "Eficiencia Operativa"}
          </h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gold-600 hover:bg-gold-50 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gold-600 hover:bg-gold-50 rounded-full">
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* Scrollable View Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;