"use client";
import Heading from "./components/Heading"
import Portfolio from "./components/Portfolio"

import { useState } from 'react'; 

export default function Home() {
  // const [isAtTop, setIsAtTop] = useState<boolean>(true);

  return (
    <main>
      <Heading />

      {/* <Portfolio isAtTop={isAtTop} /> */}
      
    </main>
  );
}
