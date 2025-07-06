import {GlobalConfig} from "payload";
import {Achievemants} from "@/globals/MainPageBlocks/Achievemants";

export const MainPage: GlobalConfig = {
    slug: 'main_page',
    label: {
        en: 'Main',
        uk: 'Головна',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            type:"tabs",
            tabs:[
                {
                    label:{
                        en:"Achievements",
                        uk:'Досягнення'
                    },
                    fields: Achievemants
                }
            ]
        }
    ]
}