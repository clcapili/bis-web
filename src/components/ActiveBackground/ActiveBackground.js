import { useEffect } from 'react';
import { ActiveBackground as ActiveBG } from 'utils';

/**
 * Render the ActiveBackground component.
 *
 * @return {React.ReactElement} The ActiveBackground component.
 */
export default function ActiveBackground() {

  // run my code here ???
  useEffect(() => {
    let activeBackground = new ActiveBG(document.getElementById('active-background'));
    activeBackground.run();
  }, []);

  const parentStyles = {
    zIndex: -1, 
    position: 'fixed', 
    width: '100%', 
    height: '100%', 
    padding: 0, 
    margin: 0 
  };

  const canvasStyles = {
    width: '100%', 
    height: '100%'
  };

  return (
    <div style={parentStyles}>
      <canvas style={canvasStyles} id="active-background"  width="255" height="255"></canvas>
    </div>
  );

}
