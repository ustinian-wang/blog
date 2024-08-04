import {defineConfig} from 'vitepress'
import {pagefindPlugin} from "vitepress-plugin-pagefind";
//default options
let options = {
    previewLength: 62,
    buttonLabel: "Search",
    placeholder: "Search docs",
    allow: [],
    ignore: [],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Blog",
    description: "This is my blog to record solutions of issues in daily development",
    lang: 'zh-cn',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Notes', link: '/notes/README.md'},
        ],

        sidebar: [
            {
                text: 'notes',
                items: [
                    {text: 'CrossDomain', link: '/notes/CrossDomain'},
                    {text: 'CodeCheck', link: '/notes/CodeCheck'},
                    {text: 'Test', link: '/notes/Test'},
                    {text: 'TroubleShooting', link: '/notes/TroubleShooting'},
                    {text: 'UXGuide', link: '/notes/UXGuide'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/ustinian-wang'}
        ],

        search: {
            provider: 'local'
        }
    },
    vite: {
        plugins: [pagefindPlugin(
            {
                customSearchQuery(input) {
                    // 将搜索的每个中文单字两侧加上空格
                    return input.replace(/[\u4E00-\u9FA5]/g, ' $& ')
                        .replace(/\s+/g, ' ')
                        .trim()
                },
                forceLanguage: 'zh-cn',
            }
        )],
    },
})
