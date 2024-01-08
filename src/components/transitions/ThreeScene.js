import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Extend three.js with OrbitControls
extend({ OrbitControls });

// Custom component to control the camera
const CameraControls = () => {
    const { camera, gl } = useThree();
    const controls = useRef();

    useFrame(() => controls.current.update());

    return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
};

// Separate component for loading and displaying the 3D model
const Model = () => {
    const { scene } = useThree();

    useEffect(() => {
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Optional: Provide a DRACOLoader instance to decode compressed mesh data
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
        loader.setDRACOLoader(dracoLoader);

        // Load a glTF resource
        loader.load(
            // resource URL
            'models/scene.gltf',
            // called when the resource is loaded
            function (gltf) {
                scene.add(gltf.scene);

                gltf.animations; // Array<THREE.AnimationClip>
                gltf.scene; // THREE.Group
                gltf.scenes; // Array<THREE.Group>
                gltf.cameras; // Array<THREE.Camera>
                gltf.asset; // Object
            },
            // called while loading is progressing
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened');
            }
        );
    }, [scene]);

    return null;
};

export default function ThreeScene() {
    return (
        <Canvas>
            <CameraControls />
            <Model />
        </Canvas>
    );
}
