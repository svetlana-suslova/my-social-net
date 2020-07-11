import React, {Suspense} from 'react';

export const withSuspense = (MyComponent) => {
    return (props) => {
        return <Suspense fallback={<div>Loading...</div>}><MyComponent {...props} /></Suspense>
    }  
}