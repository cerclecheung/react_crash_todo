# React Crash Course (TodoList)

This is the code for the Hooks breakout rooms extract from Traversy Media course on YouTube

## Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build
```

Convert all class components to functional components make use of useState and/or useEffect when necessary.


## useState Examples

```
import React, { useState } from 'react';

const Message= () => {
   const messageState = useState( '' );
   const listState = useState( [] );

   /* ... */
}
```

## useEffect Examples

No array of dependencies. Runs after every re-render

```
import React, { useEffect } from 'react';

useEffect(() => {
    document.title = `Runs after every re-rendering.`;
  });
```

Empty array of dependencies. Runs only once.

```
    import React, { useEffect } from 'react';

    useEffect(() => {
        fetchData();
    }, []);
```


Return inside of the useEffect mimics componentWillUnmount()

```
  import React, { useEffect } from 'react';

  useEffect(()=>{
      
      /* ... */

      return () => {
        unsubscribeFunction()
      }

  },[])
```

