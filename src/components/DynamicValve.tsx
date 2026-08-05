import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, ContactShadows, useGLTF, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

// Preload all available models for instant swapping
useGLTF.preload('/EV100_1.5_2.glb');
useGLTF.preload('/EV100_3_4.glb');
useGLTF.preload('/KV1P.glb');
function ValveModel({ activeModel, materialType, scrollOffset }: { activeModel: string, materialType: string, scrollOffset: number }) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Dynamically load the selected model
  const { scene } = useGLTF(`/${activeModel}.glb`);
  const { viewport } = useThree();
  
  const isMobile = viewport.width < 5;

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          
          let color = '#d1d5d8'; // Ham Alüminyum Döküm (Raw Cast Aluminum)
          let metalness = 0.6;
          let roughness = 0.5; // Döküm yüzey pürüzlülüğü

          if (materialType === 'kumlu') {
            color = '#c0c5c9'; // Kumlama Yüzey (Sandblasted)
            metalness = 0.4;
            roughness = 0.8; // Ekstra mat ve pürüzlü
          } else if (materialType === 'parlak') {
            color = '#e8ecef'; // İşlenmiş Yüzey (Machined / Polished)
            metalness = 0.9;
            roughness = 0.15; // Kesilmiş yüzey parlaklığı
          }

          mesh.material = new THREE.MeshStandardMaterial({
            color: color,
            metalness: metalness,
            roughness: roughness,
            envMapIntensity: 1.5,
            side: THREE.DoubleSide,
          });
        }
      });
    }
  }, [scene, activeModel, materialType]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const offset = scrollOffset;

      // Sayfa ilk acildiginda valfin ozel onden gorunumu icin baslangic acisi
      let initialRotationY = -Math.PI / 2; // KV1P icin dogru olan (90 derece)
      
      if (activeModel.includes('EV')) {
        initialRotationY = 0; // EV serisi icin aciyi 0 (veya gerekirse Math.PI) olarak ayarliyoruz
      }

      // Fare pozisyonunu alarak valfe ekstra mikro donus (canlilik) katiyoruz
      const mouseX = state.pointer.x * 0.8; 
      const mouseY = state.pointer.y * 0.4; 

      // En alta inildiginde tam 1 tur atmasi icin
      const targetRotationY = initialRotationY + (offset * Math.PI * 2) + mouseX;
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, targetRotationY, 4, delta);
      
      const targetRotationX = ((offset * Math.PI) / 6) - mouseY; 
      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, targetRotationX, 4, delta);
      
      let targetX = 0;
      let targetY = 0;

      const moveX = isMobile ? 0 : 3; 
      
      // MOBILDE DINAMIK KACIS
      if (isMobile) {
        if (offset < 0.2) {
          targetY = 0; // Starts at center
        } else if (offset < 0.5) {
          const localOffset = (offset - 0.2) / 0.3;
          targetY = THREE.MathUtils.lerp(0, 1.5, localOffset); // Moves to top
        } else if (offset < 0.75) {
          targetY = 1.5; // Stays at top dodging middle texts
        } else {
          const localOffset = (offset - 0.75) / 0.25;
          targetY = THREE.MathUtils.lerp(1.5, 0, localOffset); // Moves back to center
        }
      } else {
        targetY = -0.4; 
      }

      // Sadece X ekseninde hareket (Desktop)
      if (!isMobile) {
        if (offset < 0.33) {
          const localOffset = offset / 0.33; 
          targetX = THREE.MathUtils.lerp(0, moveX, localOffset); 
        } else if (offset < 0.66) {
          const localOffset = (offset - 0.33) / 0.33;
          targetX = THREE.MathUtils.lerp(moveX, -moveX, localOffset); 
        } else {
          const localOffset = (offset - 0.66) / 0.34;
          targetX = THREE.MathUtils.lerp(-moveX, 0, localOffset); 
        }
      }

      meshRef.current.position.x = THREE.MathUtils.damp(meshRef.current.position.x, targetX, 4, delta);
      meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, targetY, 4, delta);
    }
  });

  // Modele gore ozel boyutlandirma
  let currentScale = isMobile ? 7.5 : 17; 
  
  if (activeModel === 'EV100_3_4') {
    currentScale = isMobile ? 6.5 : 15;
  }

  const pivotOffsets: Record<string, [number, number, number]> = {
    'EV100_1.5_2': [0, 0, 0], 
    'EV100_3_4': [-0.6, 0, 0], 
    'KV1P': [0.4, 0, 0] 
  };

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <group position={pivotOffsets[activeModel] || [0, 0, 0]}>
        <primitive object={scene} scale={currentScale} position={[0, 0, 0]} />
      </group>
    </group>
  );
}

