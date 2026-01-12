'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  expandedProjectId: string | number | null;
  setExpandedProjectId: (id: string | number | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | number | null>(null);

  return (
    <NavigationContext.Provider value={{ expandedProjectId, setExpandedProjectId }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
}
