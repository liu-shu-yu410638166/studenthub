<<<<<<< HEAD
# 第10組
## 設計理念:

關於最近很熱門的2024世界棒球12強賽，由世界棒壘球聯盟（WBSC）舉辦的高水平國際賽事，匯聚了全球棒球強國。網路上查詢其他隊伍球員資訊，可以查到球員、教練的名子，但官網上那複雜的頁面和網站上很差的中文翻譯，需要花些時間才找的到，為了想快速的進一步了解，除了中華隊以外的球隊陣容和了解隊員資訊，而設計了這個網頁。

## 技術選用:

- React作為前端框架，元件化架構讓代碼能夠更好地使用，提升代碼的維護性，並且方便團隊協作。
- HTML 構建語義化且結構清晰的網頁，為內容提供基礎結構。
- CSS 能夠提供直觀且靈活的樣式控制，方便設計精確的版面佈局，並支援響應式設計需求。

## 設計原則:
- 簡約設計
  以簡潔和功能性的風格進行網站設計，可以迅速分辨具有國家名稱的國旗找到該國的球員詳情。

- 圖片效果
  滑鼠指向圖片時有懸停設計，增加網頁動態感。
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 0a4fb88ca5820edea1e388fd6e1b493604e3a689
