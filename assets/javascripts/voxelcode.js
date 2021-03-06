function init(element) {
    var PI          = Math.PI;
    var scene       = new voxelcss.Scene();
    var lightSource = new voxelcss.LightSource(300, 300, 300, 750, 0.3, 1);
    var world       = new voxelcss.World(scene);
    var editor      = new voxelcss.Editor(world);

    scene.rotate(-PI / 8, PI / 4, 0);
    scene.attach(element);
    scene.addLightSource(lightSource);

    editor.enableAutoSave();
    editor.load();

    if (world.getVoxels().length === 0) {
        editor.add(new voxelcss.Voxel(0, 0, 0, 100, {
            mesh: voxelcss.Meshes.grass
        }));
    }

    
}

init(document.body);