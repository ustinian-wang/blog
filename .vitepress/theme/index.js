// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// Toggle 看板娘（默认关闭）
const ENABLE_LIVE2D = false

export default {
    ...DefaultTheme,
    enhanceApp() {
        if (typeof window === 'undefined' || !ENABLE_LIVE2D) {
            return
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js';
        document.body.appendChild(script);

        window.live2d_settings = {
            modelId: 1,
            modelTexturesId: 1,
            modelStorage: false,
            canCloseLive2d: true,
            canTurnToHomePage: true,
            waifuSize: 280,
            waifuTipsSize: 250,
            waifuFontSize: 14,
            waifuEdgeSide: 'right:30,bottom:0',
            waifuDraggable: 'unlimited',
            waifuDraggableRevert: true,
            homePageUrl: '/',
            aboutPageUrl: '/about',
            screenshotCaptureName: 'live2d.png',
            showToolMenu: true,
            canSwitchModel: true,
            canSwitchTextures: true,
            canSwitchHitokoto: true,
            canTakeScreenshot: true,
            canTurnToAboutPage: true,
            showHitokoto: true,
            showF12Status: true,
            showF12Message: true,
            showF12OpenMsg: true,
            showCopyMessage: true,
            showWelcomeMessage: true,
            waifuMinWidth: '768px',
            debug: false,
            debugShow: false,
            logMessageToConsole: false,
            showToolMenu: true,
            canSwitchModel: true,
            canSwitchTextures: true,
            switchTexturesTooltip: ['换装'],
            modelTexturesJson: '',
            modelCdnPath: '',
            tools: [
                {
                    name: 'textures',
                    icon: 'fa fa-user',
                    priority: 2
                }
            ],
        };

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
            opacity: 0.8;
            transition: opacity 0.3s;
            }
            #waifu-tool:hover {
            opacity: 1;
            }
            #waifu-tool span {
            cursor: pointer;
            line-height: 30px;
            margin: 0 10px;
            }
        `;
        document.head.appendChild(style);

        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 't') {
                const textureSwitcher = document.querySelector('#waifu-tool .fa-user');
                if (textureSwitcher) {
                    textureSwitcher.click();
                }
            }
        });
    }
}
