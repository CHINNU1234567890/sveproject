import React, { createContext, useState, useContext, ReactNode } from 'react';
import ServiceRequestDialog from '../components/ServiceRequestDialog';

interface ServiceRequestContextType {
  openServiceRequest: (defaultService?: string) => void;
  closeServiceRequest: () => void;
}

const ServiceRequestContext = createContext<ServiceRequestContextType | undefined>(undefined);

export const ServiceRequestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  const openServiceRequest = (defaultService = '') => {
    setSelectedService(defaultService);
    setIsOpen(true);
  };
  
  const closeServiceRequest = () => {
    setIsOpen(false);
  };
  
  return (
    <ServiceRequestContext.Provider value={{ openServiceRequest, closeServiceRequest }}>
      {children}
      <ServiceRequestDialog 
        open={isOpen} 
        onOpenChange={setIsOpen}
        defaultService={selectedService}
      />
    </ServiceRequestContext.Provider>
  );
};

export const useServiceRequest = () => {
  const context = useContext(ServiceRequestContext);
  if (context === undefined) {
    throw new Error('useServiceRequest must be used within a ServiceRequestProvider');
  }
  return context;
};