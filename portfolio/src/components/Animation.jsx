

import React, {useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, ScrollControls, } from '@react-three/drei';
// import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import '../styles/CubeAnimation.css';

// general //
import image1 from '../assets/fogPattern.avif';
import image2 from '../assets/blueNature.avif';
import image3 from '../assets/wave.jpeg';
import image4 from '../assets/wave2.jpeg';
import image5 from '../assets/coolProfile.jpg';
import image6 from '../assets/colorPattern.avif'

// nurse //

// import image7 from '../assets/nurse/nurse1.jpg';
// import image8 from '../assets/nurse/nurse2.jpg';
// import image9 from '../assets/nurse/nurse3.jpg';
// import image10 from '../assets/nurse/nurse4.jpg';
// import image11 from '../assets/nurse/nurse1.jpg';
// import image12 from '../assets/nurse/nurse1.jpg';

const Animation = () => {
   
    return (
        <div className="main-container">
            
               
            <Canvas style={{ width: '100px', height: '100px' }}> 
                <ambientLight intensity={2} />
                <directionalLight position={[2,1,1]} />
                <OrbitControls enableZoom={false} enablePan={false}/>
                <Cube />
            </Canvas>
            
        </div>
    );
};

function Cube() {

    const mesh = useRef(null);
   

    // const options = { damping: 20}
    // const mouse = { 
    //     x: useSpring(useMotionValue(0), options),
    //     y: useSpring(useMotionValue(0), options)
    // }
    // const manageMouseMove = (event) => {
    //     const { innerWidth, innerHeight } = window;
    //     const { clientX, clientY } = event;
    //     const x = - 0.5 + (clientX / innerWidth);
    //     const y = - 0.5 + (clientY / innerHeight);
    //     mouse.x.set(x);
    //     mouse.y.set(y);
    // };

    // useEffect(() => {
    //     window.addEventListener("mousemove", manageMouseMove)

    //     return () => window.removeEventListener("mousemove", manageMouseMove);
    // }, []);

    useFrame((state, delta) => {
           mesh.current.rotation.x += delta * 0.5;
            mesh.current.rotation.y += delta * 0.5;
           mesh.current.rotation.z += delta * 0.5;
     });

     // <motion.mesh ref={mesh} rotation-y={mouse.x} rotation-x={mouse.y} >

    const texture_1 = useLoader(TextureLoader, image1);
    const texture_2 = useLoader(TextureLoader, image2);
    const texture_3 = useLoader(TextureLoader, image3);
    const texture_4 = useLoader(TextureLoader, image4);
    const texture_5 = useLoader(TextureLoader, image5);
    const texture_6 = useLoader(TextureLoader, image6);

    return (
      
             <motion.mesh ref={mesh} >
            <boxGeometry args={[ 3.6, 3.6,3.6 ]} />
            <meshStandardMaterial map={texture_1} attach="material-0" />
            <meshStandardMaterial map={texture_2} attach="material-1" />
            <meshStandardMaterial map={texture_3} attach="material-2" />
            <meshStandardMaterial map={texture_4} attach="material-3" />
            <meshStandardMaterial map={texture_5} attach="material-4" />
            <meshStandardMaterial map={texture_6} attach="material-5" />
            

       
        </motion.mesh>
    )
};

export default Animation;