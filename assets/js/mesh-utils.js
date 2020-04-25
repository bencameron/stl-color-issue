async function createMesh() {
    const loader = new THREE.STLLoader();
    
    return new Promise((resolve, reject) => {
        loader.load('./assets/stl/OnRoadWheel_Binary.stl', (geometry) => {
            // it will have colors, but just in case...
            if (!geometry.hasColors) {
                alert('no colors!');
            }

            const material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
            resolve(new THREE.Mesh(geometry, material));
        });
    });
}    