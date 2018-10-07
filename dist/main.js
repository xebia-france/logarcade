!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t){e.exports={WIDTH:640,HEIGHT:480}},function(e,t){const s={A:"A",B:"Z",C:"E",D:"T",START:"SPACE"};e.exports={CONTROLS_P1:s}},function(e,t,s){const n=s(3),r=s(4),a=s(5),o=s(6),i=s(7),d=s(10),u=s(0),c={type:Phaser.AUTO,width:u.WIDTH,height:u.HEIGHT,scene:[n,r,a,o,i,d]};new Phaser.Game(c)},function(e,t,s){const{CONTROLS_P1:n}=s(1),r=s(0);e.exports=class extends Phaser.Scene{constructor(){super({key:"sceneTitle"})}preload(){this.add.text(r.WIDTH/2,r.HEIGHT/2,"TITLE")}create(){this.time.delayedCall(3e3,()=>{this.scene.start("sceneDemo")},[],this),this.p1start=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[n.START])}update(){Phaser.Input.Keyboard.JustDown(this.p1start)&&this.scene.start("sceneGameOnePlayer")}}},function(e,t,s){const n=s(0),{CONTROLS_P1:r}=s(1);e.exports=class extends Phaser.Scene{constructor(){super({key:"sceneDemo"})}preload(){this.add.text(n.WIDTH/2,n.HEIGHT/2,"DEMO")}create(){this.time.delayedCall(3e3,()=>{this.scene.start("sceneScoresOnePlayer")},[],this),this.p1start=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[r.START])}update(){Phaser.Input.Keyboard.JustDown(this.p1start)&&this.scene.start("sceneGameOnePlayer")}}},function(e,t,s){const n=s(0);e.exports=class extends Phaser.Scene{constructor(){super({key:"sceneScoresOnePlayer"})}preload(){this.add.text(n.WIDTH/2,n.HEIGHT/2,"ONE PLAYER SCORES")}create(){this.time.delayedCall(3e3,()=>{this.scene.start("sceneScoresTwoPlayers")},[],this)}}},function(e,t,s){const n=s(0);e.exports=class extends Phaser.Scene{constructor(){super({key:"sceneScoresTwoPlayers"})}preload(){this.add.text(n.WIDTH/2,n.HEIGHT/2,"TWO PLAYERS SCORES")}create(){this.time.delayedCall(3e3,()=>{this.scene.start("sceneTitle")},[],this)}}},function(e,t,s){const{CONTROLS_P1:n}=s(1),r=s(0),a=s(8),{INITIAL_REMAINING_TIME:o}=s(9);e.exports=class extends Phaser.Scene{constructor(){super({key:"sceneGameOnePlayer"})}preload(){this.add.text(r.WIDTH/2,r.HEIGHT/2,"sceneGameOnePlayer"),this.load.audio("theme",["assets/audio/Retrojäbä_-_Retrojäbä_-_sbrp_tutorial_remix.mp3"]),a.forEach(e=>this.load.image(e.name,`assets/logos/${e.file}`)),this.buttons={}}create(){this.buttons.A=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[n.A]),this.buttons.B=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[n.B]),this.buttons.C=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[n.C]),this.buttons.D=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[n.D]),this.sound.add("theme").play(),this.remainingTime=o,this.time=this.add.text(400,50,this.remainingTime),this.start=new Date,this.logo=this.add.image(400,300,"Angular"),this.text1=this.add.text(100,300,"Angular"),this.text2=this.add.text(200,300,"VueJS"),this.text3=this.add.text(300,300,"React"),this.text4=this.add.text(400,300,"EmberJS")}update(){Phaser.Input.Keyboard.JustDown(this.buttons.A)&&this.onKeyDown(this.text1),Phaser.Input.Keyboard.JustDown(this.buttons.B)&&this.onKeyDown(this.text2),Phaser.Input.Keyboard.JustDown(this.buttons.C)&&this.onKeyDown(this.text3),Phaser.Input.Keyboard.JustDown(this.buttons.D)&&this.onKeyDown(this.text4);const e=((new Date).getTime()-this.start.getTime())/1e3;this.remainingTime=Math.round(o-e),this.time.setText(this.remainingTime)}onKeyDown(e){e.setTint(16711935,16776960,255,16711680),e.setFontSize(32),setTimeout(()=>{e.clearTint(),e.setFontSize(16)},150)}}},function(e,t){e.exports=[{name:"Angular",file:"angular.png"},{name:"EmberJS",file:"ember.png"},{name:"React",file:"react.png"},{name:"VueJS",file:"vue.png"}]},function(e,t){e.exports={INITIAL_REMAINING_TIME:99}},function(e,t,s){const n=s(0);e.exports=class extends Phaser.Scene{constructor(){super({key:"sceneGameTwoPlayers"})}preload(){this.add.text(n.WIDTH/2,n.HEIGHT/2,"sceneGameTwoPlayers")}create(){}}}]);