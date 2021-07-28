import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex';

export function ReactReflexPage() {

  return (
    <div className="react-reflex-page">
      <div className="react-reflex-border">

        <ReflexContainer orientation="horizontal" windowResizeAware={true}>

          <ReflexElement size={60} minSize={60}>Top</ReflexElement>
          <ReflexSplitter />

          {/* -------------------------------- */}
          <ReflexElement>
            <ReflexContainer orientation="vertical" windowResizeAware={true}>

            <ReflexElement minSize={200}>
              <ReflexContainer orientation="horizontal" windowResizeAware={true}>
                <ReflexElement minSize={40}>minSize: 40</ReflexElement>
                <ReflexSplitter propagate={true}></ReflexSplitter>
                <ReflexElement minSize={40}>minSize: 40</ReflexElement>
                <ReflexSplitter propagate={true}></ReflexSplitter>
                <ReflexElement minSize={40}>minSize: 40</ReflexElement>
              </ReflexContainer>
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement minSize={100}>
              Center
            </ReflexElement>

            <ReflexElement size={160}
                style={{ borderLeft:'1px solid #ccc' }}>
              <ReflexContainer orientation="horizontal" windowResizeAware={true}>
                <ReflexElement size={60}
                  style={{ borderBottom:'1px solid #ccc' }}>Right fixed</ReflexElement>
                <ReflexElement>
                  <ReflexContainer orientation="vertical" windowResizeAware={true}>
                    <ReflexElement minSize={20}>1</ReflexElement>
                    <ReflexSplitter />
                    <ReflexElement minSize={20}>2</ReflexElement>
                  </ReflexContainer>
                </ReflexElement>
              </ReflexContainer>
            </ReflexElement>

            </ReflexContainer>
          </ReflexElement>
          {/* -------------------------------- */}
          
          <ReflexElement size={40} minSize={40} maxSize={40} 
              style={{ borderTop:'1px solid #ccc' }}>
            Bottom Status | height: 40px
          </ReflexElement>

        </ReflexContainer>

      </div>
    </div>
  );
}
