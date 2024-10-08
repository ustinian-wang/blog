import {
    readdirSync,
    statSync
} from 'fs';
import {
    join,
    basename
} from 'path';

// 生成侧边栏条目的函数
export function generateSidebar(dir: string): any[] {
    let ignore = "images";
    if(dir.includes(ignore)){
        return [];
    }
    const items: any[] = [];
    const files = readdirSync(dir);

    files.forEach(file => {
        const filePath = join(dir, file);
        const stat = statSync(filePath);

        if (stat.isDirectory() && !filePath.includes(ignore)) {
            // 如果是目录，递归调用
            items.push({
                text: file,
                collapsible: true,
                items: generateSidebar(filePath).map(item => {
                    let link = join(file, item.link).replace(/\\/g, '/');
                    link = removeDocs(link);
                    return {
                        text: item.text,
                        link: link
                    }
                })
            });
        } else if (file.endsWith('.md')) {
            // 如果是 Markdown 文件
            const fileName = basename(file, '.md');
            let link = join(dir, fileName).replace(/\\/g, '/');
            link = removeDocs(link);
            items.push({
                text: capitalize(fileName),
                link
            });
        }
    });

    return items;
}

function removeDocs(str: string){
    if(str.indexOf("/docs/") > -1){
        let res = str.slice(str.indexOf("/docs/"));
        return res;
    }
    return str;
}

// 将字符串首字母大写的辅助函数
function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}