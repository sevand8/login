 const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Añade 'glb' (y otros si usas .gltf o .obj) a la lista de extensiones de assets
config.resolver.assetExts.push('glb', 'gltf', 'png', 'jpg');

module.exports = config;
module.exports = withNativeWind(config, { input: './global.css' })