# How to use

## url
https://my-photo-list.herokuapp.com/

## install yourself

```
yarn install
yarn run start
```

# Design principle
畫面以盡量跨裝置的方式去設計, 
因此相片呈現區域用 width % 定義.

Theme color is referenced by:
https://flatuicolors.com/ 

# Other
### About Infinite scroll
`scroll Event + throttle` & `Intersection Observable API` <br/> 
皆可以達到目的, 在這裡選擇後者.

### Image Lazy Load
use `Intersection Observable API`.

### Large List Render performance improvement
using Redux-tool and call seperate image by ID.

### CSS Modules
using styled-components: https://styled-components.com/

