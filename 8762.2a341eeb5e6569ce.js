"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8762],{8762:(I,r,l)=>{l.r(r),l.d(r,{HomePageModule:()=>k});var g=l(6019),s=l(5793),u=l(9010),a=l(9949),o=l(3668),m=l(5769),f=l(4344);function d(e,n){1&e&&o._UZ(0,"ion-icon",15)}function p(e,n){1&e&&o._UZ(0,"ion-icon",16)}function h(e,n){1&e&&(o.TgZ(0,"ion-label",17),o._uU(1,"System is offline"),o.qZA())}function Z(e,n){1&e&&(o.TgZ(0,"ion-label",18),o._uU(1,"System is online"),o.qZA())}function b(e,n){1&e&&o._UZ(0,"ion-icon",19)}function H(e,n){1&e&&o._UZ(0,"ion-icon",20)}function P(e,n){1&e&&(o.TgZ(0,"ion-label",18),o._uU(1,"Heater is on"),o.qZA())}function _(e,n){1&e&&(o.TgZ(0,"ion-label",17),o._uU(1,"Heater is off"),o.qZA())}function T(e,n){1&e&&o._UZ(0,"ion-icon",21)}function O(e,n){1&e&&o._UZ(0,"ion-spinner",22)}const A=[{path:"",component:(()=>{class e{constructor(t,i,c){this.socket=t,this.auth=i,this.router=c,this.isLoading=!1,this.isHeaterOn=!1,this.isPiOnline=!1}ngOnInit(){this.socket.connect(),this.socket.on("PiStatus",t=>{this.isHeaterOn=t.isOn}),this.socket.on("isPiActive",t=>{this.isPiOnline=t.isPiActive})}onToggleHeater(){this.isLoading=!0,this.isHeaterOn&&(this.socket.emit("turnOff"),setTimeout(()=>{this.isHeaterOn=!1,this.isLoading=!1},1e3)),this.isHeaterOn||(this.socket.emit("turnOn"),setTimeout(()=>{this.isHeaterOn=!0,this.isLoading=!1},1e3))}onLogout(){this.auth.logout(),this.router.navigate(["/login"],{replaceUrl:!0})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(m.sk),o.Y36(f.e),o.Y36(a.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-home"]],decls:29,vars:12,consts:[["mode","ios"],["color","light",1,"ion-padding",3,"fullscreen"],[1,"ion-no-padding"],["lines","none",1,"ion-no-padding"],["slot","start","name","checkmark-circle","color","success",4,"ngIf"],["slot","start","name","close-circle","color","danger",4,"ngIf"],["color","danger",4,"ngIf"],["color","success",4,"ngIf"],["slot","start","name","bulb","color","success",4,"ngIf"],["slot","start","name","bulb-outline","color","danger",4,"ngIf"],["mode","md","color","primary","expand","block",2,"margin-block","15px",3,"disabled","click"],["slot","icon-only","name","power","size","large","color","light",4,"ngIf"],["name","bubbles",4,"ngIf"],[1,"ion-padding"],["mode","md","expand","block","fill","solid","color","danger",3,"click"],["slot","start","name","checkmark-circle","color","success"],["slot","start","name","close-circle","color","danger"],["color","danger"],["color","success"],["slot","start","name","bulb","color","success"],["slot","start","name","bulb-outline","color","danger"],["slot","icon-only","name","power","size","large","color","light"],["name","bubbles"]],template:function(t,i){1&t&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-title"),o._uU(3," Mi Home System "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(4,"ion-content",1),o.TgZ(5,"ion-list",0),o.TgZ(6,"ion-list-header",2),o.TgZ(7,"ion-label"),o._uU(8,"System Status:"),o.qZA(),o.qZA(),o.TgZ(9,"ion-item",3),o.YNc(10,d,1,0,"ion-icon",4),o.YNc(11,p,1,0,"ion-icon",5),o.YNc(12,h,2,0,"ion-label",6),o.YNc(13,Z,2,0,"ion-label",7),o.qZA(),o.qZA(),o.TgZ(14,"ion-list",0),o.TgZ(15,"ion-list-header",2),o.TgZ(16,"ion-label",2),o._uU(17,"Heater Status:"),o.qZA(),o.qZA(),o.TgZ(18,"ion-item",3),o.YNc(19,b,1,0,"ion-icon",8),o.YNc(20,H,1,0,"ion-icon",9),o.YNc(21,P,2,0,"ion-label",7),o.YNc(22,_,2,0,"ion-label",6),o.qZA(),o.TgZ(23,"ion-button",10),o.NdJ("click",function(){return i.onToggleHeater()}),o.YNc(24,T,1,0,"ion-icon",11),o.YNc(25,O,1,0,"ion-spinner",12),o.qZA(),o.qZA(),o.qZA(),o.TgZ(26,"ion-footer",13),o.TgZ(27,"ion-button",14),o.NdJ("click",function(){return i.onLogout()}),o._uU(28," Log Out "),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("fullscreen",!0),o.xp6(6),o.Q6J("ngIf",i.isPiOnline),o.xp6(1),o.Q6J("ngIf",!i.isPiOnline),o.xp6(1),o.Q6J("ngIf",!i.isPiOnline),o.xp6(1),o.Q6J("ngIf",i.isPiOnline),o.xp6(6),o.Q6J("ngIf",i.isHeaterOn),o.xp6(1),o.Q6J("ngIf",!i.isHeaterOn),o.xp6(1),o.Q6J("ngIf",i.isHeaterOn),o.xp6(1),o.Q6J("ngIf",!i.isHeaterOn),o.xp6(1),o.Q6J("disabled",i.isLoading),o.xp6(1),o.Q6J("ngIf",!i.isLoading),o.xp6(1),o.Q6J("ngIf",i.isLoading))},directives:[s.Gu,s.sr,s.wd,s.W2,s.q_,s.yh,s.Q$,s.Ie,g.O5,s.YG,s.fr,s.gu,s.PQ],styles:["ion-label[_ngcontent-%COMP%]{font-weight:700}ion-button[_ngcontent-%COMP%]{height:45px;border-radius:7px}ion-list[_ngcontent-%COMP%]{--background:var(--ion-color-light);background:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{padding:5px;border-radius:7px;background:white;box-shadow:0 1px 3px #d3d3d3;box-sizing:border-box}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[a.Bz.forChild(A)],a.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[g.ez,u.u5,s.Pc,x]]}),e})()}}]);