import React, { useEffect, useRef } from 'react';

const HydraCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js';
    script.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // 1. Inicializa Hydra con un tamaño temporal (no importa cuál)
      const hydra = new window.Hydra({
        canvas: canvas,
        detectAudio: false,
        width: 1,  // Tamaño temporal
        height: 1, // Tamaño temporal
      });

      // 2. Pega tu código visual de Hydra
      window.speed = 0.1;
      window.osc(100, -0.0018, 0.17)
        .diff(window.osc(20, 0.00008).rotate(Math.PI / 0.00003))
        .modulateScale(
          window.noise(3.5, 0.18).modulateScale(window.osc(13).rotate(() => Math.sin(window.time / 22))),
          3
        )
        .contrast(1.4)
        .add(window.src(window.o0).modulate(window.o0, 0.04), 0.6, 0.9)
        .brightness(0.0003, 2)
        .contrast(0.5, 2, 0.1, 2)
        .modulateScale(window.osc(2), -0.2, 2, 1, 0.3)
        .posterize(200)
        .rotate(1, 0.2, 0.01, 0.001)
        .contrast(0.18, 0.3, 0.1, 0.2, 0.03, 1)
        .brightness(0.0001, -1, 10)
        .color(0.8, 0, 1.5) 
        .saturate(1.8)      
        .contrast(1.6)     
        .out();

      // 3. Define la función de resize (esta es la lógica que SÍ funciona)
      const handleResize = () => {
        const dpr = window.devicePixelRatio || 1;
        // setResolution actualiza el tamaño interno (bitmap) del canvas
        hydra.setResolution(window.innerWidth * dpr, window.innerHeight * dpr);
      };

      // 4. Asigna el listener para el futuro
      window.addEventListener('resize', handleResize);

      // --- 5. LA SOLUCIÓN ---
      // Llama a la función una vez de inmediato para 
      // establecer la resolución correcta en la carga inicial.
      handleResize();

      // 6. Configura la limpieza
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Opcional: podrías querer limpiar la instancia de Hydra aquí si existe
    };
  }, []); 

  // El estilo CSS no cambia, se encarga del tamaño de *visualización*
  return <canvas id="hydra-canvas" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }}></canvas>;
};

export default HydraCanvas;