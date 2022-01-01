"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8762],{8762:(k,r,l)=>{l.r(r),l.d(r,{HomePageModule:()=>I});var g=l(6019),n=l(5793),u=l(9010),a=l(9949),o=l(3668),m=l(5769),f=l(4344);function d(e,i){1&e&&o._UZ(0,"ion-icon",17)}function p(e,i){1&e&&o._UZ(0,"ion-icon",18)}function Z(e,i){1&e&&(o.TgZ(0,"ion-label",19),o._uU(1,"System is offline"),o.qZA())}function h(e,i){1&e&&(o.TgZ(0,"ion-label",20),o._uU(1,"System is online"),o.qZA())}function b(e,i){1&e&&o._UZ(0,"ion-icon",21)}function T(e,i){1&e&&o._UZ(0,"ion-icon",22)}function H(e,i){1&e&&(o.TgZ(0,"ion-label",20),o._uU(1,"Heater is on"),o.qZA())}function P(e,i){1&e&&(o.TgZ(0,"ion-label",19),o._uU(1,"Heater is off"),o.qZA())}function _(e,i){1&e&&o._UZ(0,"ion-icon",23)}function A(e,i){1&e&&o._UZ(0,"ion-spinner",24)}const O=[{path:"",component:(()=>{class e{constructor(s,t,c){this.socket=s,this.auth=t,this.router=c,this.isLoading=!1,this.isHeaterOn=!1,this.isPiOnline=!1}ngOnInit(){this.socket.connect(),this.socket.on("PiStatus",s=>{this.isHeaterOn=s.isOn}),this.socket.on("isPiActive",s=>{this.isPiOnline=s.isPiActive})}onToggleHeater(){this.isLoading=!0,this.isHeaterOn&&(this.socket.emit("turnOff"),setTimeout(()=>{this.isHeaterOn=!1,this.isLoading=!1},1e3)),this.isHeaterOn||(this.socket.emit("turnOn"),setTimeout(()=>{this.isHeaterOn=!0,this.isLoading=!1},1e3))}onLogout(){this.auth.logout(),this.router.navigate(["/login"],{replaceUrl:!0})}}return e.\u0275fac=function(s){return new(s||e)(o.Y36(m.sk),o.Y36(f.e),o.Y36(a.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-home"]],decls:35,vars:12,consts:[["mode","ios"],["color","light",1,"ion-padding",3,"fullscreen"],["fixed",""],["size","12","size-sm","10","offsetSm","1","size-md","8","offsetMd","2","size-lg","6","offsetLg","3","size-xl","4","offsetXl","4"],[1,"ion-no-padding"],["lines","none",1,"ion-no-padding"],["slot","start","name","checkmark-circle","color","success",4,"ngIf"],["slot","start","name","close-circle","color","danger",4,"ngIf"],["color","danger",4,"ngIf"],["color","success",4,"ngIf"],["slot","start","name","bulb","color","success",4,"ngIf"],["slot","start","name","bulb-outline","color","danger",4,"ngIf"],["mode","md","color","primary","expand","block",2,"margin-block","15px",3,"disabled","click"],["slot","icon-only","name","power","size","large","color","light",4,"ngIf"],["name","bubbles",4,"ngIf"],[1,"ion-padding"],["mode","md","expand","block","fill","solid","color","danger",3,"click"],["slot","start","name","checkmark-circle","color","success"],["slot","start","name","close-circle","color","danger"],["color","danger"],["color","success"],["slot","start","name","bulb","color","success"],["slot","start","name","bulb-outline","color","danger"],["slot","icon-only","name","power","size","large","color","light"],["name","bubbles"]],template:function(s,t){1&s&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-title"),o._uU(3," Mi Home System "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(4,"ion-content",1),o.TgZ(5,"ion-grid",2),o.TgZ(6,"ion-row"),o.TgZ(7,"ion-col",3),o.TgZ(8,"ion-list",0),o.TgZ(9,"ion-list-header",4),o.TgZ(10,"ion-label"),o._uU(11,"System Status:"),o.qZA(),o.qZA(),o.TgZ(12,"ion-item",5),o.YNc(13,d,1,0,"ion-icon",6),o.YNc(14,p,1,0,"ion-icon",7),o.YNc(15,Z,2,0,"ion-label",8),o.YNc(16,h,2,0,"ion-label",9),o.qZA(),o.qZA(),o.TgZ(17,"ion-list",0),o.TgZ(18,"ion-list-header",4),o.TgZ(19,"ion-label",4),o._uU(20,"Heater Status:"),o.qZA(),o.qZA(),o.TgZ(21,"ion-item",5),o.YNc(22,b,1,0,"ion-icon",10),o.YNc(23,T,1,0,"ion-icon",11),o.YNc(24,H,2,0,"ion-label",9),o.YNc(25,P,2,0,"ion-label",8),o.qZA(),o.TgZ(26,"ion-button",12),o.NdJ("click",function(){return t.onToggleHeater()}),o.YNc(27,_,1,0,"ion-icon",13),o.YNc(28,A,1,0,"ion-spinner",14),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(29,"ion-footer",15),o.TgZ(30,"ion-grid",2),o.TgZ(31,"ion-row"),o.TgZ(32,"ion-col",3),o.TgZ(33,"ion-button",16),o.NdJ("click",function(){return t.onLogout()}),o._uU(34," Log Out "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&s&&(o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(9),o.Q6J("ngIf",t.isPiOnline),o.xp6(1),o.Q6J("ngIf",!t.isPiOnline),o.xp6(1),o.Q6J("ngIf",!t.isPiOnline),o.xp6(1),o.Q6J("ngIf",t.isPiOnline),o.xp6(6),o.Q6J("ngIf",t.isHeaterOn),o.xp6(1),o.Q6J("ngIf",!t.isHeaterOn),o.xp6(1),o.Q6J("ngIf",t.isHeaterOn),o.xp6(1),o.Q6J("ngIf",!t.isHeaterOn),o.xp6(1),o.Q6J("disabled",t.isLoading),o.xp6(1),o.Q6J("ngIf",!t.isLoading),o.xp6(1),o.Q6J("ngIf",t.isLoading))},directives:[n.Gu,n.sr,n.wd,n.W2,n.jY,n.Nd,n.wI,n.q_,n.yh,n.Q$,n.Ie,g.O5,n.YG,n.fr,n.gu,n.PQ],styles:["ion-label[_ngcontent-%COMP%]{font-weight:700}ion-button[_ngcontent-%COMP%]{height:45px;border-radius:7px}ion-list[_ngcontent-%COMP%]{--background:var(--ion-color-light);background:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{padding:5px;border-radius:7px;background:white;box-shadow:0 1px 3px #d3d3d3;box-sizing:border-box}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[g.ez,u.u5,n.Pc,x]]}),e})()}}]);