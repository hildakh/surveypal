  
import React from 'react';

const checkedContext = React.createContext({});

//provides checked context to all of its children
export const Provider = checkedContext.Provider;
//consumes a context
export const Consumer = checkedContext.Consumer;
export default checkedContext;