export default function DynamicValve() {
  const [isMobileWindow, setIsMobileWindow] = useState(false);
  const [activeModel, setActiveModel] = useState('EV100_1.5_2');
  const [scrollOffset, setScrollOffset] = useState(0);
  const [materialType, setMaterialType] = useState('parlak');

  useEffect(() => {
    const handleResize = () => setIsMobileWindow(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;
      
      if (maxScroll > 0) {
        const currentScroll = -rect.top;
        setScrollOffset(Math.min(1, Math.max(0, currentScroll / maxScroll)));
      } else {
        setScrollOffset(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const models = [
    { id: 'EV100_1.5_2', name: '1.5" EV100' },
    { id: 'EV100_3_4', name: '3/4" EV100' },
    { id: 'KV1P', name: 'KV1P' }
  ];

  // Scroll degerine gore son sayfa (Performansi Hisset) yazilarinin animasyon hesaplamasi
  const finalPageProgress = Math.min(1, Math.max(0, (scrollOffset - 0.75) / 0.25));
  const leftTranslate = (1 - finalPageProgress) * -100; // -100vw'den 0'a
  const rightTranslate = (1 - finalPageProgress) * 100; // 100vw'den 0'a
  const finalOpacity = finalPageProgress;

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: isMobileWindow ? '200vh' : '400vh', backgroundColor: '#fcfcfc' }}>
      
      <div style={{ position: 'sticky', top: '64px', left: 0, width: '100%', height: 'calc(100vh - 64px)', overflow: 'hidden', zIndex: 10 }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          {/* Arka plani siliyoruz (seffaf yapiyoruz) ki arkadaki yazilar gorunsun */}
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 20, 10]} angle={0.4} penumbra={1} intensity={2} color="#ffffff" castShadow />
          <Environment preset="studio" />

          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
            <ValveModel activeModel={activeModel} materialType={materialType} scrollOffset={scrollOffset} />
          </Float>

          <ContactShadows position={[0, -3.5, 0]} opacity={0.3} scale={15} blur={2.5} far={4} color="#000000" />
        </Canvas>

        {/* Material & Model Selector UI */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: isMobileWindow ? 'none' : 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          zIndex: 100,
          pointerEvents: 'auto',
          width: isMobileWindow ? '90%' : 'auto'
        }}>
          {/* Renk/Materyal Secici */}
          <div style={{
            display: isMobileWindow ? 'none' : 'flex', gap: '15px', backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '8px 15px', borderRadius: '30px', backdropFilter: 'blur(10px)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}>
            <button onClick={() => setMaterialType('standart')} title="Ham Döküm" style={{
              width: '24px', height: '24px', borderRadius: '50%', border: materialType === 'standart' ? '3px solid #003399' : '3px solid transparent',
              backgroundColor: '#d1d5d8', cursor: 'pointer', transition: 'all 0.2s', padding: 0
            }} />
            <button onClick={() => setMaterialType('kumlu')} title="Kumlu Yüzey" style={{
              width: '24px', height: '24px', borderRadius: '50%', border: materialType === 'kumlu' ? '3px solid #003399' : '3px solid transparent',
              backgroundColor: '#c0c5c9', cursor: 'pointer', transition: 'all 0.2s', padding: 0
            }} />
            <button onClick={() => setMaterialType('parlak')} title="İşlenmiş Parlak" style={{
              width: '24px', height: '24px', borderRadius: '50%', border: materialType === 'parlak' ? '3px solid #003399' : '3px solid transparent',
              backgroundColor: '#e8ecef', cursor: 'pointer', transition: 'all 0.2s', padding: 0
            }} />
          </div>

          {/* Model Secici */}
          <div style={{
            display: isMobileWindow ? 'grid' : 'flex',
            gridTemplateColumns: isMobileWindow ? '1fr 1fr' : 'none',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: isMobileWindow ? '12px' : '6px 16px',
            borderRadius: isMobileWindow ? '20px' : '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
            justifyContent: 'center',
            width: isMobileWindow ? '100%' : 'auto'
          }}>
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: isMobileWindow ? '8px 10px' : '6px 14px',
                  border: 'none',
                  borderRadius: '30px',
                  backgroundColor: activeModel === model.id ? '#003399' : 'transparent',
                  color: activeModel === model.id ? '#fff' : '#555',
                  fontWeight: 600,
                  fontSize: isMobileWindow ? '0.75rem' : '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: 20 }}>
        
        <div style={{ position: 'absolute', top: isMobileWindow ? '10vh' : '8vh', width: '100%', textAlign: 'center', padding: '0 20px', boxSizing: 'border-box' }}>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: '#555', margin: 0, fontWeight: 400 }}>
            Asansör Hidroliğinde Dünya Standardı
          </p>
        </div>

        <div style={{ 
          position: 'absolute', top: isMobileWindow ? '75vh' : '130vh', 
          opacity: isMobileWindow && scrollOffset > 0.6 ? 0 : 1, transition: 'opacity 0.5s ease',
          left: isMobileWindow ? '5vw' : '10vw', 
          right: isMobileWindow ? '5vw' : 'auto',
          color: '#111', maxWidth: isMobileWindow ? 'auto' : '400px', 
          padding: isMobileWindow ? '25px' : '0',
          backgroundColor: 'transparent',
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#003399' }}>Kusursuz Seyahat</h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#555', lineHeight: 1.6 }}>
            Dahili türbülans bastırıcılar ve sıcaklık/basınç dengeleme sistemi ile her mevsimde pürüzsüz duruş ve kalkışlar.
          </p>
        </div>

        <div style={{ 
          position: 'absolute', top: isMobileWindow ? '125vh' : '230vh', 
          opacity: isMobileWindow && scrollOffset > 0.75 ? 0 : 1, transition: 'opacity 0.5s ease',
          left: isMobileWindow ? '5vw' : 'auto',
          right: isMobileWindow ? '5vw' : '10vw', 
          color: '#111', maxWidth: isMobileWindow ? 'auto' : '400px', 
          textAlign: isMobileWindow ? 'left' : 'right',
          padding: isMobileWindow ? '25px' : '0',
          backgroundColor: 'transparent',
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#003399' }}>On Yıllarca Dayanıklılık</h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#555', lineHeight: 1.6 }}>
            70 HRc Rockwell sertliğinde işlenmiş iç yüzeyler ve kendi kendini temizleyen filtreler ile yıllarca bakım gerektirmeyen kusursuz mimari.
          </p>
        </div>

        <div style={{ 
          position: 'absolute', top: isMobileWindow ? '165vh' : '320vh', width: '100%', 
          display: 'flex', flexDirection: isMobileWindow ? 'column' : 'row', 
          justifyContent: 'center', alignItems: 'center', gap: isMobileWindow ? '0.2rem' : '1rem',
          padding: '0 5vw', boxSizing: 'border-box', textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#003399', margin: 0, 
            letterSpacing: '-0.03em', transform: `translateX(${leftTranslate}vw)`, opacity: finalOpacity,
            willChange: 'transform, opacity'
          }}>
            Zamanın Ötesinde
          </h2>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#003399', margin: 0, 
            letterSpacing: '-0.03em', transform: `translateX(${rightTranslate}vw)`, opacity: finalOpacity,
            willChange: 'transform, opacity'
          }}>
            Performans
          </h2>
        </div>

        {/* Tüm Ürünlere Yönlendirme Oku */}
        <div style={{ 
          position: 'absolute', top: isMobileWindow ? '185vh' : '360vh', width: '100%', 
          display: isMobileWindow ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', opacity: finalOpacity,
          transform: `translateY(${(1 - finalOpacity) * 20}px)`, transition: 'opacity 0.3s',
          pointerEvents: 'auto'
        }}>
          <a href="/urunler" style={{ color: '#003399', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', borderBottom: '2px solid #003399', paddingBottom: '4px' }}>
            Tüm Ürünleri İncele &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}
