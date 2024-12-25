// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
    ...DefaultTheme,    
    enhanceApp({ app, router, siteData }) {
        if (typeof window !== 'undefined') {
            // This code will only run in the browser
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css';
            document.head.appendChild(link);

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js';
            document.body.appendChild(script);

            // 添加配置
            window.live2d_settings = {
                modelId: 1,                  // 默认模型 ID
                modelTexturesId: 1,         // 默认材质 ID
                modelStorage: false,        // 不储存模型的 ID
                canCloseLive2d: true,      // 是否显示关闭看板娘按钮
                canTurnToHomePage: true,   // 是否显示返回首页按钮
                waifuSize: 280,            // 看板娘大小
                waifuTipsSize: 250,        // 提示框大小
                waifuFontSize: 14,         // 提示框字体
                waifuEdgeSide: 'right:30,bottom:0',  // 设置右下角，right和bottom的值可以调整具体位置
                waifuDraggable: 'unlimited',// 拖拽设置
                waifuDraggableRevert: true,// 松开鼠标还原拖拽位置
                homePageUrl: '/',          // 主页地址
                aboutPageUrl: '/about',    // 关于页地址
                screenshotCaptureName: 'live2d.png', // 看板娘截图文件名

                // 工具栏设置
                showToolMenu: true,        // 显示工具栏
                canSwitchModel: true,      // 显示模型切换
                canSwitchTextures: true,   // 显示材质切换
                canSwitchHitokoto: true,   // 显示一言切换
                canTakeScreenshot: true,   // 显示看板娘截图
                canTurnToAboutPage: true,  // 显示跳转关于页
                
                // 提示消息设置
                showHitokoto: true,         // 显示一言
                showF12Status: true,        // 显示加载状态
                showF12Message: true,       // 显示看板娘消息
                showF12OpenMsg: true,       // 显示控制台打开提示
                showCopyMessage: true,      // 显示复制内容提示
                showWelcomeMessage: true,   // 显示进入面页欢迎词

                // 看板娘样式设置
                waifuMinWidth: '768px',     // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
                
                // 其他杂项设置
                debug: false,               // 调试模式
                debugShow: false,           // 显示调试信息
                logMessageToConsole: false,  // 在控制台打印消息

                // 换装相关设置
                showToolMenu: true,           // 显示工具栏
                canSwitchModel: true,         // 允许切换模型
                canSwitchTextures: true,      // 允许切换材质（换装）
                switchTexturesTooltip: ['换装'],  // 换装按钮提示文字
                modelTexturesJson: '',        // 自定义材质列表
                modelCdnPath: '',             // 自定义模型路径

                // 材质切换按钮位置
                tools: [
                {
                    name: 'textures',         // 换装按钮
                    icon: 'fa fa-user',       // 使用 Font Awesome 图标
                    priority: 2               // 按钮优先级
                }
                ],
            };

            // 添加自定义 CSS 来确保位置
            const style = document.createElement('style');
            style.textContent = `
                #waifu {
                position: fixed !important;
                bottom: 0 !important;
                right: 30px !important;
                z-index: 1000;
                display: flex;
                justify-content: flex-end;
                }
                #waifu-tips {
                bottom: 100% !important;
                top: auto !important;
                }
                #waifu-tool {
                opacity: 0.8;              /* 工具栏透明度 */
                transition: opacity 0.3s;  /* 添加过渡效果 */
                }
                #waifu-tool:hover {
                opacity: 1;               /* 悬停时完全不透明 */
                }
                #waifu-tool span {
                cursor: pointer;
                line-height: 30px;
                margin: 0 10px;
                }
            `;
            document.head.appendChild(style);

            // 添加换装快捷键（可选）
            document.addEventListener('keydown', (e) => {
                // 按 T 键切换装扮
                if (e.key.toLowerCase() === 't') {
                const textureSwitcher = document.querySelector('#waifu-tool .fa-user');
                if (textureSwitcher) {
                    textureSwitcher.click();
                }
                }
            });
        }
    }
}