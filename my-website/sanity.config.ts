// sanity.config.ts
import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";
// import { project } from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";


const config = defineConfig({
    
    projectId: 'cnlf52x7',
    
    dataset: 'production',

    title: "My Personal Website",

    apiVersion: "2024-02-12",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: {types: schemas}


})
export default config;
