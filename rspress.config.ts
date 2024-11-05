import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'BaseCTF',
    description: '高校联合新生赛',
    logoText: 'BaseCTF',
    themeConfig: {
        enableContentAnimation: true,
        enableAppearanceAnimation: false,
        footer: {
            message: 'BaseCTF 筹备组 | <a href="https://beian.miit.gov.cn">蜀ICP备2023017341号-3</a>',
        },
    },
});
