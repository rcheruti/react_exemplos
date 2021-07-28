import { createContext, useContext, useState } from 'react';
import { Radio } from 'antd';

const TextContext = createContext('Text Context');

// ----------------
// Page

export function ReactContextPage() {
  const [t1State, setT1State] = useState('Texto um');
  const [t2State, setT2State] = useState('Coisa dois');

  return (
    <div>

      <div>
        <Radio.Group onChange={(el) => setT1State(el.target.value)} value={t1State}>
          <Radio.Button value="Texto um">Texto um</Radio.Button>
          <Radio.Button value="Texto dois">Texto dois</Radio.Button>
          <Radio.Button value="Texto três">Texto três</Radio.Button>
        </Radio.Group>

        <Radio.Group onChange={(el) => setT2State(el.target.value)} value={t2State} style={{ marginLeft:'20px' }}>
          <Radio.Button value="Coisa um">Coisa um</Radio.Button>
          <Radio.Button value="Coisa dois">Coisa dois</Radio.Button>
          <Radio.Button value="Coisa três">Coisa três</Radio.Button>
        </Radio.Group>
      </div>
      <TextContext.Provider value={t1State}>
        <MyContextText />
      </TextContext.Provider>
      <TextContext.Provider value={t2State}>
        <MyContextText />
      </TextContext.Provider>
    </div>
  );
}

// ==========================================
// ==========================================
// =========  Components  ===================

function MyContextText() {
  return (
    <div style={{ padding:'20px' }}>
      MyContextText is: <MyLabel />
    </div>
  );
}
function MyLabel() {
  const text = useContext(TextContext);

  return (
    <div style={{ padding:'20px' }}>
      MyLabel is: {text}
    </div>
  );
}
