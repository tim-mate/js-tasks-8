!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return m.Date.now()};function y(e,t,i){var o,r,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function w(){var e=p();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-l);return m?v(n,a-(e-c)):n}(e))}function O(e){return u=void 0,d&&o?y(e):(o=r=void 0,f)}function T(){var e=p(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return function(e){return c=e,u=setTimeout(w,t),s?y(e):f}(l);if(m)return u=setTimeout(w,t),y(l)}return void 0===u&&(u=setTimeout(w,t)),f}return t=j(t)||0,b(i)&&(s=!!i.leading,a=(m="maxWait"in i)?g(j(i.maxWait)||0,t):a,d="trailing"in i?!!i.trailing:d),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},T.flush=function(){return void 0===u?f:O(p())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==o}(e))return i;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=f.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return b(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const h={form:document.body.querySelector(".feedback-form")},w={email:"",message:""},O="feedback-form-state";!function(){const e=JSON.parse(localStorage.getItem(O));e?.email&&(h.form.email.value=e.email,w.email=e.email);e?.message&&(h.form.message.value=e.message,w.message=e.message)}(),h.form.addEventListener("input",t((function(e){w[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(w))}),500)),h.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),function(e){e.target.reset(),localStorage.removeItem(O),w.email="",w.message=""}(e)}))}();
//# sourceMappingURL=03-feedback.90834d0c.js.map
