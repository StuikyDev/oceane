enqueueScripts([function(){
    (window.webpackJsonpvtex_store_2_136_0=window.webpackJsonpvtex_store_2_136_0||[]).push([["StoreWrapper"],[function(e,t){e.exports=React},function(e,t){e.exports=__RENDER_8_RUNTIME__},function(e,t){e.exports=R},,function(e,t,r){"use strict";var n=r(0),o=r(5),a=r(2);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=Object(o.usePixel)(),i=c.push,u=Object(n.useRef)(null),s=u.current;Object(n.useEffect)((function(){if(t&&!r&&s!==t){if(!e||Object(a.isEmpty)(e))return;Array.isArray(e)?e.forEach(i):i(e),u.current=t}}),[e,r,t,s,i])}},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.pixel-manager@1.x/PixelContext"]},,function(e,t){e.exports=ReactApollo},,,function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(0),o=r(1),a=r(4),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=e.cacheKey,c=e.skip,i=Object(o.useRuntime)(),u=i.route,s=i.account,l=null!=r?r:u.routeId,d=Object(n.useMemo)((function(){return!o.canUseDOM||c?null:{event:"pageView",pageTitle:null!=t?t:document.title,pageUrl:location.href,referrer:0===document.referrer.indexOf(location.origin)?void 0:document.referrer,accountName:s,routeId:(null==u?void 0:u.routeId)?u.routeId:""}}),[s,t,o.canUseDOM,l]);Object(a.a)(c?null:d,l)},i=["store.search","store.product"];t.a=function(e){var t=e.title,r=Object(o.useRuntime)().route,n=r&&i.some((function(e){return 0===r.routeId.indexOf(e)}));return c({title:t,skip:n}),null}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(1);function o(){var e=Object(n.useRuntime)(),t=e.route,r=e.rootPath,o=void 0===r?"":r,a=t.canonicalPath,c=window.__hostname__||window.location&&window.location.hostname;return c&&a?"https://".concat(c).concat(o).concat(a):null}},,,function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.children,r=e.className;return o.a.createElement("div",{className:r},o.a.createElement("div",{className:"flex flex-column min-vh-100 w-100"},t))}},,,,,,,function(e,t){e.exports=ReactIntl},,,,,,,,,,,,,,function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.styleguide@9.x/ToastProvider"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/PWAContext"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.order-manager@0.x/OrderQueue"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.order-items@0.x/OrderItems"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.order-manager@0.x/OrderForm"]},,,function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/MutationAddToCart"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/MutationUpdateItems"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/MutationUpdateOrderFormProfile"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/MutationUpdateOrderFormShipping"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/MutationUpdateOrderFormCheckin"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/OrderFormContext"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.store-resources@0.x/QueryOrderForm"]},function(e,t){e.exports=__RENDER_8_COMPONENTS__["vtex.styleguide@9.x/ToastContext"]},,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t),function(e){var t=r(3);r.p=Object(t.getPublicPath)("vtex.store@2.136.0");var n=Object(t.register)((function(){return r(72)}),e,"vtex.store@2.136.0","vtex.store@2.x","StoreWrapper");n.renderHotReload,n.setupHMR}.call(this,r(9)(e))},,function(e,t,r){"use strict";r.r(t);var n=r(19),o=r(6),a=r(8),c=r(0),i=r.n(c),u=r(1),s=r(5),l=r(35),d=r.n(l),p=r(36),f=r(37),m=r(38),O=r(39),h=["firstName","lastName","document","id","email","phone","isAuthenticated"];var v=function(){var e=Object(s.usePixel)().push;return Object(c.useEffect)((function(){(window.__RENDER_8_SESSION__&&window.__RENDER_8_SESSION__.sessionPromise?window.__RENDER_8_SESSION__.sessionPromise:Promise.resolve(null)).then((function(t){var r,n,o=null===(n=null===(r=null==t?void 0:t.response)||void 0===r?void 0:r.namespaces)||void 0===n?void 0:n.profile;if(o){var a=function(e){return e?h.reduce((function(t,r){var n,o=null===(n=e[r])||void 0===n?void 0:n.value;return o&&(t[r]="isAuthenticated"===r?function(e){return"true"===e.toLowerCase()}(o):o),t}),{}):{}}(o);e(Object.assign({event:"userData"},a))}}))}),[e]),null},_=r(10),b=r(40),g=r(41),E=r(13),x=r(50),j=r(51),y=r(20),N=r(7),R=r(42),w=r.n(R),S=r(43),P=r.n(S),F=r(44),C=r.n(F),M=r(45),T=r.n(M),D=r(46),I=r.n(D),A=r(47),U=r(48),k=r.n(U);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(y.a)(e);if(t){var o=Object(y.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(j.a)(this,r)}}var W=function(e){Object(x.a)(r,e);var t=q(r);function r(){var e;Object(b.a)(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),Object(a.a)(Object(E.a)(e),"state",{orderFormContext:{message:{isSuccess:null,text:null},loading:!0,orderForm:{},refetch:function(){},addItem:e.props.addItem,updateToastMessage:e.handleMessageUpdate,updateOrderForm:e.props.updateOrderForm,updateAndRefetchOrderForm:e.handleUpdateAndRefetchOrderForm,updateOrderFormProfile:e.props.updateOrderFormProfile,updateOrderFormShipping:e.props.updateOrderFormShipping,updateOrderFormCheckin:e.props.updateOrderFormCheckin}}),Object(a.a)(Object(E.a)(e),"handleUpdateAndRefetchOrderForm",(function(t){return e.props.updateOrderForm(t).then((function(){return e.props.data.refetch()}))})),Object(a.a)(Object(E.a)(e),"handleMessageUpdate",(function(t){var r=e.state.orderFormContext;r.message=t,e.setState({orderFormContext:r})})),e}return Object(g.a)(r,[{key:"render",value:function(){var e=this.state;return e.orderFormContext.updateToastMessage=this.handleMessageUpdate,e.orderFormContext.updateAndRefetchOrderForm=this.handleUpdateAndRefetchOrderForm,e.orderFormContext.updateOrderForm=this.props.updateOrderForm,e.orderFormContext.addItem=this.props.addItem,e.orderFormContext.updateOrderFormProfile=this.props.updateOrderFormProfile,e.orderFormContext.updateOrderFormShipping=this.props.updateOrderFormShipping,e.orderFormContext.updateOrderFormCheckin=this.props.updateOrderFormCheckin,i.a.createElement(A.Provider,{value:this.state},this.props.children)}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!e.data.loading&&!e.data.error){var r=e.data;return r.message=t.orderFormContext.message,{orderFormContext:r}}return t}}]),r}(c.Component),L=Object(N.compose)(Object(N.graphql)(k.a,{options:function(){return{ssr:!1}}}),Object(N.graphql)(w.a,{name:"addItem"}),Object(N.graphql)(P.a,{name:"updateOrderForm"}),Object(N.graphql)(C.a,{name:"updateOrderFormProfile"}),Object(N.graphql)(T.a,{name:"updateOrderFormShipping"}),Object(N.graphql)(I.a,{name:"updateOrderFormCheckin"}))(W),z=r(2),B=r(21),H=r(49),Q=r.n(H);function J(e){var t=e.intl,r=Object(c.useState)(!1),n=Object(o.a)(r,2),a=n[0],i=n[1],u=Object(c.useState)(!1),s=Object(o.a)(u,2),l=s[0],d=s[1],p=Object(c.useContext)(Q.a),f=p.showToast,m=p.hideToast,O=p.toastState,h=Object(c.useRef)({message:"",dismissable:!0,duration:1/0}),v=Object(c.useCallback)((function(){navigator&&i(!Object(z.pathOr)(!0,["onLine"],navigator))}),[]);return Object(c.useEffect)((function(){return window&&(window.addEventListener("online",v),window.addEventListener("offline",v)),v(),function(){window&&(window.removeEventListener("online",v),window.removeEventListener("offline",v))}}),[v]),Object(c.useEffect)((function(){if(a&&!O.currentToast){var e=t.formatMessage({id:"store/store.network-status.offline"});h.current.message=e,l||f(h.current),d(!l)}else!a&&O.isToastVisible&&Object(z.path)(["currentToast","message"],O)===h.current.message&&(m(),d(!1))}),[a,O,h,l,f,m,t]),null}J.propTypes={intl:B.intlShape.isRequired};var V=Object(B.injectIntl)(J),K=r(14),$=r(16),G=r.n($);function X(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw a}}}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Z=function(e,t){var r=e&&e[0].split("".concat("specificationFilter","_")),n=Object(o.a)(r,2)[1],a=t&&t[0].split("".concat("specificationFilter","_")),c=Object(o.a)(a,2)[1],i=Object(o.a)(e,2),u=i[0],s=i[1],l=Object(o.a)(t,2),d=l[0],p=l[1],f=/category-[0-9]+/,m=f.test(u),O=f.test(d),h="brand"===u,v="brand"===d;return m&&!O?-1:O&&!m?1:m&&O?u.localeCompare(d)||s.localeCompare(p):h&&!v?-1:v&&!h?1:n&&c&&!isNaN(Number(n))&&!isNaN(Number(c))?Number(n)-Number(c)+s.localeCompare(p):s.localeCompare(p)},ee=function(e,t){var r=function(e){var t,r=0,n=X(e);try{for(n.s();!(t=n.n()).done;){if("c"!==t.value)return r;r++}}catch(e){n.e(e)}finally{n.f()}return r}(t),n=Object(z.zip)(t,e),o=n&&n.slice(r).sort(Z),a=n.slice(0,r).concat(o);return{map:a.map((function(e){return Array.isArray(e)?e[0]:e})).join(","),pathSegments:a.map((function(e){return e[1]}))}},te=function(e){if("store"!==Object(z.path)(["__RUNTIME__","route","domain"],window))return e;var t=e.path,r=e.query,n=r?G.a.parse(r):{},a=n.map,c=t.startsWith("/")?t.split("/").slice(1):t.split("/"),i=n.query||function(e,t){return!!t&&t.split(",").length===e.length}(c,a)?function(e,t,r){if(t.map){var n=t.map.split(","),a=Object(z.zip)(e,n).map((function(e){var t=Object(o.a)(e,2),r=t[0],n=t[1];return Object(z.contains)("specificationFilter",n)?r:r.toLowerCase()})),c=ee(t.query?t.query.split("/").slice(1):a,n),i=c.pathSegments,u=c.map;return t.map=u,t.query?t.query="/".concat(i.join("/")):a=i,{pathSegments:a,query:G.a.stringify(t,{encode:!1})}}return{pathSegments:e,query:r}}(c,n,r):function(e,t){return{pathSegments:e,map:t}}(c,r);return e.path=t.startsWith("/")?"/".concat(i.pathSegments.join("/")):i.pathSegments.join("/"),e.query=i.query,e},re=r(11);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae=function(e){var t=e.title,r=e.description;return[{property:"og:type",content:"website"},{property:"og:title",content:t},{property:"og:url",content:e.url},{property:"og:description",content:r}]};t.default=function(e){var t=e.children,r=e.CustomContext,a=Object(u.useRuntime)(),l=a.amp,h=a.culture,b=h.country,g=h.locale,E=h.currency,x=a.route,j=a.route,y=j.metaTags,N=j.title,R=j.rootName,w=a.getSettings,S=a.rootPath,P=void 0===S?"":S,F=a.prefetchDefaultPages,C=a.addNavigationRouteModifier,M=u.canUseDOM&&"serviceWorker"in navigator;Object(c.useEffect)((function(){F(["store.custom","store.product","store.search","store.search#brand","store.search#category","store.search#configurable","store.search#custom","store.search#department","store.search#subcategory","store.search#subcategory-terms"])}),[F]),Object(c.useEffect)((function(){C(te)}),[C]);var T=w("vtex.store")||{},D=T.titleTag,I=T.metaTagDescription,A=T.metaTagRobots,U=T.storeName,k=T.faviconLinks,q=T.enableOrderFormOptimization,W=void 0!==q&&q,z=T.enableServiceWorker,B=void 0===z||z,H=y&&y.description||I,Q=N||D,J=(y||{}).robots||A,$=x.path.match(/\?.*/)||["?"],G=Object(o.a)($,1)[0],X=Object(re.a)(),Y=function(e){var t=Object(u.useRuntime)().rootPath,r=void 0===t?"":t;return r?(e||[]).map((function(e){var t=e.href;return t&&"/"===t[0]?oe(oe({},e),{},{href:r+t}):e})):e}(k),Z=r||c.Fragment,ee=Object(c.useMemo)((function(){return R.includes("store.custom")}),[R]),ne=i.a.createElement(f.OrderQueueProvider,null,i.a.createElement(O.OrderFormProvider,null,i.a.createElement(m.OrderItemsProvider,null,i.a.createElement(K.a,{className:"vtex-store__template bg-base"},i.a.createElement(Z,null,t)))));return i.a.createElement(c.Fragment,null,i.a.createElement(u.Helmet,{title:Q,meta:[].concat(Object(n.a)(ee?ae({title:Q,description:H,url:X}):[]),[!l&&{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:H},{name:"copyright",content:U},{name:"author",content:U},{name:"country",content:b},{name:"language",content:g},{name:"currency",content:E},{name:"robots",content:J||"index, follow"},{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}]).filter(Boolean).filter((function(e){return e.content&&e.content.length>0})),script:[M&&{type:"text/javascript",src:"".concat(P,"/register.js").concat(G).concat(B?"":"&__disableSW=true","&scope=").concat(encodeURIComponent(P)),defer:!0}].filter(Boolean),link:[].concat(Object(n.a)(Y||[]),Object(n.a)(!l&&X?[{rel:"canonical",href:encodeURI(X)}]:[])).filter(Boolean)}),i.a.createElement(s.PixelProvider,{currency:E},i.a.createElement(p.PWAProvider,{rootPath:P},i.a.createElement(_.a,{title:Q}),i.a.createElement(v,null),i.a.createElement(d.a,{positioning:"window"},i.a.createElement(V,null),W?ne:i.a.createElement(L,null,ne)))),function(){try{return u.canUseDOM&&window.top!==window.self&&window.top.__provideRuntime}catch(e){return!1}}()&&i.a.createElement(u.NoSSR,null,i.a.createElement(u.ExtensionPoint,{id:"highlight-overlay"})))}}],[[70,"common",0]]]);
  },function(){
    (window.webpackJsonpvtex_store_2_136_0=window.webpackJsonpvtex_store_2_136_0||[]).push([["DefaultChallenge"],{52:function(e,t,n){"use strict";n.r(t),function(e){var t=n(3);n.p=Object(t.getPublicPath)("vtex.store@2.136.0");var r=Object(t.register)((function(){return n(53)}),e,"vtex.store@2.136.0","vtex.store@2.x","DefaultChallenge");r.renderHotReload,r.setupHMR}.call(this,n(9)(e))},53:function(e,t,n){"use strict";n.r(t);t.default=function(e){return e.children}}},[[52,"common"]]]);
  }], document.currentScript.dataset.index)