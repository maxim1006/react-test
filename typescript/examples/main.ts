// import example
// import * as fromImports from './examples/imports';

// lazy-import example
// document.documentElement.addEventListener("click", async () => {
//     try {
//         const lazyImport = await import("./examples/imports/lazy-import.js");
//         console.log(lazyImport);
//     } catch (e) {
//         console.log("lazy import file error ", e);
//     }
// });

// import './examples/array';

import module1 from './module/module1.js';
import module2 from './module/module2.js';

module1();
module2();
console.log(123456);
