import { IconType } from "react-icons";

export interface IService {
   title:string,
   description:string,
   Icon:IconType
}

export interface ISkill {
   name: string
   level: string
   Icon:IconType
}

export type Category = "react" | "node" | "express" | "django" | "mongo";

export interface IProject {
   name: string
   description: string
   image_path: string
   deployed_url: string
   github_url: string
   category: Category[]
   tags: string[]
}
