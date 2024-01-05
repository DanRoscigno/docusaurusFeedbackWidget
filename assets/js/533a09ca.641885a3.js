"use strict";(self.webpackChunkdocusaurusfeedback=self.webpackChunkdocusaurusfeedback||[]).push([[4607],{7028:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(5893),n=t(1151),i=t(8193);const r={sidebar_position:3},o="Create a Blog Post",l={id:"tutorial-basics/create-a-blog-post",title:"Create a Blog Post",description:"<Feedback",source:"@site/docs/tutorial-basics/create-a-blog-post.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-blog-post",permalink:"/docusaurusFeedbackWidget/docs/tutorial-basics/create-a-blog-post",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-blog-post.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/docusaurusFeedbackWidget/docs/tutorial-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/docusaurusFeedbackWidget/docs/tutorial-basics/markdown-features"}},u={},c=[{value:"Create your first Post",id:"create-your-first-post",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"create-a-blog-post",children:"Create a Blog Post"}),"\n",(0,a.jsx)(i.Z,{event:"survey_admin_quickstart",question:"Did you set up the admin successfully?",positiveQuestion:"Is there anything that should improved?",negativeQuestion:"Please describe the issue you faced."}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus creates a ",(0,a.jsx)(s.strong,{children:"page for each blog post"}),", but also a ",(0,a.jsx)(s.strong,{children:"blog index page"}),", a ",(0,a.jsx)(s.strong,{children:"tag system"}),", an ",(0,a.jsx)(s.strong,{children:"RSS"})," feed..."]}),"\n",(0,a.jsx)(s.h2,{id:"create-your-first-post",children:"Create your first Post"}),"\n",(0,a.jsxs)(s.p,{children:["Create a file at ",(0,a.jsx)(s.code,{children:"blog/2021-02-28-greetings.md"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',children:"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n"})}),"\n",(0,a.jsxs)(s.p,{children:["A new blog post is now available at ",(0,a.jsx)(s.a,{href:"http://localhost:3000/blog/greetings",children:"http://localhost:3000/blog/greetings"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8193:(e,s,t)=>{t.d(s,{Z:()=>h});var a=t(7294),n=t(5989),i=t(6743),r=t(2389),o=t(6550),l=t(8379),u=t.n(l),c=t(2047),d=t(5893);function h(e){let{event:s,question:t="Was this page helpful?",positiveBtn:l="Yes",negativeBtn:h="No",positiveQuestion:g="What was most helpful?",negativeQuestion:p="What can we improve?",submitBtn:m="Submit",submitMessage:b="Thank you for helping improve our documentation!",showPossibleSolutions:f=!0}=e;const[x,j]=(0,a.useState)(!1),[k,v]=(0,a.useState)(!1),[y,w]=(0,a.useState)(!1),C=(0,a.useRef)(null),N=(0,a.useRef)(null),S=(0,a.useRef)(null),[_,F]=(0,a.useState)(!1),[P,M]=(0,a.useState)(""),[W,q]=(0,a.useState)(null),[B,D]=(0,a.useState)(""),[E,R]=(0,a.useState)([]),Z=k?S:x?N:C,G=(0,r.Z)(),L=(0,o.TH)();function Q(e){const s=e.target.classList.contains("positive");T(e,s),F(s),j(!0)}function T(e,t){void 0===t&&(t=null),G&&(window.plausible?(x&&w(!0),window.plausible.track(s,{url:L.pathname,label:document.title,feedback:null!==t&&t||null===t&&_?"yes":"no",message:P?.length?P:null,uuid:W},(function(){x&&(w(!1),async function(e,s){if(f&&!e){let e=J(s?s.substring(0,256):document.title),t=await I(e);!t.data.items.length&&s&&(e=J(document.title),t=await I(e)),D(e),R(t.data.items)}}(_,P),H())}))):x&&H())}function H(){j(!1),v(!0),P&&q(null)}function J(e){return`${e} repo:medusajs/medusa is:closed is:issue`}function I(e){return(0,c.W)("GET /search/issues",{q:e,sort:"updated",per_page:3})}return(0,a.useEffect)((()=>{W||q(u()())}),[W]),(0,d.jsx)("div",{className:"feedback-container",children:(0,d.jsx)(n.Z,{mode:"out-in",children:(0,d.jsx)(i.Z,{nodeRef:Z,timeout:300,addEndListener:e=>{Z.current.addEventListener("transitionend",e,!1)},classNames:{enter:"fade-in",exit:"fade-out"},children:(0,d.jsxs)(d.Fragment,{children:[!x&&!k&&(0,d.jsxs)("div",{className:"inline-feedback",ref:C,children:[(0,d.jsx)("span",{children:t}),(0,d.jsx)("button",{className:"positive feedback-btn",onClick:Q,children:l}),(0,d.jsx)("button",{className:"negative feedback-btn",onClick:Q,children:h})]}),x&&!k&&(0,d.jsxs)("div",{className:"inline-question",ref:N,children:[(0,d.jsx)("span",{children:_?g:p}),(0,d.jsx)("textarea",{rows:4,value:P,onChange:e=>M(e.target.value)}),(0,d.jsx)("button",{className:"feedback-btn",onClick:T,disabled:y,children:m})]}),k&&(0,d.jsx)("div",{className:"feedback-message-wrapper",children:(0,d.jsxs)("div",{className:"feedback-message",ref:S,children:[(0,d.jsx)("span",{children:b}),E.length>0&&(0,d.jsxs)("div",{className:"solutions-wrapper",children:[(0,d.jsx)("span",{className:"solutions-message",children:"If you faced a problem, here are some possible solutions from GitHub:"}),(0,d.jsx)("ul",{children:E.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:e.html_url,target:"_blank",children:e.title})},e.url)))}),(0,d.jsxs)("span",{children:["Explore more issues in ",(0,d.jsx)("a",{href:`https://github.com/medusajs/medusa/issues?q=${B}`,target:"_blank",children:"the GitHub repository"})]})]})]})})]})},x)})})}}}]);