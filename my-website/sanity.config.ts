import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";

const config = defineConfig({
    
    projectId: 'cnlf52x7',
    
    dataset: 'production',

    title: "My Personal Website",

    apiVersion: "2024-02-12",

    basePath: "/admin",

    plugins: [deskTool()],


})
export default config;
