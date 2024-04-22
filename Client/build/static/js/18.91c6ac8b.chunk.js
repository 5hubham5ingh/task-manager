"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[18],{6184:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(1582),a=t(890),s=t(4294),c=t(184);function i(e){var n=e.onRetry;return(0,c.jsxs)(r.Z,{direction:"column",alignItems:"center",children:[(0,c.jsx)(a.Z,{variant:"h6",children:"Something went wrong"}),(0,c.jsx)(s.Z,{variant:"contained",size:"small",onClick:n,children:"Retry"})]})}},3414:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(9434),a=t(3498);function s(e){var n=(0,r.I0)();setTimeout((function(){return e.isPaused?n(a.NV.showSnackbar({message:"Waiting for internet connection",severity:"info",autoHideDuration:null})):n(a.NV.hideSnackbar())}),1e3)}},5361:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4165),a=t(1413),s=t(6459),c=t(5861),i=t(1243).Z.create({baseURL:"http://localhost:5555",withCredentials:!0});function o(e){return u.apply(this,arguments)}function u(){return u=(0,c.Z)((0,r.Z)().mark((function e(n){var t,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=Object.assign({},((0,s.Z)(n),n))).headers=(0,a.Z)({"Content-Type":"application/json",Accept:"application/json"},t.headers),u=function(e){return e},d=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==n.response.status||n.response.data.message){e.next=10;break}return(a=localStorage.getItem("refreshToken"))||window.location.replace("/login?session=expired"),t.headers.autherisation=a,e.next=7,o(t);case 7:return e.abrupt("return",e.sent);case 10:401===n.response.status&&window.location.replace("/login?session=expired");case 11:if(!n.response){e.next=13;break}return e.abrupt("return",Promise.reject(n));case 13:return e.abrupt("return",Promise.reject({response:{data:{message:navigator.onLine?"Server is not responding":"System is Offline! Please check your internet connection."}}}));case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),e.next=6,i(t).then(u).catch(d);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}},2018:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r=t(1413),a=t(7689),s=t(6184),c=t(3414),i=t(4165),o=t(5861),u=t(4893),d="workspace",l=t(5361),f=function(e){function n(){return n=(0,o.Z)((0,i.Z)().mark((function e(n){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.queryKey,r=t[1],e.next=4,(0,l.Z)({url:"".concat(d,"/").concat(r),method:"get"});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}return(0,u.a)({queryKey:["workspace",e],queryFn:function(e){return n.apply(this,arguments)},refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnWindowBlur:!1,refetchInterval:6e4,staleTime:6e4,select:function(e){return e.data},enabled:!0})},p=t(184);function h(e){var n=e.children,t=(0,a.UO)().workspaceId,r=f(t);return(0,c.Z)(r),r.isError?(0,p.jsx)(s.Z,{onRetry:r.refetch}):r.isLoading?(0,p.jsx)("div",{children:"Loading..."}):r.isSuccess?n({tasks:r.data}):void 0}var v=t(1582),m=t(890),Z=t(5926),g={width:"100vw",height:"80vh",padding:"2vw",overflowY:"scroll"},k={marginLeft:"1vw",color:"#3268a8",position:"fixed",top:"2vh"},x=t(9439),w=t(2791),y={position:"fixed",bottom:0,width:"98vw",marginBottom:"1vw",alignItems:"center"},b={marginLeft:"1vw",marginRight:"1vw",paddingLeft:"1vw",borderRadius:"10px","& .MuiOutlinedInput-root":{"& fieldset":{border:"0"},"&:focus fieldset":{border:"0"},"&:hover fieldset":{border:"0 "}}},j={marginRight:"1vw",borderRadius:"20px",height:"50px"},I=t(4391),S=t(4294),C=t(5817);function N(e){var n=e.addNewTask,t=(0,w.useState)(""),a=(0,x.Z)(t,2),s=a[0],c=a[1],i=(0,C.Fg)().theme;return(0,p.jsxs)(v.Z,{direction:"row",sx:y,children:[(0,p.jsx)(I.Z,{onChange:function(e){c(e.target.value)},placeholder:"Add new task.",sx:(0,r.Z)((0,r.Z)({},b),{},{backgroundImage:"linear-gradient(".concat(i,",#3268a8)")}),value:s,fullWidth:!0}),(0,p.jsxs)(S.Z,{onClick:function(){return n(s,(function(){return c("")}))},variant:"contained",size:"small",sx:(0,r.Z)((0,r.Z)({},j),{},{backgroundImage:"linear-gradient(".concat(i,",#3268a8)")}),children:[" ","+"," "]})]})}var R=t(3433),F=t(3713),T=t(9434),_=t(8556),L=function(e,n){var t=(0,w.useRef)();function a(){return(a=(0,o.Z)((0,i.Z)().mark((function n(r){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.current=r,n.next=3,(0,l.Z)({url:"".concat(d,"/").concat(e),method:"post",data:r});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,_.D)((0,r.Z)({mutationFn:function(e){return a.apply(this,arguments)}},n))},O=t(3498),B=t(1621);function V(e){var n=e.children,t=(0,T.I0)(),s=(0,F.NL)(),i=(0,a.UO)().workspaceId,o=(0,w.useRef)(),u=(0,B.a)(),d=L(i,{onSuccess:function(e){var n=e.data;t(O.NV.showSnackbar({message:"Task added successfully",severity:"success"}));var a=(0,r.Z)({_id:n._id},o.current);s.setQueryData(["workspace",i],(function(e){return(0,r.Z)((0,r.Z)({},e),{},{data:[].concat((0,R.Z)(e.data),[a])})}))},onError:function(){t(O.NV.showSnackbar({message:"Failed to add new task",severity:"error"}))}});(0,c.Z)(d);return n({addNewTask:function(e,n){var t={body:e,isCompleted:!1,completedBy:"",createdBy:{id:u._id,name:u.userName}};o.current=t,d.mutate(t,{onSuccess:n})}})}function D(){return(0,p.jsx)(V,{children:function(e){return(0,p.jsx)(N,(0,r.Z)({},e))}})}var E={color:"#deeaff",width:"100%",padding:"1vh",paddingRight:"2vh",paddingLeft:"2vh",borderRadius:"10px",overflowWrap:"break-word"},P=t(7247);function U(e){var n=e.deleteTask,t=e.task,a=(0,C.Fg)().theme,s=(0,B.a)();return(0,p.jsx)(S.Z,{disabled:t.createdBy.id!==s._id,sx:(0,r.Z)((0,r.Z)({},j),{},{backgroundImage:"linear-gradient(".concat(a,",#3268a8)")}),onClick:n,children:(0,p.jsx)(P.Z,{})})}var W=function(){var e=(0,a.UO)().workspaceId,n=(0,F.NL)(),t=(0,w.useRef)();function s(){return(s=(0,o.Z)((0,i.Z)().mark((function n(r){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.current=r,n.next=3,(0,l.Z)({url:"".concat(d,"/").concat(e,"/").concat(r),method:"delete"});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,_.D)({mutationFn:function(e){return s.apply(this,arguments)},onSuccess:function(){n.setQueryData(["workspace",e],(function(e){return(0,r.Z)((0,r.Z)({},e),{},{data:e.data.filter((function(e){return e._id!==t.current}))})}))}})};function A(e){var n=e.children,t=e.task,r=W(),a=(0,T.I0)(),s={onSuccess:function(){return a(O.NV.showSnackbar({message:"Task deleted successfully",severity:"success"}))},onError:function(){return a(O.NV.showSnackbar({message:"Failed to delete task",severity:"error"}))}};return n({deleteTask:function(){return r.mutate(t._id,s)},task:t})}function q(e){return(0,p.jsx)(A,(0,r.Z)((0,r.Z)({},e),{},{children:function(e){return(0,p.jsx)(U,(0,r.Z)({},e))}}))}var z=t(872);function M(e){var n=e.taskComplete,t=(0,C.Fg)().theme;return(0,p.jsx)(S.Z,{sx:(0,r.Z)((0,r.Z)({},j),{},{backgroundImage:"linear-gradient(".concat(t,",#3268a8)")}),onClick:n,children:(0,p.jsx)(z.Z,{})})}var Q=function(){var e=(0,a.UO)().workspaceId,n=(0,F.NL)();function t(){return(t=(0,o.Z)((0,i.Z)().mark((function n(t){var r,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.taskId,a=t.completedBy,n.next=3,(0,l.Z)({url:"".concat(d,"/").concat(e,"/").concat(r),method:"patch",data:a});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,_.D)({mutationFn:function(e){return t.apply(this,arguments)},onSuccess:function(t){var a=t.data;n.setQueryData(["workspace",e],(function(e){return(0,r.Z)((0,r.Z)({},e),{},{data:e.data.map((function(e){return e._id===a._id?a:e}))})}))},onError:function(){return console.log("Error in complete task mutation")}})};function K(e){var n=e.children,t=e.taskId,r=Q(),a=(0,B.a)(),s=(0,T.I0)(),c={isCompleted:!0,completedBy:a.userName},i={onSuccess:function(){s(O.NV.showSnackbar({message:"Task Completed",severity:"success"}))},onError:function(){s(O.NV.showSnackbar({message:"Failed to complete task",severity:"error"}))}};return n({taskComplete:function(){return r.mutate({taskId:t,completedBy:c},i)}})}function H(e){return(0,p.jsx)(K,(0,r.Z)((0,r.Z)({},e),{},{children:function(e){return(0,p.jsx)(M,(0,r.Z)({},e))}}))}function Y(e){var n=e.task,t=(0,C.Fg)().theme;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(m.Z,{variant:"string",sx:(0,r.Z)((0,r.Z)({},E),{},{backgroundImage:"linear-gradient(".concat(t,",#3268a8)")}),children:[n.body,(0,p.jsxs)(v.Z,{sx:{marginTop:"1%"},direction:"row",justifyContent:"space-between",children:[(0,p.jsxs)(m.Z,{sx:{color:"#abdaed"},variant:"body2",children:["Assigned by: ",n.createdBy.name]}),(0,p.jsx)(m.Z,{sx:{color:"#abdaed"},variant:"body2",children:n.isCompleted?"Completed":"Pending"})]})]},n._id),n.isCompleted?(0,p.jsx)(q,{task:n}):(0,p.jsx)(H,{taskId:n._id})]})}var G=function(e){var n=e.tasks;return(0,p.jsx)(Z.g,{itemAlignment:"center",children:(0,p.jsxs)(v.Z,{direction:"column",sx:g,children:[(0,p.jsx)(m.Z,{variant:"h4",sx:k,children:"Tasks"}),0!==n.length?n.map((function(e){return(0,p.jsx)(v.Z,{direction:"row",spacing:"1vw",margin:"1vw",sx:{alignItems:"center"},children:(0,p.jsx)(Y,{task:e})},e._id)})):(0,p.jsx)(m.Z,{variant:"h6",children:"No tasks added."}),(0,p.jsx)(D,{})]})})};function J(){return(0,p.jsx)(h,{children:function(e){return(0,p.jsx)(G,(0,r.Z)({},e))}})}},872:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5649)),s=t(184),c=(0,a.default)((0,s.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.Z=c}}]);
//# sourceMappingURL=18.91c6ac8b.chunk.js.map