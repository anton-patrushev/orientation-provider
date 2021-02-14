import React from 'react';

import { useOrientation } from './hooks';

export function withOrientation(Component: React.ComponentType<any>) {
  const OrientationProvider = (props: any) => {
    const orientation = useOrientation();

    return <Component {...props} orientation={orientation} />;
  };

  return OrientationProvider;
}
