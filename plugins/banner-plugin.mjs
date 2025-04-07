import esbuildPluginLicense from 'esbuild-plugin-license';

/** @type {import('esbuild').Plugin} */
const licensePlugin = esbuildPluginLicense({
  banner: `/*
# Copyright (c) 2025 Taro Tanaka
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT
*/`,
});

export default licensePlugin;
