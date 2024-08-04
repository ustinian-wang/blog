import {defineConfig} from 'vitepress'
import {pagefindPlugin} from "vitepress-plugin-pagefind";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
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
            {text: 'About Me', link: '/docs/Resume.md'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ustinian-wang'}
        ],

        search: {
            provider: 'local'
        },
        outline: [2,5],
        returnToTopLabel: "Return to top"
    },
    vite: {
        plugins: [
            AutoSidebar({
                path: '.',
                collapsed: false,
                ignoreList: ['.obsidian', '.git', 'node_modules']
            }),
            pagefindPlugin(
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
