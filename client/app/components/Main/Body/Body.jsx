import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      array,
      currentBubbleTwo,
      currentQuickTwo,
      pivot,
      currentSwappers,
      currentHeapThree,
      currentSorted,
      currentMergeX,
    } = this.props;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.6;
    const angleStep = (2 * Math.PI) / array.length;

    return (
      <div id="bodyContainer">
        <div className="holographic-display">
          <div className="center-core">
            <div className="core-glow"></div>
          </div>
          {array.length ? array.map((number, index) => {
            const angle = index * angleStep;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const z = number * 2;
            
            const backgroundColor = currentSwappers.includes(index) ?
                "rgba(255, 20, 147, 0.9)" : currentBubbleTwo.includes(index) ||
                currentQuickTwo.includes(index) || currentHeapThree.includes(index) ||
                currentMergeX.includes(index) ?
                  "rgba(0, 191, 255, 0.9)" : pivot === index ?
                    "rgba(255, 215, 0, 0.9)" : currentSorted.includes(index) ?
                      "rgba(50, 205, 50, 0.9)" : "rgba(138, 43, 226, 0.8)";

            const isActive = currentSwappers.includes(index) || 
                           currentBubbleTwo.includes(index) || 
                           currentQuickTwo.includes(index) || 
                           currentHeapThree.includes(index) || 
                           currentMergeX.includes(index) || 
                           pivot === index;

            return (
              <div
                key={index}
                className={`holographic-element ${isActive ? 'active' : ''} ${currentSorted.includes(index) ? 'sorted' : ''}`}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) translateZ(${z}px)`,
                  backgroundColor: backgroundColor,
                  width: `${Math.max(20, number * 2)}px`,
                  height: `${Math.max(20, number * 2)}px`,
                  fontSize: `${Math.max(8, number / 2)}px`,
                  zIndex: z
                }}
              >
                <div className="element-glow"></div>
                <div className="element-content">{number}</div>
                <div className="connection-line"></div>
              </div>
            );
          }) : null}
        </div>
        <div className="particle-system">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Body;