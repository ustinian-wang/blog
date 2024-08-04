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
    base: "/blog",
    title: "My Blog",
    description: "This is my blog to record solutions of issues in daily development",
    lang: 'zh-cn',
    themeConfig: {

        editLink: {
            pattern: 'https://github.com/ustinian-wang/blog/edit/main/:path'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Notes', link: '/docs/notes/README.md'},
        ],

        sidebar: [
            {
                text: 'notes',
                items: [
                    {text: 'CrossDomain', link: '/docs/notes/CrossDomain'},
                    {text: 'CodeCheck', link: '/docs/notes/CodeCheck'},
                    {text: 'Test', link: '/docs/notes/Test'},
                    {text: 'TroubleShooting', link: '/docs/notes/TroubleShooting'},
                    {text: 'UXGuide', link: '/docs/notes/UXGuide'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/ustinian-wang'}
        ],

        search: {
            provider: 'local'
        },
        outline: [2,5],
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
    lastUpdated: true,
})
