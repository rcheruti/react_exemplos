
import { useState } from 'react';
import { motion } from 'framer-motion';

export function FramerMotionPage() {

  // -----------
  const [blocoState, setBlocoState] = useState({ x: 0, y: 0 });
  const htmlAnimate = (
    <div className="exemplo">
      <span className="title">Teste com <code>motion.div animate</code></span>
      <motion.div className="bloco red" animate={blocoState} />
      <div></div>
      <button onClick={() => setBlocoState({ x:   0, y:  0, scale: 1  , rotateZ:' 0deg' })}>Esquerda</button>
      <button onClick={() => setBlocoState({ x: 100, y:-80, scale: 1.4, rotateZ:'45deg' })}>Direita</button>
    </div>
  );

  // -----------
  const htmlDrag = (
    <div className="exemplo">
      <span className="title">Teste com <code>motion.div drag dragConstraints</code></span>
      <motion.div className="bloco red" drag="x" dragConstraints={{ left:-50, right:50 }}>X</motion.div>
      <motion.div className="bloco red" drag="y" dragConstraints={{ top:-50, bottom:50 }}>y</motion.div>
      <div></div>
    </div>
  );

  // -----------
  const [varState, setVarState] = useState('hidden');
  const delayChildren = (dir = 1, w = true) => ({ 
    transition: { 
      delayChildren: 0.05,
      staggerChildren: 0.15,
      staggerDirection: dir,
      when: w ? 'beforeChildren':'afterChildren',
    }
  });
  const varsContainer = {
    hidden: { ...delayChildren(-1, false), opacity: 0 },
    show: { ...delayChildren(1, true), opacity: 1 },
  };
  const varsItems = {
    hidden: { opacity: 0, y: '30px' },
    show: { opacity: 1, y: '0px' },
  };
  const htmlVariants = (
    <div className="exemplo">
      <span className="title">Teste com <code>motion.div variants</code></span>
      <motion.div className="bloco container" style={{ opacity:0 }} 
          initial="hidden" animate={varState} variants={varsContainer} staggerChildren>
        <motion.div className="bloco red" variants={varsItems}></motion.div>
        <motion.div className="bloco red" variants={varsItems}></motion.div>
        <motion.div className="bloco red" variants={varsItems}></motion.div>
      </motion.div>
      <div></div>
      <button onClick={() => setVarState('hidden')}>Hidden</button>
      <button onClick={() => setVarState('show')}>Show</button>
      <div style={{ height:'30px' }}></div>
    </div>
  );



  return (
    <div className="App">
      <header className="App-header">

        {htmlAnimate}
        {htmlDrag}
        {htmlVariants}
        
      </header>
    </div>
  );
}
