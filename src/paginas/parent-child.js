import { useState } from 'react';

// ----------------
// Page

export function ParentChildPage() {
  return (
    <div>
      <Lista>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <div>Um outro item</div>
      </Lista>
      <Lista>
        <div>Um outro item</div>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <div>Mais um outro item</div>
      </Lista>
      <Lista>oi</Lista>
    </div>
  );
}

// ==========================================
// ==========================================
// =========  Components  ===================

const listaStyle = {
  margin:'20px',
  padding:'10px 20px',
  border:'1px solid #ccc',
};
function Lista({ children }) {
  const [state, setState] = useState(-1); // selected index
  const select = (selectesIdx) => {
    setState(selectesIdx);
  };
  
  if( children && typeof children !== 'string' && children.length ) {
    children = children.map((el, i) => {
      if( el.type !== Item ) return el;
      return <Item key={i} {...el.props} onSelect={() => select(i)} 
                value={ state === i ? true : false } />;
    });
  }
  return (
    <div style={listaStyle}>
      {children}
    </div>
  );
}
const itemStyle = {
  padding:'10px 8px',
  cursor:'pointer',
};
function Item({ onSelect, children, value }) {
  const background = value ? '#efefef' : 'transparent';
  const color = value ? 'red' : '';
  const clicar = () => {
    if( onSelect ) onSelect();
  };
  return (
    <div style={{ ...itemStyle, background, color }} onClick={clicar}>
      {children}
    </div>
  );
}


